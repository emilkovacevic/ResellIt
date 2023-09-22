import Link from 'next/link'
import prisma from '@/lib/prisma'
import Image from 'next/image'

export default async function FeaturedItems() {

    const frontpageItems = await prisma.posts.findMany({
        where: {
            published: true,
            type: 'FRONTPAGE'
        },
        take: 20,
        orderBy: {
            createdAt: 'desc'
        }
    })

    return (
        <section id="features" className="relative bg-card">
            <div
                className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
                aria-hidden="true"
            ></div>
            <div className="relative container mx-auto px-4 sm:px-6 ">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="text-left mb-8 md:mb-16 text-secondary-foreground">
                        <h2 className="h2 mb-4 text-xl font-semibold">Featured Items</h2>
                    </div>
                    {/* Card Items */}
                    <div className="max-w-sm mx-auto grid text-primary-foreground gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        {
                        frontpageItems.length > 0 ?
                        frontpageItems.map((item) => (
                            <Link
                                href={`/${item.catSlug}/${item.slug}`}
                                key={item.id}
                                className="relative border cursor-pointer h-full flex flex-col items-center  bg-card rounded hover:bg-accent hover:text-background hover:scale-105 transition-all duration-500"
                            >
                                <div className="relative w-full h-56 overflow-hidden object-center">
                                    <Image
                                        src={item.img[0]}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-70 bg-black text-white text-center">
                                    <div className="font-semibold text-lg">{item.title}</div>
                                    <div className="text-accent-foreground font-bold">${item.price}</div>
                                </div>
                            </Link>
                        ))
                    :
                    <div className='p-6 border'>No Items to show</div>
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}