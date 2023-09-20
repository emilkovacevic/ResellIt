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
        <main className="grid bg-background place-items-center min-h-screen p-6">
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  )
}
