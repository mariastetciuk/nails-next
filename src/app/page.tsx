// import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import AboutUs from '@/components/Aboutus'
import Gallery from '@/components/Gallery/Swiper'
import Revievs from '@/components/Revievs'
import Price from '@/components/Price'
import Team from '@/components/Team'
import Awards from '@/components/Awards'


// const MapComponent = dynamic(() => import('../components/Map'), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="mx-auto">
    <Hero />
    <Gallery />
    <Price />
    <AboutUs />
    <Revievs />
     <Awards />
    <Team />
   
    {/* <MapComponent /> */}
    </main>
  )
}
