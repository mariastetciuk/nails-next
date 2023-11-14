"use client";
import { useState, useEffect } from "react";
import { gallery } from "@/data/navList";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Mousewheel } from 'swiper/modules'
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import '@/style/swiper.css'

const Gallery = () => {
   const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
   const [slidesPerView, setSlidesPerView] = useState(3)
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
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
    <section className="mb-[200px] relative">
      <div className="container">
        <Image
          src={gallery[currentSlideIndex - 1].src}
          alt="large-image"
          width={320}
          height={250}
          className="mb-6 mx-auto md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[550px]"
        />
        <Swiper
          slidesPerView={slidesPerView}
          // slidesPerGroup={3}
          
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Mousewheel]}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={(sl) => console.log(sl.realIndex)}
          className="my-swiper "
        >
          {gallery.map(({ id, src, style }) => (
            <SwiperSlide key={id} className="">
              <Image
                src={src}
                alt="thumbnail"
               width={90}
                height={50}
                className={`${style}   md:h-[90px] lg:w-[110px] lg:h-[100px]`}
                onClick={()=>handleSlideChange(id)}
                
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
