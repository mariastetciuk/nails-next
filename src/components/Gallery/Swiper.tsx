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
      className=" overflow-x-hidden pt-8 sm:pt-[50px]"
    >
       <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay:2 }}
        >
          <h2 className="relative text-center uppercase leading-[30px] font-extrabold text-red text-[64px] sm:leading-[33px] sm:text-[90px] text-opacity-70 mb-[30px] md:leading-[59px] md:text-[130px] md:mb-[40px] lg:text-[200px] lg:mb-[60px] lg:pt-[40px] lg:leading-[75px]">
            фото{" "}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay:2 }}
            >
              <span className=" font-bold left-1/2 -translate-x-1/2 text-black text-[45px] sm:text-[50px] md:text-[85px] text-opacity-1 md:-bottom-[102px] lg:bottom-0 lg:text-[110px]">
                робіт
              </span>
            </motion.div>
          </h2>
        </motion.div>
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
            <Image src={src} alt="thumbnail" loading='lazy' width={350} height={300} className=" rounded-xl md:w-[400px] md:h-[400px] lg:h-[500px] lg:w-[500px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
