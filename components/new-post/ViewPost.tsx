'use client'

import useAppState from '@/store/state'
import { slugify } from '@/utils/slugify'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axiosInstance from '@/axios/instance'
import shortid from 'shortid'
import Image from 'next/image'
import DOMPurify from 'dompurify'

type postType = 'STANDARD' | 'FEATURED' | 'FRONTPAGE'

const ViewPost = () => {
  const [selectedPostType, setSelectedPostType] = useState<postType>('STANDARD')
  const router = useRouter()
  const {
    selectedCategory,
    title,
    price,
    description,
    mediaUrls,
    setSelectedCategory,
    setFiles,
    setPrice,
    setTitle,
    setDescription,
    setMediaUrls,
    setCurrentStep,
  } = useAppState()

  const cleanDescription = DOMPurify.sanitize(description)

  const handleSubmit = async () => {
    const postSlug = slugify(`${shortid.generate()}-${slugify(title)}`)
    try {
      const res = await axiosInstance.post('/api/addpost', {
        body: JSON.stringify({
          title,
          desc: description,
          price,
          type: selectedPostType,
          img: mediaUrls,
          slug: postSlug,
          catSlug: selectedCategory,
        }),
      })

      if (res.status === 200) {
        router.push(`/${selectedCategory}/${postSlug}`)
        setSelectedCategory(null)
        setFiles([])
        setTitle('')
        setPrice(0)
        setDescription('')
        setMediaUrls([])
        setCurrentStep(1)
      }
    } catch (error) {
      console.error('Error posting:', error)
    }
  }

  return (
    <div className="flex items-center justify-center my-10">
      <div className="max-w-3xl mx-auto w-full bg-card p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="postType" className="font-semibold">
            Select Post Type:
          </label>
          <select
            id="postType"
            className="block w-full mt-1 p-2 text-primary-foreground font-bold border rounded-md"
            value={selectedPostType}
            onChange={(e) => setSelectedPostType(e.target.value as postType)}
          >
            <option value="STANDARD">Standard</option>
            <option value="FEATURED">Featured</option>
            <option value="FRONTPAGE">Front Page</option>
          </select>
          <div className="mb-6 mt-4">
            <legend className="text-sm mt-4">Selection Legend</legend>
            <ul>
              <li>Standard: Gets standard listing</li>
              <li>Featured: Is pushed on top of search page</li>
              <li>Front page: Is shown on the landing page</li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Your Item</h2>
        <div className="mb-4">
          <p className="font-semibold">Selected Category:</p>
          <p>{selectedCategory}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Title:</p>
          <p>{title}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Price:</p>
          <p>${price}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Description:</p>
          <div
            className="my-4 p-2"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          ></div>
        </div>
        <div className="mb-4">
          <p className="font-semibold my-10">Images</p>
          <div className="flex justify-start gap-4 flex-wrap">
            {mediaUrls?.map((url) => (
              <Image
                key={url}
                width={180}
                height={180}
                src={url}
                alt="image"
                className="w-40 h-40 rounded-lg shadow-lg mb-2"
              />
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 w-full p-6 text-2xl text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewPost
