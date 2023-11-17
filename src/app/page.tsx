
import Image from 'next/image'
import Hero from '@/components/Hero'
import AboutUs from '@/components/Aboutus'
import Gallery from '@/components/Gallery/Swiper'
import Revievs from '@/components/Revievs'
// import Slider from '@/components/Gallery/Swiper'


export default function Home() {
  return (
    <main className="mx-auto">
    <Hero />
    <Gallery />
    <AboutUs />
    <Revievs />
  {/* <Slider /> */}
    </main>
  )
}
