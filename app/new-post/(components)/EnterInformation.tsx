import "react-quill/dist/quill.bubble.css"
import Input from '@/components/input/Input'
import React from 'react'
import ReactQuill from "react-quill"
import useAppState from "@/store/state";

const EnterInformation = () => {
  const handleDescriptionChange = (value: string) => {
    setDescription(value); // Update the description state when the Quill editor content changes
  };
  const {   price,
    setPrice,
    title,
    setTitle,
    description,
    setDescription,} =useAppState(); 
  return (
    <section className="min-h-[500px] my-10">
      <Input type="text" name="title" id="title" placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input type="number" name="price" id="price" placeholder="Add Price" value={price.toString()} onChange={(e) => setPrice(Number(e.target.value))} />
      <ReactQuill
        theme="bubble"
        className="text-foreground bg-card quill border border-primary-foreground min-h-[300px]"
        value={description}
        onChange={handleDescriptionChange} // Pass the custom change handler
        placeholder="Describe the product, select the written text to format. Use ctrl + z or command + z to undo..."
      />
    </section>
  );
};

export default EnterInformation;
