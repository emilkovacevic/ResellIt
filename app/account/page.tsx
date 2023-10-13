import { formatDate } from '@/lib/date-formater'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import { AiOutlineCheckCircle, AiOutlineStop } from 'react-icons/ai'
import ActionButton from '@/components/action-buttons/ActionButton'

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

  if (!user) return <main>Not Found</main>

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
                className="bg-background h-28 shadow-lg flex flex-wrap justify-between gap-4"
              >
                <Image
                  src={post.img[0] || ''}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="object-cover h-full object-center"
                />
                <div className="flex-1">
                  <h2 className="my-1 font-bold">{post.title}</h2>
                  <ul>
                    <li>Price: {post.price}</li>
                    <li>Posted at {formatDate(post.createdAt)}</li>
                    <li>Total Views: {post.views}</li>
                  </ul>
                </div>
                <ActionButton title="Edit" route_id={post.id} />
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
            <section className=" p-2">
              <div className="text-sm">
                <ul className="flex flex-col justify-center gap-4">
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
                  <li>
                    <ActionButton
                      title="Edit profile"
                      main={true}
                      route_id={user.id}
                    />
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default page
