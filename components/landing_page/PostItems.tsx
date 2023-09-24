import Link from 'next/link'
import prisma from '@/lib/prisma'
import Image from 'next/image'

interface FeaturedItemsProps {
  title: string
}

export default async function PostItems({ title }: FeaturedItemsProps) {
  const frontpageItems = await prisma.posts.findMany({
    where: {
      published: true,
      type: 'FRONTPAGE',
    },
    take: 20,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <section className="relative bg-card container mx-auto">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative p-4">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="lg:text-left text-center mb-8 md:mb-16 text-secondary-foreground">
            <h2 className="h2 mb-4 text-xl font-semibold">{title}</h2>
          </div>
          {/* Card Items */}
          <div className="max-w-sm mx-auto grid text-primary-foreground gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {frontpageItems.length > 0 ? (
              frontpageItems.map((item) => (
                <Link
                  href={`/${item.catSlug}/${item.slug}`}
                  key={item.id}
                  className="relative shadow cursor-pointer rounded-md h-full flex flex-col items-center  bg-card  hover:bg-accent hover:text-background hover:scale-105 transition-all duration-500"
                >
                  <div className="relative w-full h-56">
                    <Image
                      className="w-full h-full object-cover rounded-md"
                      src={item.img[0]}
                      alt={item.title}
                      width={180}
                      height={180}
                    />
                  </div>
                  <div className="absolute rounded-b-md bottom-0 left-0 right-0 p-4 bg-opacity-70 bg-black text-white text-center">
                    <div className="font-semibold text-lg">
                      {item.title.slice(0, 20)}
                    </div>
                    <div className="text-accent-foreground font-bold">
                      ${item.price}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-6 border">No Items to show</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
