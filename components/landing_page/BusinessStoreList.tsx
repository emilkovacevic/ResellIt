import React from 'react'
import Swipper from '../carousel/Carousel'
import Link from 'next/link'

// TODO: INTEGRATE AN BUSINESSES LIST (eg. LTT)
const tempBusinesses = Array.from({ length: 10 }, () => 1)

const BusinessStoreList = () => {
  return (
    <section className="relative container mx-auto py-12 md:py-20">
      <div className="lg:text-left p-4 text-center mb-8 md:mb-16 text-secondary-foreground">
        <h2 className="h2 mb-4 text-xl font-semibold">Businesses</h2>
      </div>
      <Swipper slidesPerView={5}>
        {tempBusinesses.map((business) => (
          <Link key={business} href="/">
            <div className="w-56 bg-card h-56 hover:shadow-lg hover:scale-105">
              {business}s
            </div>
          </Link>
        ))}
      </Swipper>
    </section>
  )
}

export default BusinessStoreList
