import { categories } from '@/store/static'
import Link from 'next/link'

export default function CategoryList() {
  return (
    <section id="features" className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative container mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 text-secondary-foreground">
            <h2 className="h2 mb-4">Category List</h2>
            <p className="text-xl ">What are you looking for?</p>
          </div>
          {/* Card Items */}
          <div className="max-w-sm mx-auto grid text-primary-foreground gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {categories.map((category) => (
              <Link
                href={`/${category.value}`}
                key={category.value}
                className="relative text-secondary-foreground cursor-pointer h-full flex flex-col  gap-5 items-center shadow p-6 bg-card rounded-md hover:bg-accent  hover:scale-105 transition-all duration-300"
              >
                <div className="scale-150"> {category.icon}</div>
                <div> {category.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
