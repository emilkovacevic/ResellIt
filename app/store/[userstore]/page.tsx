import Image from 'next/image'
import prisma from '@/lib/prisma'
import PhoneNumber from '@/components/action-buttons/phone-number'
import { AiOutlineCheckCircle, AiOutlineStop } from 'react-icons/ai'
import ActionButton from '@/components/action-buttons/ActionButton'
import { formatDate } from '@/lib/date-formater'
import NotFoundMsg from '@/components/not-found/NotFoundMsg'

export default async function Page({
  params,
}: {
  params: { userstore: string }
}) {
  const store = await prisma.user.findUnique({
    where: {
      id: params.userstore,
    },
  })

  if (!store) return <NotFoundMsg title="Store" />

  const formattedUserDate = formatDate(store.createdAt)
  return (
    <div>
      <aside className="w-full lg:p-4 lg:w-1/4 lg:sticky top-0">
        <div className="sticky h-fit space-y-2 md:top-20 bg-card z-10">
          <div>
            <section className="inline-flex items-center gap-4 p-2">
              <Image
                width={895}
                height={552}
                loading="lazy"
                src={store.image || '/images/user.jpg'}
                alt={store.name || 'user'}
                className="w-10 h-10 rounded-full"
              />
              <div>{store.name}</div>
            </section>
            <section className=" p-2">
              <div className="text-sm">
                <ul className="flex flex-col justify-center gap-4">
                  <li className="inline-flex items-center">
                    Phone:
                    <PhoneNumber phone={store.tel || ''} />
                  </li>
                  <li>Email: {store.email}</li>
                  <li>Number of items sold: {store.soldItems}</li>
                  <li>Member since: {formattedUserDate}</li>
                  <li className="inline-flex gap-2">
                    Verified:{' '}
                    {store.emailVerified ? (
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
                  <li className="inline-flex gap-4">
                    <ActionButton title="Message" route_id={store.id} />
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </aside>
      <main className="max-w-4xl mx-auto md:mt-4 p-4 bg-card w-full">
        Store page {JSON.stringify(params.userstore)}
      </main>
    </div>
  )
}
