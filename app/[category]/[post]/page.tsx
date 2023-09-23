import { headers } from 'next/headers'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import { formatDate } from '@/lib/date-formater'
import { notFound } from 'next/navigation'
import Carousel from '@/components/carousel/Carousel'

const page = async () => {
  const headersList = headers()
  const activePath = headersList.get('next-url')?.split('/').pop()
  const slug = decodeURIComponent(activePath || '')

  const post = await prisma.posts.findUnique({
    where: {
      slug: slug,
    },
  })

  if (!post) return notFound()

  const formattedDate = formatDate(post.createdAt)
  return (
    <div className=" my-10">
      <div className="max-w-4xl mx-auto">
        <div className=" shadow-md rounded-lg p-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <p className="text-gray-500 text-sm mb-4">
                Posted at: {formattedDate}
              </p>
            </div>
            <div className=" text-3xl">
              <strong>Price: {post.price} €</strong>
            </div>
          </div>
          <Carousel>
            {post.img.map((image) => (
              <Image
                width={800}
                height={450}
                key={image}
                src={image}
                alt={post.title}
              />
            ))}
          </Carousel>

          <div dangerouslySetInnerHTML={{ __html: post.desc }} />
        </div>
      </div>
    </div>
  )
}

export default page
