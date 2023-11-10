import { Bitter } from "next/font/google";
import FixedBtn from "./btnComponents.tsx/Sociale";
import Link from "next/link";
import { Oranienbaum, Pompiere, Cinzel, Roboto_Serif } from "next/font/google";
import { socialeList } from "@/data/navList";

const vibes = Cinzel({ subsets: ["latin"], weight: ["400"] });
const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: ["400"] });
const pompiere = Pompiere({ subsets: ["latin"], weight: ["400"] });
const vollkorn = Roboto_Serif({ subsets: ["latin"], weight: ["400"] });

const cinzel = Bitter({ subsets: ["latin"], weight: ["700", "900"] });
const Hero = () => {
  return (
    <section className="relative bgImage pt-[80px] w-screen scree text-white md:pt-[70px] md:h-[800px] lg:h-[800px] ">
      <div className="container h-[400px]  md:pt-[70px] md:h-[800px] ">
        <h1
          className={`${vibes.className} text-4xl  text-center mb-1 uppercase  md:text-7xl md:mb-1  lg:text-8xl lg:mb-1`}
        >
          beautiful Nails
        </h1>
        <h2
          className={`${vollkorn.className} text-center mb-8 uppercase text-lg  md:text-2xl  lg:text-4xl `}
        >
          cтудія манікюру та педикюру
        </h2>
<div className="mx-auto flex flex-wrap gap-3 w-[300px]">
        <Link href={"tel: +380989505917"} className="flex gap-6">
          <svg className="w-[26px] h-[26px] text-center fill-current text-current">
            <use href="/sprite.svg#icon-phone"></use>
          </svg>
          +38 (098) 9505917
        </Link>
        <div className="flex gap-6 items-center text-white">
          <svg className="w-[32px] h-[32px] fill-current text-current">
            <use href="/sprite.svg#icon-location"></use>
          </svg>
          <p>м. Івано-Франківськ, вул. Пасічна, 2а (0поверх)</p>
        </div>
        <div className="flex gap-6 text-white">
          <svg className="w-[26px] h-[26px] fill-current text-current">
            <use href="/sprite.svg#icon-clock"></use>
          </svg>
          <p>пн-нд 9:00 - 20:00</p>
        </div>
        <Link
          href={"mailto:beautifulnails.if@gmail.com"}
          className="flex gap-6 text-white"
        >
          <svg className="w-[26px] h-[26px] fill-current text-current">
            <use href="/sprite.svg#icon-envelope"></use>
          </svg>
          <p>beautifulnails.if@gmail.com</p>
        </Link>

        <ul className="flex py-6 justify-center items-center w-[100%] gap-5">
          {socialeList.map(({link, href}) => <li key={href}>
            <Link href={link}  rel="noopener noreferrer" target='_blank' className="block text-white rounded-full p-2 boreder-2 border-transparent transition-all duration-300 hover:border-white focus:border-white">
             <svg className="w-[32px] h-[32px] fill-current text-current">
         <use href={href}></use>
             </svg>
           </Link>
          </li>
          )}
        </ul>
      </div>
      </div>
      <FixedBtn />
    </section>
  );
};
export default Hero;
