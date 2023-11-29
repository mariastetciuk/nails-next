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
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const onClickPrev = () => thumbsSwiper.slidePrev();
  const onClickNext = () => thumbsSwiper.slideNext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    if (windowWidth <= 480) {
      setSlidesPerView(4);
    }
    if (windowWidth > 480 && windowWidth < 768) {
      setSlidesPerView(5);
    }
    if (windowWidth >= 768 && windowWidth < 1100) {
      setSlidesPerView(8);
    }
    if (windowWidth >= 1100) {
      setSlidesPerView(10);
    }
    console.log(windowWidth);
    console.log(slidesPerView);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, slidesPerView]);

  return (
    <section className="container py-4">
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        loop={true}
        navigation={true}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mb-4"
      >
        {gallery.map(({ id, src }) => (
          <SwiperSlide key={id} className="">
            <Image
              src={src}
              alt="thumbnail"
              width={90}
              height={50}
              className="md:h-[90px] lg:w-[110px] lg:h-[110px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        loop={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="relative w-[280px] sm:w-[350px] md:w-[500px] md:h-[450px] sm:pl-5 lg:w-[630px] lg:h-[550px]"
      >
        {gallery.map(({ id, src }) => (
          <SwiperSlide key={id} className=" justify-center items-center">
            <Image
              src={src}
              alt="thumbnail"
              width={320}
              height={250}
              className=" md:w-[500px] sm:w-[350px]  md:h-[450px]  lg:w-[600px] lg:h-[550px]"
            />
          </SwiperSlide>
        ))}
          
      </Swiper>
      <div className="relative mx-auto max-w-[350px]">
      <CustomPrevButton onClick={onClickPrev} />
      <CustomNextButton onClick={onClickNext} />
      </div>
    
    
   
    </section>
  );
};
export default Gallery;
