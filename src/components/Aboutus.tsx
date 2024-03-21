"use client";

import { Cinzel } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["500"] });

const AboutUs = () => {
  return (
    <section id="about-us" className="overflow-x-hidden text-red  py-8 md:py-10 lg:py-[60px]">
      <div className="container">
        <h2 className={` mb-8 text-2xl font-medium text-center md:text-4xl md:mb-10`}>
          {" "}
          5 ПРИЧИН ОБРАТИ{" "}
          <span
            className={`${cinzel.className} pt-1 text-3xl block md:text-5xl`}
          >
            Beautiful Nails
          </span>
        </h2>
        <div className="flex flex-wrap gap-5 md:text-xl border-l-2 border-red md:border-none md:gap-[60px] lg:gap-0">
          <div className="flex pl-6 border-l-2 md:border-red md:pb-10">
            <AnimatePresence>
              <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-5 md:max-w-[50%] "
              >
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  У нас майстрині з десятирічним досвідом.
                  <span className="absolute -left-[34px] top-0 block w-4 h-4 rounded-full bg-red "></span>
                </motion.p>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  Більше 100 кольорів гель-лаків, різноманітний декор.
                  <span className="absolute -left-[34px] top-1 block w-4 h-4 rounded-full bg-red "></span>
                </motion.p>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  Даємо гарантію на свою роботу, підбираємо носибельний матеріал
                  відповідно до ваших нігтів.
                  <span className="absolute -left-[34px] top-1 block w-4 h-4 rounded-full bg-red "></span>
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <div className="hidden relative md:block md:w-[50%]">
              <Image
                src={"/about/image1.jpg"}
                alt={"image"}
                width={150}
                height={170}
                className="absolute left-[30%] top-0 lg:w-[220px] lg:h-[230px] lg:left-[45%] "
              />
              <Image
                src={"/about/image2.jpg"}
                alt={"image"}
                width={150}
                height={170}
                className="absolute left-[10%] z-[2] top-[60px] lg:w-[220px] lg:h-[230px] lg:top-[120px] lg:left-[20%]"
              />
            </div>
          </div>
          <div className="flex gap-5 md:gap-[50px] md:pb-10 lg:gap-8">
            <div className="hidden relative md:block md:w-[50%] md:h-[180px] lg:hidden">
              <Image
                src={"/about/image3.jpg"}
                alt={"image"}
                width={150}
                height={170}
                className="absolute right-[40%] z-[1] -bottom-10"
              />
              <Image
                src={"/about/image4.jpg"}
                alt={"image"}
                width={150}
                height={170}
                className="absolute left-[50%] top-0
              "
              />
            </div>
            <AnimatePresence>
              <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-5 pl-6 md:border-l-2 border-red md:w-[50%]"
              >
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  Дотримуємося усіх норм дезинфекції та стерилізації
                  інструментів, для кожного клієнта окрема одноразова пилочка.
                  <span className="absolute -left-[34px] top-0 block w-4 h-4 rounded-full bg-red "></span>
                </motion.p>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  Тривалість процедури - 90 хвилин.
                  <span className="absolute -left-[34px] top-2 block w-4 h-4 rounded-full bg-red lg:top-3"></span>
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
