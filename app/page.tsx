import CategoryList from "@/components/landing_page/CategoryList";
import PostItems from "@/components/landing_page/PostItems";
import Hero from "@/components/landing_page/Hero";

export default function Home() {
  return <main>
    <Hero />
    <CategoryList />
    <PostItems title="Featured Items" />
  </main>
}
