
import Image from 'next/image'
import Hero from '@/components/Hero'
import AboutUs from '@/components/Aboutus'


export default function Home() {
  return (
    <main className="mx-auto">
    <Hero />
    <AboutUs />
    </main>
  )
}
