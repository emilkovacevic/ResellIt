import { headers } from 'next/headers'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import Image from 'next/image'
import Carousel from '@/components/carousel/Carousel'
import { notFound } from 'next/navigation'

const page = async () => {
  const headersList = headers()
  const activePath = headersList.get('next-url')?.split('/').pop()
  const slug = decodeURIComponent(activePath || '')
  console.log(slug)
  const posts = await prisma.posts.findMany({
    where: {
      published: false,
      catSlug: slug
    },
    take: 10
  })

  if (!posts.length) return notFound();

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 mx-2">
      {posts.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/${product.slug}`}
          className="block w-full h-full hover:shadow-md" // Set a fixed height for the Link element
        >
          <div className="bg-white rounded-lg shadow-lg h-full"> {/* Make the inner div also h-full */}
            <Carousel>
              {product.img.map((img) => (
                <div key={img} className="relative w-full h-56">
                  <Image
                    className='rounded-t-lg'
                    alt="product"
                    src={img}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </Carousel>
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold my-4">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}

export default page