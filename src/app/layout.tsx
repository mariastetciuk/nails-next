import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Beautiful Nails. Студія манікюру та педикюру',
  description: 'МАНІКЮР | ПЕДИКЮР | Онлайн запис на манікюр. Івано-Франківськ - Студія манікюру та педикюру Beautiful Nails',
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
      <Head>
        <link rel='canonical' href='https://beautifulnails.if.ua/' />
      </Head>
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
