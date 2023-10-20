'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const EditProfile = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'unauthenticated') router.push('/signin')

  const user = session.data?.user
  return (
    <main className="container mx-auto flex flex-wrap">
      <div>{JSON.stringify(user)}</div>
    </main>
  )
}

export default EditProfile
