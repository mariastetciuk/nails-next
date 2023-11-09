import { Bitter } from "next/font/google";
import LocationIcon from "./icons/LocationIcon";
import FixedBtn from "./btnComponents.tsx/Sociale";
import Link from "next/link";
import { Great_Vibes, Zilla_Slab, Oranienbaum, Pompiere } from 'next/font/google';
import BtnOrderService from "./btnComponents.tsx/BtnOrderServise";

const vibes = Great_Vibes({subsets: ['latin'], weight: ['400']})
const zilla = Zilla_Slab({subsets: ['latin'], weight: ['300']})
const oranienbaum = Oranienbaum({subsets: ['latin'], weight: ['400']})
const pompiere = Pompiere({subsets: ['latin'], weight: ['400']})





const cinzel = Bitter({ subsets: ["latin"], weight: ["700", "900"] });
const Hero = () => {
  return (
    <section className="relative bgImage pt-[100px] w-screen scree text-white md:pt-[70px] md:h-[800px] lg:h-[800px] ">
      <div className="container h-[400px]   md:pt-[95px] md:h-[800px] ">
   
       
      <h2 className={`${vibes.className} text-5xl  text-center mb-3   md:text-7xl md:mb-1  lg:text-8xl lg:mb-1`}>Beautiful Nails</h2>
      <h1 className={`${zilla.className} text-center text-2xl mb-[210px] md:text-3xl md:mx-auto md:mb-[350px]  md:w-[500px] lg:mb-[300px] lg:text-4xl `}>
          Студія манікюру та педикюру
        </h1>
        <div className="relative flex justify-between items-end">
          <a
            className=" flex items-center leading-tight text-[14px] gap-3 border-b border-transparent fill-white pb-1 text-base font-medium text-white transition-all duration-300 hover:border-white focus:border-whitelg:text-[1.06rem]"
            href="#location"
          >
            <LocationIcon />
            <p className="lg:pr-1 md:py-1 text-[14px] lg:text-base">
              м. Івано-Франківськ,{" "}
              <span className="block lg:inline ">вул. Пасічна, 2а (0 пoверх)</span>
              <span className="block text-[13px] lg:text-center">(позаду автобусної зупинки)</span>
            </p>
          </a>
        
        </div>
      </div>
      <FixedBtn />
    </section>
  );
};
export default Hero;
