import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Head from 'next/head'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beautiful Nails',
  description: 'Manicure and pedicure Ivano-Frankivsk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      <Head>
        <link rel="icon" href='/favicon.png' />
      </Head>
      
      <body className={montserrat.className}>
        <Header />
        {children}</body>
    </html>
  )
}
