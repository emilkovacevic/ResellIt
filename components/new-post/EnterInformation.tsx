'use client'

import 'react-quill/dist/quill.snow.css'
import Input from '@/components/input/Input'
import React, { useEffect, useState } from 'react'
import useAppState from '@/store/state'
import ReactQuill from 'react-quill'

const EnterInformation = () => {
  const [isMounted, setMounted] = useState(false)
  const handleDescriptionChange = (value: string) => {
    setDescription(value) // Update the description state when the Quill editor content changes
  }
  const { price, setPrice, title, setTitle, description, setDescription } =
    useAppState()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) return <div>loading...</div>

  return (
    <section className="flex flex-col min-h-[500px] my-10">
      <Input
        type="text"
        name="title"
        id="title"
        placeholder="Add Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="number"
        name="price"
        id="price"
        placeholder="Add Price"
        value={price.toString()}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <ReactQuill
        theme="snow"
        className="text-foreground bg-card quill flex-1"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Describe the product..."
      />
    </section>
  )
}

export default EnterInformation
