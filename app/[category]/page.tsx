import prisma from '@/lib/prisma'
import Link from 'next/link'
import Image from 'next/image'
import Carousel from '@/components/carousel/Carousel'
import { notFound } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  const uniqueCatSlugs = await prisma.posts.findMany({
    select: {
      catSlug: true,
    },
    where: {
      catSlug: params.category,
    },
    distinct: ['catSlug'],
  })

  const posts = await prisma.posts.findMany({
    where: {
      catSlug: {
        in: uniqueCatSlugs.map((item) => item.catSlug),
      },
    },
    take: 30,
  })

  if (!posts.length) return notFound()

  return (
    <main className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 ">
      {posts.map((product) => (
        <Link
          key={product.id}
          href={`/${params.category}/${product.slug}`}
          className="block w-full h-full hover:shadow-md  rounded-md "
        >
          <div className="bg-white rounded-md shadow-lg h-full">
            <Carousel>
              {product.img.map((img) => (
                <div key={img} className="relative w-full h-56">
                  <Image
                    className="w-full h-full object-cover rounded-t-md"
                    alt="product"
                    src={img}
                    width={180}
                    height={180}
                  />
                </div>
              ))}
            </Carousel>
            <div className="p-4 flex justify-between items-center gap-4">
              <h3 className="text-xl text-primary font-semibold my-4">
                {product.title}
              </h3>
              <p className="text-secondary font-extrabold text-xl">
                ${product.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}
