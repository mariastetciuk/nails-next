"use client";
import { useState, useEffect } from "react";
import { gallery } from "@/data/navList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";
import CustomNextButton from "./CustomNextButton";
import CustomPrevButton from "./CustomPrevButton";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/style/swiper.css";

const Gallery = () => {
  const [thumbSwipper, setThumbSwipper] = useState<any>(null);

  return (
    <section
      id="gallery"
      className="container pb-8 pt-4 md:pb-10 lg:pb-[60px] relative"
    >
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={thumbSwipper ? { swiper: thumbSwipper }: undefined}
        modules={[Navigation, Thumbs, FreeMode]}
        className=""
      >
        {gallery.map(({ id, src }) => (
          <SwiperSlide key={id} className="" >
            <Image
              src={src}
              alt="thumbnail"
              width={400}
              height={400}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
      onSwiper={setThumbSwipper}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper">
        {gallery.map(({ id, src }) => (
          <SwiperSlide key={id} className="" >
            <Image
              src={src}
              alt="thumbnail"
              width={200}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Gallery;
