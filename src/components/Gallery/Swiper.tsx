"use client";
import { gallery } from "@/data/navList";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { motion } from 'framer-motion'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "@/style/swiper.css"

const Gallery = () => {
  return (
    <section
      id="gallery"
      className=" pt-8"
    >
        <motion.h2
         viewport={{ once: true }}
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1,  y: 0 }}
         transition={{ ease: 'easeOut', duration: 1 }}
         className="text-center uppercase text-red text-6xl mb-5 font-semibold text-opacity-70 md:mb-8 md:text-7xl lg:mb-10 lg:text-8xl">
          галерея 
      </motion.h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
       
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
        }}
        modules={[EffectCoverflow]}
        
      >
        {gallery.map(({ id, src }) => (
          <SwiperSlide key={id} className="md:w-[400px] md:h-[400px] lg:h-[500px] lg:w-[500px]">
            <Image src={src} alt="thumbnail" width={350} height={300} className=" rounded-xl md:w-[400px] md:h-[400px] lg:h-[500px] lg:w-[500px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
