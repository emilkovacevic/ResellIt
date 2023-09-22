import React, { useState, useEffect } from 'react';
import Image from "next/image"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot,
  deleteObject,
} from 'firebase/storage';
import { app } from '@/lib/firebase';
import { BsFillImageFill } from 'react-icons/bs';
import useAppState from '@/store/state';

const UploadImages = () => {
  const { files,
    setFiles,
    mediaUrls,
    setMediaUrls, } = useAppState()
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const uploadFiles = async () => {
    const storage = getStorage(app);
    const urls: string[] = [];

    for (const file of files) {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot: UploadTaskSnapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Error uploading file:', error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          urls.push(downloadURL);
          setUploadProgress(null);
          setMediaUrls(urls);
        }
      );

      try {
        await uploadTask;
      } catch (error) {
        console.error('Error uploading file:', error);
      }
      finally {
        setFiles([])
      }
    }
  };

  useEffect(() => {
    if (files?.length > 0) {
      uploadFiles();
    }
  }, [files]);

  const deleteImage = async (index: number) => {
    try {
      const storage = getStorage(app);
      const fileUrl = mediaUrls[index];

      // Remove the file from Firebase Storage
      const storageRef = ref(storage, fileUrl);
      await deleteObject(storageRef);

      // Update the mediaUrls state by removing the deleted image URL
      const updatedMediaUrls = [...mediaUrls];
      updatedMediaUrls.splice(index, 1);
      setMediaUrls(updatedMediaUrls);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <section>
      <div className="flex gap-2 justify-center my-10">
        <input
          type="file"
          id="image"
          onChange={(e) => {
            const selectedFiles = e.target.files;
            if (selectedFiles && selectedFiles.length > 0) {
              setFiles(Array.from(selectedFiles));
            }
          }}
          style={{ display: 'none' }}
          multiple // Allow multiple file selection
        />
        <label
          htmlFor="image"
          className="cursor-pointer mr-2 p-2 rounded-sm hover:bg-accent hover:text-background border"
        >
          <span className="inline-block">
            Add Images{' '}
            <BsFillImageFill size={40} className="mx-auto" />
          </span>
        </label>
      </div>
      {uploadProgress !== null && (
        <div className="mb-2">
          Uploading: {uploadProgress.toFixed(2)}%
          <progress value={uploadProgress} max="100"></progress>
        </div>
      )}
      <ImageGallery mediaUrls={mediaUrls} onDelete={deleteImage} />
    </section>
  );
};

interface ImageGalleryProps {
  mediaUrls: string[];
  onDelete: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ mediaUrls, onDelete }: ImageGalleryProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {mediaUrls?.length ? (
        mediaUrls?.map((url, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <Image
              width={800}
              height={800}
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full rounded-lg shadow-lg object-cover "
            />
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))
      ) : (
        <div className="text-center my-20">
          <h2 className="text-lg font-semibold my-4">Upload at least one image</h2>
          <p>Odds of a successful sale are greater when people see what they are buying.</p>
        </div>
      )}
    </div>
  );
};

export default UploadImages;
