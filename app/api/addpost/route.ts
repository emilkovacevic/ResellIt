import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { options } from '../auth/[...nextauth]/options'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const session = await getServerSession(options)
  if (!session) {
    return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 })
  }
  try {
    const { body } = await request.json() // Parse the JSON string from the body
    const postData = JSON.parse(body) // Parse the JSON data

    // Now you can access the properties from postData
    const { title, desc, price, type, img, cat, slug, catSlug } = postData

    await prisma.posts.create({
      data: {
        title,
        desc,
        price,
        catSlug,
        type,
        img,
        cat,
        slug,
        userEmail: session.user.email,
      },
    })

    return NextResponse.json({ message: 'Post placed' }, { status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 },
    )
  }
}
