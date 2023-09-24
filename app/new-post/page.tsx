import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import NavigationButtons from '@/components/new-post/NavigationButtons'
import PostSteps from '@/components/new-post/PostSteps'

const NewPostpage = async () => {
  const session = await getServerSession()

  if (!session) {
    redirect('/signin')
  }

  return (
    <main className="max-w-4xl mx-auto">
      <section className="py-4 text-center">
        <h1 className="text-lg md:text-2xl font-bold my-2">
          Complete this form to list your item
        </h1>
        <p className="md:text-lg">
          Your first three items will be listed completely free, for 30 days .
        </p>
      </section>
      <PostSteps />
      <NavigationButtons />
    </main>
  )
}

export default NewPostpage
