/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Awards = () => {
    return <section className="overflow-x-hidden">
        <div className="container pb-[40px] pt-[50px] lg:py-[60px]">
             <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h2 className="relative text-center uppercase leading-[30px] font-extrabold text-red text-[84px] sm:leading-[33px] sm:text-[90px] text-opacity-70 mb-[90px]  md:w-[400px] md:mx-auto md:leading-[59px] md:text-[130px] md:mb-[130px] lg:text-[180px] lg:mb-[160px] lg:w-[560px] lg:pt-[40px] lg:leading-[75px]">
            наші{" "}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 250 }}
              whileInView={{ opacity: 1, x: -1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <span className="absolute top-[15px] font-bold -translate-x-1/2 text-black text-[45px] sm:text-[50px] md:text-[85px] text-opacity-1 lg:top-[19px] lg lg:text-[85px]">
                відзнаки
              </span>
            </motion.div>
          </h2>
        </motion.div>
<ul className=" text-red flex flex-wrap gap-14 md:flex-nowrap justify-center md:gap-1">
    <li className="">
           <Image className="m-auto rounded-lg mb-8 shadow-red shadow-2xl sm:h-[200px] md:w-[200px] md:h-[280px] lg:w-[230px] lg:h-[330px] bg:w-[300px] bg:h-[400px] lg:mb-10"  src={'/awards/1.png'}
                alt="avard"
                width={150}
                height={150}
                >
                    
                </Image>
                <div className=" w-[80%] m-auto sm:w-[70%] md:w-[83%] lg:w-[60%]">
                <p className="font-semibold text-center md:text-lg lg:text-xl bg:text-2xl">Відзнака</p>
                <p className=" md:text-lg text-center ">від проекту "Знак якості" в номінації - "Якість, досконалість та патріотизм"</p>
        </div>
    </li>
     <li >
           <Image className="m-auto rounded-lg mb-8 shadow-red shadow-2xl sm:h-[200px] md:w-[200px] md:h-[280px] lg:w-[230px] lg:h-[330px] bg:w-[300px] bg:h-[400px] lg:mb-10"  src={'/awards/2.jpg'}
                alt="avard"
                width={150}
                height={150}
                >
                    
                </Image>
                <div className="w-[80%] m-auto sm:w-[70%] md:w-[80%] lg:w-[60%]">
                <p className="font-semibold text-center md:text-lg lg:text-xl bg:text-2xl">Диплом </p>
                <p className=" md:text-lg text-center ">номінанта міжнародної премії для підприємців та блогерів "TOP 100 Company"</p>
       </div>
    </li>
</ul>
        </div>
    </section>
}

export default Awards