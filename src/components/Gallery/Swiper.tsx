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
  const [currentGallery, setCurrentGallery] = useState("/gallery/img1.jpg");
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const currentImg = (id: number) => {
    const activeSlide = gallery.find((img) => img.id === id);
    const currentImg = activeSlide?.src || "/gallery/img1.jpg";
    setCurrentGallery(currentImg);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const onClickPrev = () => {
    thumbsSwiper.slidePrev();
    const activeSlide = gallery.find(
      (img) => img.id === thumbsSwiper.realIndex
    );
    const currentImg = activeSlide?.src || "/gallery/img1.jpg";
    setCurrentGallery(currentImg);
  };

  const onClickNext = () => {
    thumbsSwiper.slideNext();
    const activeSlide = gallery.find(
      (img) => img.id === thumbsSwiper.realIndex
    );
    const currentImg = activeSlide?.src || "/gallery/img1.jpg";
    setCurrentGallery(currentImg);
  };

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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, slidesPerView]);

  return (
    <section id="gallery" className="container py-4 relative">
       <CustomPrevButton onClick={onClickPrev} />
           <CustomNextButton onClick={onClickNext} />
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        onSlideChange={(swiper) => {
          const activeSlide = gallery.find(
            (img) => img.id === swiper.realIndex
          );
          const currentImg = activeSlide?.src || "/gallery/img1.jpg";
          setCurrentGallery(currentImg);
        }}
        loop={true}
        touchEventsTarget="wrapper"
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper cursor-pointer mb-8"
      >
        {gallery.map(({ id, src }) => (
          <SwiperSlide key={id} className="" onClick={() => currentImg(id)}>
            <Image
              src={src}
              alt="thumbnail"
              width={90}
              height={50}
              className={`${currentGallery === src ? 'current__slider' : 'slider'} "w-[90] h-[50] md:h-[90px] lg:w-[110px] lg:h-[110px]"`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={currentGallery}
        alt="thumbnail"
        width={320}
        height={250}
        className="mx-auto md:w-[500px] sm:w-[350px]  md:h-[450px]  lg:w-[600px] lg:h-[550px]"
      />
    </section>
  );
};
export default Gallery;
