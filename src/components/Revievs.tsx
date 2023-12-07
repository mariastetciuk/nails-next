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
      className=" text-red py-8 md:py-10 lg:py-12"
    >
      <div className="container lg:flex gap-5">
        <h2 className="relative text-center uppercase leading-[30px] font-extrabold text-red text-[114px] sm:leading-[33px] sm:text-[130px] text-opacity-70 mb-10 md:leading-[59px] md:text-[210px] md:mb-[100px] lg:text-[200px] lg:mb-0 lg:w-[560px] lg:pt-[150px]">
          нам{" "}
          <span className=" font-bold left-1/2 -translate-x-1/2 text-black text-[45px] sm:text-[50px] md:text-[85px] text-opacity-1 md:-bottom-[102px] lg:bottom-0 lg:text-[85px]">
            довіряють
          </span>
        </h2>
        <Swiper
        spaceBetween={10}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{delay: 5000}}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay]}
          className=" w-[250px] h-[300px] sm:w-[370px] sm:h-[400px] shadow-xl md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[550px]"
        >
          {revievs.map(({ id, src }) => (
            <SwiperSlide key={id} className=" relative transition-all duration-700 ">
              
              <Image
                src={src}
                alt="reviev"
                width={280}
                height={320}
                className=" w-[250px] sm:w-[370px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[450px] lg:w-[450px]"
                
              />
            
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Revievs;
