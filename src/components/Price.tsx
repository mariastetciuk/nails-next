"use client";

import { price } from "@/data/navList";
import Image from "next/image";
import { motion } from "framer-motion";

const Price = () => {
  return (
    <section id="prise">
      <div className="container pb-[40px] pt-[50px] lg:py-[60px]">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h2 className="relative text-center uppercase leading-[30px] font-extrabold text-red text-[84px] sm:leading-[33px] sm:text-[90px] text-opacity-70 mb-[80px] md:w-[400px] md:mx-auto md:leading-[59px] md:text-[130px] md:mb-[100px] lg:text-[200px] lg:mb-[90px] lg:w-[560px] lg:pt-[40px] lg:leading-[75px]">
            наш{" "}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <span className=" font-bold left-1/2 -translate-x-1/2 text-black text-[45px] sm:text-[50px] md:text-[85px] text-opacity-1 md:-bottom-[102px] lg:bottom-0 lg:text-[110px]">
                прайс
              </span>
            </motion.div>
          </h2>
        </motion.div>

        <ul className="flex flex-wrap gap-[80px] md:gap-x-[50px] md:gap-y-[80px] lg:gap-x-8 lg:gap-y-[90px]">
          {price.map(({ id, title, src, description, price }) => (
            <li
              key={id}
              className="mx-auto px-3 relative pt-[80px] text-center bg-lightgrey rounded-3xl w-[250px] h-[300px] sm:w-[300px] sm:px-4 lg:w-[350px] lg:pt-[90px]"
            >
              <Image
                src={src}
                alt="nail"
                width={130}
                height={130}
                className=" absolute left-1/2 -translate-x-1/2 -top-[60px] border-4 rounded-full border-white"
              />
              <h2 className="text-lg font-medium mb-3">{title}</h2>
              <p className="">{description}</p>
              <p className="absolute left-1/2 -translate-x-1/2 bottom-4 border-2 border-red mx-auto bg-white w-[150px] py-2 rounded-2xl">
                {price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Price;
