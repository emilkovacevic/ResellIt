'use client'

import { signOut } from 'next-auth/react'
import { AiOutlineLogin } from 'react-icons/ai'

const SignOut = () => {
  return (
    <div className="hover:text-foreground_hover">
      <button className="inline-flex gap-4" onClick={() => signOut()}>
        <AiOutlineLogin className="md:hidden" size={25} />
        Sign Out
      </button>
    </div>
  )
}

export default SignOut
