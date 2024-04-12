import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'МАНІКЮР | ПЕДИКЮР | Онлайн запис на манікюр. Івано-Франківськ - Студія манікюру та педикюру Beautiful Nails',
  description: 'Манікюр та педикюр Івано-Франківськ',
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
    <html lang="uk">
      
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
