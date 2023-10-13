'use client'

import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'
import { AiFillBackward, AiOutlineHome } from 'react-icons/ai'

interface NotFoundMsg {
  title: string
}

interface ButtonProps {
  title: string
  children: ReactElement
}

const Button = ({ title, children }: ButtonProps) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="p-4 inline-flex items-center gap-4 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded"
    >
      {children}
      {title}
    </button>
  )
}

const NotFoundMsg = ({ title }: NotFoundMsg) => {
  return (
    <main className="max-w-4xl mx-auto space-y-8 shadow text-center md:mt-8 p-4 bg-card w-full">
      <h1 className="text-lg font-bold md:text-2xl">{title} not found</h1>
      <section className="inline-flex gap-4">
        <Button title="Go Back">
          <AiFillBackward />
        </Button>
        <Button title="Home page">
          <AiOutlineHome />
        </Button>
      </section>
    </main>
  )
}

export default NotFoundMsg
