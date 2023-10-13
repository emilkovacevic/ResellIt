'use client'

export default function GlobalError({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <main className="grid place-items-center">
          <section className="bg-card p-4">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
          </section>
        </main>
      </body>
    </html>
  )
}
