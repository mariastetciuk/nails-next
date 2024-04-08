"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { revievs } from "@/data/navList";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/style/revievs.css";
import { useWidth } from "@/hook/useWidth";
import Link from "next/link";

const Revievs = () => {
  const currenrWidth = useWidth();
  return (
    <section
      id="revievs"
      className="overflow-x-hidden text-red pb-8 pt-[64px] md:pb-10 md:pt-[94px] lg:pb-[60px] lg:pt-[60px]"
    >
      <div className="container">
      <div className=" lg:flex gap-5">
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
          className="swiper__container shadow-xl mb-10"
        >
          {revievs.map(({ id, src }) => (
            <SwiperSlide
              key={id}
              className="swiper__slide relative transition-all duration-700 bg-white "
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
      <div className="flex flex-wrap gap-3 mx-auto max-w-[500px] lg:ml-[650px] lg:flex-nowrap lg:gap-5 lg:max-w-[400px] bg:ml-[700px]">
     
        <Link href={'https://maps.app.goo.gl/h15DVJTr8CbYPgk28'} rel="noopener noreferrer" target='_blank' className="shadow-xl text-center mx-auto img__btn block w-[300px] p-2 bg-opacity-50 rounded-sm uppercase text-red text-opacity-70 font-medium border-2 border-red border-opacity-50 hover:bg-red hover:bg-opacity-50 hover:text-white hover:text-opacity-100 hover:border-transparent focus:bg-red focus:bg-opacity-50 focus:text-white focus:border-transparent focus:text-opacity-100 ">всі відгуки</Link>
        <Link href={'https://g.page/r/CebA-uEqZl5UEAI/review'} rel="noopener noreferrer" target='_blank' className="shadow-xl text-center mx-auto img__btn block w-[300px] p-2 bg-opacity-50 rounded-sm uppercase text-white font-medium bg-red  hover:bg-white hover:text-red hover:text-opacity-70 hover:border-2 hover:border-red hover:border-opacity-50  focus:bg-white focus:text-red focus:text-opacity-70 focus:border-opacity-50 focus:border-2 focus:border-red">залишити відгук</Link>
      </div>
      </div>
    </section>
  );
};
export default Revievs;
