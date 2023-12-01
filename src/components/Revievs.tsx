"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { revievs } from "@/data/navList";
import Image from "next/image";
import '@/style/revievs.css'

const Revievs = () => {
  return (
    <section
      id="revievs"
      className=" text-red  py-8 md:py-10 lg:pb-12 mb-[150px]"
    >
      <div className="container h-[500px] lg:flex flex-row-reverse items-center gap-10">
        <h2 className="relative text-center uppercase leading-[90px] font-extrabold text-red text-[114px] text-opacity-70 mb-7 md:leading-[150px] md:text-[210px] md:mb-[80px] lg:text-[240px] lg:mb-5 lg:leading-[60px]">
          нам{" "}
          <span className="absolute -bottom-14 font-bold left-1/2 -translate-x-1/2 text-black text-[45px] md:text-[85px] text-opacity-1 md:-bottom-[102px] lg:-bottom-[120px] lg:text-[100px] ">
            довіряють
          </span>
        </h2>
        <Swiper
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{delay: 5000}}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay]}
          className="flex justify-center items-center "
        >
          {revievs.map(({ id, src }) => (
            <SwiperSlide key={id} className="flex justify-center items-center transition-all duration-700">
                <div  className="relative ml-5 min-w-[250px] sm:ml-8 sm:w-[370px] h-[400px] shadow-xl md:mx-auto md:w-[450px] md:h-[450px]">
              <Image
                src={src}
                alt="reviev"
                width={280}
                height={320}
                className="sm:w-[370px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[450px]"
                
              />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Revievs;
