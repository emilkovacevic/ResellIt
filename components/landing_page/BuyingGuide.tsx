import Link from 'next/link'

const BuyingGuide = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground">
            Buying Guide
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground mt-5">
            Stay informed with our buying guide and make the best decisions.
          </p>
          <Link
            href="/buying-guide"
            className="bg-primary hover:bg-accent hover:outline text-primary-foreground font-semibold px-6 py-3 rounded-full inline-block text-xl sm:text-2xl mt-8 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BuyingGuide
