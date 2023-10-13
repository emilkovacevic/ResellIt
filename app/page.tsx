import CategoryList from '@/components/landing_page/CategoryList'
import PostItems from '@/components/landing_page/PostItems'
import Hero from '@/components/landing_page/Hero'
import BusinessStoreList from '@/components/landing_page/BusinessStoreList'
import BuyingGuide from '@/components/landing_page/BuyingGuide'

export default function Home() {
  return (
    <main className="space-y-6">
      <Hero />
      <CategoryList />
      <PostItems title="Featured Items" type="FRONTPAGE" />
      <BusinessStoreList />
      <PostItems title="Sold in the last 24 hours" type="SOLD" />
      <BuyingGuide />
    </main>
  )
}
