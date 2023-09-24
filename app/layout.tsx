import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/lib/auth-provider'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider } from '@/lib/theme-provider'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio blog project',
  description: 'Personal portfolio blog project',
  keywords:
    'next, react, developer, portfolio, design, project, professional, blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <div className="bg-background text-foreground flex flex-col min-h-screen">
              <Navbar />
              <div className="grow w-full self-center">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
