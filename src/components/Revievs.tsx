"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { revievs } from "@/data/navList";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/style/revievs.css";
import { useWidth } from "@/hook/useWidth";

const Revievs = () => {
  const currenrWidth = useWidth();
  return (
    <section
      id="revievs"
      className="overflow-x-hidden text-red pb-8 pt-[64px] md:pb-10 md:pt-[94px] lg:pb-[60px] lg:pt-[60px]"
    >
      <div className="container lg:flex gap-5">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <h2 className="relative text-center uppercase leading-[30px] font-extrabold text-red text-[114px] sm:leading-[33px] sm:text-[130px] text-opacity-70 mb-10 md:leading-[59px] md:text-[210px] md:mb-[40px] lg:text-[200px] lg:mb-0 lg:w-[560px] lg:pt-[150px]">
            нам{" "}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 280 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 1 }}
            >
              <span className=" font-bold left-1/2 -translate-x-1/2 text-black text-[45px] sm:text-[50px] md:text-[85px] text-opacity-1 md:-bottom-[102px] lg:bottom-0 lg:text-[85px]">
                довіряють
              </span>
            </motion.div>
          </h2>
        </motion.div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay]}
          className="swiper__container shadow-xl"
        >
          {revievs.map(({ id, src }) => (
            <SwiperSlide
              key={id}
              className="swiper__slide relative transition-all duration-700 bg-white"
            >
              <Image
                src={src}
                loading='lazy'
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
