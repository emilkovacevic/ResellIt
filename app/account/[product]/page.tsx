'use client'

const page = ({ params }: { params: { product: string } }) => {
  return (
    <main className="container mx-auto">
      <h1>edit product page {params.product}</h1>
    </main>
  )
}

export default page
