'use client'

import React, { useState, useEffect, MouseEvent } from 'react'
import Link from 'next/link'
import SignOut from '@/utils/SignOut'
import ToggleTheme from '../theme/ToggleTheme'
import { useSession } from 'next-auth/react'
import {
  AiFillHome,
  AiOutlineFileAdd,
  AiOutlineLogin,
  AiOutlineUser,
} from 'react-icons/ai'

const Mobilenav: React.FC = () => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (isOpen) {
        event.preventDefault()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('scroll', handleScroll, {
        passive: false,
      } as any)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('scroll', handleScroll, {
        passive: false,
      } as any)
    }
  }, [isOpen])

  // Add event listener to close the navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && target && !target.classList.contains('mobilenav')) {
        closeDrawer()
      }
    }

    document.addEventListener('click', handleClickOutside as any)

    return () => {
      document.removeEventListener('click', handleClickOutside as any)
    }
  }, [isOpen])

  return (
    <li className="md:hidden">
      <div className="flex items-center justify-between px-4">
        <button onClick={toggleDrawer} className="text-3xl cursor-pointer">
          &#9776;
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform ease-in-out duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
          className={`bg-secondary w-3/4 px-4 h-full transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="py-8">
            <li className="my-8">
              <Link
                href="/new-post"
                className={`hover:bg-primary ${
                  session
                    ? 'bg-primary font-extrabold text-primary-foreground'
                    : 'hover:text-accent-foreground bg-primary font-extrabold text-primary-foreground'
                } inline-flex hover:bg-secondary-foreground gap-4 items-center py-2 px-4 w-full font-extrabold text-lg`}
              >
                <AiOutlineFileAdd />
                LIST NEW ITEM
              </Link>
            </li>
            <li className="my-4">
              <Link href="/" className="inline-flex gap-4 items-center">
                <AiFillHome size={25} /> Home
              </Link>
            </li>
            {session ? (
              <>
                <li className="my-4">
                  <Link
                    className="inline-flex gap-4 items-center"
                    href="/account"
                  >
                    <AiOutlineUser size={25} /> Account
                  </Link>
                </li>
                <li className="my-4">
                  <div>
                    <SignOut />
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="my-4">
                  <Link
                    href="/signin"
                    className="inline-flex gap-4 items-center"
                  >
                    <AiOutlineLogin size={25} />
                    Sign In
                  </Link>
                </li>
                <li className="my-4">
                  <Link
                    href="/register"
                    className="inline-flex gap-4 items-center"
                  >
                    <AiOutlineLogin size={25} />
                    Register
                  </Link>
                </li>
              </>
            )}
            <li className="my-4">
              <span className="inline-flex gap-4 items-center hover:text-foreground-hover">
                <ToggleTheme title="Theme" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}

export default Mobilenav
