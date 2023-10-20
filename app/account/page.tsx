import { formatDate } from '@/lib/date-formater'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import { AiOutlineCheckCircle, AiOutlineStop } from 'react-icons/ai'
import ActionButton from '@/components/action-buttons/ActionButton'
import NotFoundMsg from '@/components/not-found/NotFoundMsg'

const page = async () => {
  const session = await getServerSession()

  if (!session?.user.email) return redirect('/signin')

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      Post: true,
    },
  })

  if (!user) return <NotFoundMsg title="Account" />

  const formattedUserDate = formatDate(user.createdAt)

  return (
    <div className="flex container mx-auto relative flex-col-reverse tracking-wider py-10 lg:flex-row ">
      <main className="max-w-4xl mx-auto md:mt-4 p-4 bg-card w-full">
        <section className="mb-6">
          <h1 className="text-lg font-bold mb-4">Your Items</h1>
          <div className="space-y-4">
            {user.Post.map((post) => (
              <article
                key={post.id}
                className="bg-background w-full h-auto md:h-36 shadow-lg flex flex-wrap justify-between gap-4"
              >
                <Image
                  src={post.img[0] || ''}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="object-cover h-16 w-1/4 md:h-full object-center"
                />
                <section className="flex-1 w-2/4">
                  <h2 className="my-1 font-bold text-sm md:text-base text-ellipsis">
                    {post.title}
                  </h2>
                  <ul className="hidden md:block">
                    <li>Active: {post.published.toString()}</li>
                    <li>Price: {post.price}</li>
                    <li>Created At: {formatDate(post.createdAt)}</li>
                    <li>Total Views: {post.views}</li>
                  </ul>
                </section>
                <section className="flex flex-wrap h-fit gap-1 justify-end w-1/4">
                  <ActionButton
                    title="Edit"
                    route="account"
                    route_id={post.id}
                  />
                  <ActionButton title="Stats" route="account" />
                </section>
              </article>
            ))}
          </div>
        </section>
      </main>
      <aside className="w-full lg:p-4 lg:w-1/4 lg:sticky top-0">
        <div className="sticky h-fit space-y-2 md:top-20 bg-card z-10">
          <div>
            <section className="inline-flex items-center gap-4 p-2">
              <Image
                width={895}
                height={552}
                loading="lazy"
                src={user.image || '/images/user.jpg'}
                alt={user.name || 'user'}
                className="w-10 h-10 rounded-full"
              />
              <div>{user?.name || 'No name'}</div>
            </section>
            <section className="px-2 py-1">
              <div className="text-sm">
                <ul className="space-y-4">
                  {/* TODO: IMPLEMENT A CREDITS TO POST NEW ITEMS FEATURE */}
                  <li className="inline-flex w-full items-center bg-accent text-primary font-extrabold p-2">
                    Credits: 10
                  </li>
                  <li className="inline-flex items-center">
                    Phone: {user.tel || 'not set'}
                  </li>
                  <li>Email: {user.email}</li>
                  <li>Total items sold: {user?.soldItems}</li>
                  <li>Member since: {formattedUserDate}</li>
                  <li className="inline-flex gap-2">
                    Verified:{' '}
                    {user.emailVerified ? (
                      <span title="yes">
                        <AiOutlineCheckCircle size={18} color="green" />
                      </span>
                    ) : (
                      <span title="no">
                        {' '}
                        <AiOutlineStop size={18} color="orange" />
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </section>
            <section className="inline-flex gap-4 p-2">
              <ActionButton title="Messages" route="account/messages" />
              <ActionButton title="Edit profile" route="account/edit-profile" />
            </section>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default page
