
import { headers } from 'next/headers'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import { formatDate } from '@/lib/date-formater'
import { notFound } from 'next/navigation';
import Carousel from '@/components/carousel/Carousel'
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from 'react-icons/bs';
import Link from 'next/link';
import GoToUserStore from '../(components)/GoToUserStore';

const page = async () => {
    const headersList = headers()
    const activePath = headersList.get('next-url')?.split('/').pop()
    const slug = decodeURIComponent(activePath || '')

    const post = await prisma.posts.findUnique({
        where: {
            slug: slug,
        },
        include: {
            user: true
        }
    })

    if (!post) return notFound();

    const formattedDate = formatDate(post.createdAt)
    const formattedUserDate = formatDate(post.user.createdAt)
    return (
        <div className="flex container mx-auto relative flex-col tracking-wider py-10 lg:flex-row ">

            <main className="max-w-3xl mx-auto mt-4 p-4 bg-card">
                <section className="mb-6">
                    <div className='flex justify-between'>
                        <div>
                            <div>{post.type}</div>
                            <h1 className="mb-4 text-3xl font-semibold">{post.title}</h1>
                            <div className='my-4 text-2xl font-bold text-secondary-foreground'>Price: ${post.price}</div>
                        </div>
                        <div title='Item posted at'>{formattedDate}</div>
                    </div>
                    <Carousel>
                        {post.img.map(images => (
                            <Image
                                key={images}
                                width={895}
                                height={552}
                                src={images}
                                alt={`Illustration for ${post.title}`}
                                loading="lazy"
                                className="w-96 h-96 mb-4 rounded-md mx-auto"
                            />
                        ))}
                    </Carousel>
                    <div dangerouslySetInnerHTML={{ __html: post.desc }} />
                </section>
            </main>
            <aside className="w-full p-4 lg:w-1/4">
                <div className="sticky  h-fit space-y-2 top-20 bg-card z-[999]">
                    <div >
                        <div className='inline-flex items-center gap-4 p-2'>
                            <Image
                                width={895}
                                height={552}
                                loading="lazy"
                                src={post.user.image || ''}
                                alt={post.user.name || 'profile'}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>{post.user.name}</div>
                        </div>
                        <div className=' p-2'>
                            <div className="text-sm">
                                <ul className='flex flex-col justify-center gap-4'>
                                    <li>Phone: {post.user.tel || 'not listed'}</li>
                                    <li>Email: {post.user.email}</li>
                                    <li>Number of items sold: {post.user.soldItems}</li>
                                    <li>Member since: {formattedUserDate}</li>
                                    <li className='inline-flex gap-2'>Verified: {post.user.emailVerified ? <span title='yes'><BsHandThumbsUpFill size={18} color="green" /></span> : <span title='no'> <BsHandThumbsDownFill size={18} color='orange' /></span>}</li>
                                <li>
                                    <GoToUserStore user_id={post.user.id} />
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </aside>
        </div>
    )
}

export default page
