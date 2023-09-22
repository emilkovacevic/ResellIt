'use client'

import { signOut } from "next-auth/react";

const SignOut = () => {
    return (
        <button  className="hover:text-red-500" onClick={() => signOut()}>Sign Out</button>
    )
}

export default SignOut