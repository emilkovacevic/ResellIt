'use client'

import { useRouter } from 'next/navigation'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const NotFound = () => {
  const router = useRouter()
  return (
    <main className="flex items-center my-10 justify-center">
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
        <p className="p-3 text-sm font-medium rounded-full text-primary bg-background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-primary md:text-3xl">
          404 | Page not found
        </h1>
        <p className="mt-4 text-foreground">
          The page you are looking for doesn&apos;t exist. Here are some helpful
          links:
        </p>

        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center border rounded-lg hover:text-primary hover:bg-background hover:border-accent-foreground text-popover-foreground bg-popover focus:ring-4 focus:ring-primary"
          >
            <AiOutlineArrowLeft size={25} />

            <span className="px-2">Go back</span>
          </button>

          <button
            onClick={() => router.push('/')}
            className="inline-flex text-primary-foreground items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center border rounded-lg hover:bg-background hover:text-primary hover:border-accent-foreground bg-primary focus:ring-4 focus:ring-primary"
          >
            Take me home
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound