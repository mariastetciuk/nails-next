"use client";
import { useState, useEffect } from "react";
import { gallery } from "@/data/navList";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Mousewheel } from 'swiper/modules'
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import '@/style/swiper.css'
import Link from "next/link";

const Gallery = () => {
   const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
   const [slidesPerView, setSlidesPerView] = useState(3)
   const [windowWidth, setWindowWidth] = useState<number>(0);

   const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if(typeof window !== 'undefined') {
setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    if(windowWidth <= 480) {
setSlidesPerView(3)
    } if(windowWidth > 480 && windowWidth < 768 ) {
      setSlidesPerView(4)
    } if(windowWidth >= 768 && windowWidth < 1100) {
      setSlidesPerView(6)
    } if(windowWidth >= 1100) {
setSlidesPerView(7)
    }
    console.log(windowWidth);
    console.log(slidesPerView)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, slidesPerView]);

  const handleSlideChange = (slider: number) => {
    setCurrentSlideIndex(slider)
   
  };

  return (
    <section id="gallery" className=" relative py-8 md:py-10 lg:py-12">
      
      <div className="container ">
      <Swiper
          slidesPerView={slidesPerView}
          loop={true}
          mousewheel
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Mousewheel]}
          // onSwiper={(swiper) => console.log(swiper.realIndex)}
          onSlideChange={(sl) => setCurrentSlideIndex(sl.realIndex + 1)}
          className="my-swiper mb-6"
        >
          {gallery.map(({ id, src }) => (
            <SwiperSlide key={id} className="">
              <Image
                src={src}
                alt="thumbnail"
               width={90}
                height={50}
                className="md:h-[90px] lg:w-[110px] lg:h-[110px]"
                onClick={()=>handleSlideChange(id)}
                
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          src={gallery[currentSlideIndex - 1].src}
          alt="large-image"
          width={320}
          height={250}
          className="mb-6 lg:mb-10  mx-auto md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[550px]"
        />
        <Link href={'https://www.instagram.com/beautiful.nails.if'} rel="noopener noreferrer" target='_blank' className="block text-center mx-auto text-red border-2 bg-white border-red font-medium  py-2 w-[150px] rounded-3xl hover:text-white hover:bg-red md:w-[200px] md:text-lg lg:text-xl"> Побачити ще</Link>
      </div>
      
    </section>
  );
};

export default Gallery;
