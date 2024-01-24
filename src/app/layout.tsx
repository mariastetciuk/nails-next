import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beautiful Nails',
  description: 'Manicure and pedicure Ivano-Frankivsk',
  icons: {
    icon: {
      url: '/favicon.png',
      href: '/favicon.png'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      
      <body className={montserrat.className}>
        <header>
        <Header />
        </header>
        <main>
        {children}
        </main>
        <footer>
          <Footer />
        </footer>
        </body>
    </html>
  )
}
