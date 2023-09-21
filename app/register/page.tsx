'use client'

import { useRouter, redirect } from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import Input from '@/components/input/Input'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

interface RegisterData {
  name: string
  email: string
  password: string
}

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .nonempty('Password is required'),
})

const Register = () => {
  const { data: session } = useSession()

  const router = useRouter()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: zodResolver(schema) })

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    try {
      await axios.post('/api/register', data)
      // TODO: create a better msg
      alert('Account created, please log in')
      router.push('/signin')
    } catch (error) {
      console.log(error)
    }
  }

  if (session) redirect('/')

  return (
    <main className="min-h-screen flex items-center justify-center text-center">
      <div className="bg-primary text-foreground shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-4">Create an Account</h1>
          <div className="mb-4">
            <Controller
              render={({ field }) => (
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...field}
                  error={errors.name?.message}
                />
              )}
              name="name"
              control={control}
              defaultValue=""
            />
          </div>

          <div className="mb-4">
            <Controller
              render={({ field }) => (
                <Input
                  type="text"
                  id="email"
                  placeholder="Email"
                  {...field}
                  error={errors.email?.message}
                />
              )}
              name="email"
              control={control}
              defaultValue=""
            />
          </div>

          <div className="mb-4">
            <Controller
              render={({ field }) => (
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...field}
                  error={errors.password?.message}
                />
              )}
              name="password"
              control={control}
              defaultValue=""
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="p-2 bg-accent rounded-sm hover:bg-primary font-bold w-full"
            >
              Submit
            </button>
          </div>

          <div className="mt-8">
            Do you have an account?{' '}
            <Link href="/signin" className="text-secondary w-full">
              SignIn
            </Link>
          </div>
        </form>
        <div>
          <p className="my-4">or</p>
          <p>Continue with</p>
          <button onClick={() => signIn('google')}>
            <FcGoogle className="mt-4 mx-auto" />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Register

