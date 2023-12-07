import dynamic from 'next/dynamic'
import Image from 'next/image'
import Hero from '@/components/Hero'
import AboutUs from '@/components/Aboutus'
import Gallery from '@/components/Gallery/Swiper'
import Revievs from '@/components/Revievs'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

const MapComponent = dynamic(() => import('../components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="mx-auto">
    <Hero />
    <Gallery />
    <AboutUs />
    <Revievs />
    <MapComponent />
    <Footer />
  
    </main>
  )
}
