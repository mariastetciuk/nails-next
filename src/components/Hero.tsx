import FixedBtn from "./btnComponents.tsx/Sociale";
import Link from "next/link";
import { Cinzel, Roboto_Serif } from "next/font/google";
import { socialeList } from "@/data/navList";
import OrderServise from "./OrderServise";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });
const vollkorn = Roboto_Serif({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section className="relative bgImage w-screen scree text-white ">
      <div className="container max-h-[550px] pt-[110px] md:pt-[140px] md:h-[700px] lg:pt-[140px] lg:h-[800px]">
        <h1
          className={`${cinzel.className} text-4xl  text-center mb-1 uppercase sm:text-5xl md:text-7xl md:mb-1  lg:text-8xl lg:mb-3`}
        >
          beautiful Nails
        </h1>
        <h2
          className={`${vollkorn.className} text-center mb-8 uppercase text-lg sm:text-xl md:text-2xl md:mb-10 lg:text-4xl lg:mb-14`}
        >
          cтудія манікюру та педикюру
        </h2>
        <div className="mx-auto px-[25px] sm:px-60px md:flex sm:gap-[100px] lg:mb-10 ">
<div className="flex flex-wrap gap-3 w-[300px] sm:w-[350px] sm:text-xl md:text-2xl md:w-[490px] md:gap-6 lg:w-[500px] lg:border-r-2 lg:border-white lg:border-opacity-25">
        <Link href={"tel: +380989505917"} className="flex gap-6 md:gap-8 transition-all duration-300 hover:text-red hover:font-medium focus:text-red">
          <svg className="w-[26px] h-[26px] text-center fill-current text-current md:w-[32px] md:h-[32px]">
            <use href="/sprite.svg#icon-phone"></use>
          </svg>
          +38 (098) 9505917
        </Link>
        <Link href={"#map"} className="flex gap-6 items-center text-white md:gap-8 transition-all duration-300 hover:text-red hover:font-medium focus:text-red">
          <svg className="w-[32px] h-[32px] fill-current text-current sm:w-[40px] sm:h[40px] md:w-[46px] md:h-[46px]">
            <use href="/sprite.svg#icon-location"></use>
          </svg>
          м. Івано-Франківськ, вул. Пасічна, 2а (0 поверх)
        </Link>
        <div className="flex gap-6 text-white md:gap-8">
          <svg className="w-[26px] h-[26px] fill-current text-current md:w-[32px] md:h-[32px]">
            <use href="/sprite.svg#icon-clock"></use>
          </svg>
          <p>Пн-Нд: 9:00 - 20:00</p>
        </div>
        <Link
          href={"mailto:beautifulnails.if@gmail.com"}
          className="flex gap-6 text-white md:gap-8 transition-all duration-300 hover:text-red hover:font-medium focus:text-red"
        >
          <svg className="w-[26px] h-[26px] fill-current text-current md:w-[32px] md:h-[32px]">
            <use href="/sprite.svg#icon-envelope"></use>
          </svg>
          <p>beautifulnails.if@gmail.com</p>
        </Link>

       
      </div>
    <div className="hidden lg:block bg-white bg-opacity-20 py-5 w-[400px] h-[260px] rounded-3xl">
   <OrderServise />
    </div>
  
    </div>
    <ul className="flex py-6 justify-center items-center w-[100%] gap-5 md:gap-7">
          {socialeList.map(({link, href}) => <li key={href}>
            <Link href={link}  rel="noopener noreferrer" target='_blank' className="block text-white rounded-full p-2 border-2 border-transparent scale-100 transition-all duration-300 hover:border-white hover:text-red  focus:border-white focus:text-red">
             <svg className="w-[32px] h-[32px] fill-current text-current sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]">
         <use href={href}></use>
             </svg>
           </Link>
          </li>
          )}
        </ul>
      </div>
      <FixedBtn />
    </section>
  );
};
export default Hero;
