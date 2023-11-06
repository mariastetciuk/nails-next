import { Bitter } from "next/font/google";
import LocationIcon from "./icons/LocationIcon";
import FixedBtn from "./Sociale";
import Link from "next/link";
import { Great_Vibes, Zilla_Slab, Oranienbaum, Pompiere } from 'next/font/google';

const vibes = Great_Vibes({subsets: ['latin'], weight: ['400']})
const zilla = Zilla_Slab({subsets: ['latin'], weight: ['700']})
const oranienbaum = Oranienbaum({subsets: ['latin'], weight: ['400']})
const pompiere = Pompiere({subsets: ['latin'], weight: ['400']})





const cinzel = Bitter({ subsets: ["latin"], weight: ["700", "900"] });
const Hero = () => {
  return (
    <section className="relative bgImage w-screen scree text-white md:h-[800px] lg:h-[800px] mb-[300px]">
      <div className=" max-w-[400px] h-[600px] mx-auto px-5 pt-[75px] md:max-w-[768px] md:pt-[95px] md:h-[800px] lg:px-20 lg:max-w-[1280px]">
        <Link href={'tel: +380989505917'} className="block text-center mb-[25px] md:text-xl lg:mb-[240px] lg:text-2xl">(098) 9505917</Link>
        <h1 className={`${zilla.className} text-center text-4xl mb-3  md:text-5xl md:mx-auto md:mb-5 md:w-[500px] lg:w-auto lg:text-6xl lg:mb-6`}>
          Студія манікюру та педикюру
        </h1>
      <h2 className={`${vibes.className} text-5xl mb-[240px] text-center md:mb-[350px] md:text-7xl lg:mb-[150px] lg:text-8xl`}>Beautiful Nails</h2>
        <div className="relative flex justify-between items-end">
          <a
            className=" flex items-center leading-tight text-[14px] gap-3 border-b fill-white pb-1 text-base font-medium text-white transition-all duration-300 hover:border-red focus:border-red lg:text-[1.06rem]"
            href="#location"
          >
            <LocationIcon />
            <p className="lg:pr-1 md:py-1 text-[14px] lg:text-base">
              м.Івано-Франківськ,{" "}
              <span className="block lg:inline ">вул.Пасічна,2а(0 пoверх)</span>
              <span className="block text-[13px] lg:text-center">(позаду автобусної зупинки)</span>
            </p>
          </a>
          <button
            type="button"
            className={`${zilla.className} absolute right-0  -top-[120px] flex items-center justify-center h-[100px] w-[100px] rounded-full bg-white text-base font-medium  text-red transition-all duration-300 hover:bg-red focus:bg-red hover:text-white focus:text-white md:h-[120px] md:w-[120px]  md:text-xl lg:-top-[200px] lg:w-[140px] lg:h-[140px]`}
          >
            Записатися
          </button>
        </div>
      </div>
      <FixedBtn />
    </section>
  );
};
export default Hero;
