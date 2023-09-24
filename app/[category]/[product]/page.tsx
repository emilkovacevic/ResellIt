import { headers } from 'next/headers'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import { formatDate } from '@/lib/date-formater'
import { notFound } from 'next/navigation'
import Carousel from '@/components/carousel/Carousel'
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from 'react-icons/bs'
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify'
import ActionButton from '@/components/action-button/ActionButton'

export default async function Page({
  params,
}: {
  params: { product: string }
}) {
  const post = await prisma.posts.findUnique({
    where: {
      slug: params.product,
    },
    include: {
      user: true,
    },
  })
  const cleanDescription = DOMPurify.sanitize(
    post?.desc || '<div>No descriprion</div>',
  )

  if (!post) return notFound()

  const formattedDate = formatDate(post.createdAt)
  const formattedUserDate = formatDate(post.user.createdAt)
  return (
    <div className="flex container mx-auto relative flex-col-reverse tracking-wider py-10 lg:flex-row ">
      <main className="max-w-4xl mx-auto md:mt-4 p-4 bg-card w-full">
        <section className="mb-6">
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col gap-4">
              <div>
                <Link
                  className="uppercase py-4 underline text-xl"
                  href={post.catSlug}
                >
                  {post.catSlug}
                </Link>
              </div>
              <h1 className="text-3xl font-semibold">{post.title}</h1>
              <div className="text-2xl font-bold text-secondary-foreground">
                Price: ${post.price}
              </div>
            </div>
            <div title="Item posted at">{formattedDate}</div>
          </div>
          <div>
            <Carousel title="Product images">
              {post.img.map((images) => (
                <Image
                  key={images}
                  width={400}
                  height={400}
                  src={images}
                  alt={`Illustration for ${post.title}`}
                  loading="lazy"
                  className="w-full h-96 md:h-[600px] object-cover"
                />
              ))}
            </Carousel>
          </div>
          <div
            className="my-4"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        </section>
      </main>
      <aside className="w-full lg:p-4 lg:w-1/4">
        <div className="sticky h-fit space-y-2 md:top-20 bg-card z-10">
          <div>
            <div className="inline-flex items-center gap-4 p-2">
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
            <div className=" p-2">
              <div className="text-sm">
                <ul className="flex flex-col justify-center gap-4">
                  <li>Phone: {post.user.tel || 'not listed'}</li>
                  <li>Email: {post.user.email}</li>
                  <li>Number of items sold: {post.user.soldItems}</li>
                  <li>Member since: {formattedUserDate}</li>
                  <li className="inline-flex gap-2">
                    Verified:{' '}
                    {post.user.emailVerified ? (
                      <span title="yes">
                        <BsHandThumbsUpFill size={18} color="green" />
                      </span>
                    ) : (
                      <span title="no">
                        {' '}
                        <BsHandThumbsDownFill size={18} color="orange" />
                      </span>
                    )}
                  </li>
                  <li className="inline-flex gap-4">
                    <ActionButton title="Message" user_id={post.user.id} />
                    <ActionButton title="Store" user_id={post.user.id} />
                  </li>
                  <li>
                    <ActionButton title="Buy" main={true} user_id={post.id} />
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
