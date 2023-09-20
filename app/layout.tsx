import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/lib/auth-provider'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider } from '@/lib/theme-provider'

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
            <div className="bg-background flex flex-col min-h-screen">
              <Navbar />
              <div className="grow">{children}</div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
