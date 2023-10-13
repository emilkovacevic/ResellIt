import React from 'react'
import Swipper from '../carousel/Carousel'
import Link from 'next/link'

// TODO: INTEGRATE AN BUSINESSES LIST (eg. LTT)
const tempBusinesses = Array.from({ length: 10 }, (_, index) => index)

const BusinessStoreList = () => {
  return (
    <section className="relative container mx-auto pt-4 pb-8 bg-secondary">
      <div className="lg:text-left p-4 text-center mb-8 text-secondary-foreground">
        <h2 className="h2 text-xl md:text-2xl font-semibold">Businesses</h2>
      </div>
      <Swipper slidesPerView={5}>
        {tempBusinesses.map((business) => (
          <Link key={business} href="/">
            <div className="w-56 bg-card h-56 hover:shadow-lg hover:scale-105">
              {business}
            </div>
          </Link>
        ))}
      </Swipper>
    </section>
  )
}

export default BusinessStoreList
