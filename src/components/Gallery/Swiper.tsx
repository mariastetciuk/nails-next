"use client";
import { gallery } from "@/data/navList";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "@/style/swiper.css"

const Gallery = () => {
  return (
    <section
      id="gallery"
      className=" pt-8"
    >
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
            <Image src={src} alt="thumbnail" width={350} height={300} className=" md:w-[400px] md:h-[400px] lg:h-[500px] lg:w-[500px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
