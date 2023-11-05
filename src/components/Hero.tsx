import { Bitter } from "next/font/google";
import LocationIcon from "./icons/LocationIcon";
import FixedBtn from "./Sociale";


const cinzel = Bitter({ subsets: ["latin"], weight: ["700", "900"] });
const Hero = () => {
  return (
    <section className="relative bgImage w-screen text-white md:h-[800px] lg:h-[800px] mb-[300px]">
      <div className="w-[320px] h-[500px] mx-auto px-5 pt-[120px] md:w-[768px] md:pt-[150px] md:h-[800px] lg:px-20 lg:w-[1280px]">
        <h1 className={`${cinzel.className} text-center text-3xl mb-[240px] md:text-5xl md:mx-auto md:mb-[450px] md:w-[500px] lg:w-auto lg:text-6xl lg:mb-[500px]`}>
          Студія манікюру та педикюру
        </h1>
        <div className="relative flex justify-between items-end">
          <a
            className=" flex items-center leading-tight text-[14px] gap-3 border-b fill-white pb-1 text-base font-medium text-white transition-all duration-300 hover:border-red focus:border-red lg:text-[1.06rem]"
            href="#location"
          >
            <LocationIcon />
            <p className="lg:pr-1 md:py-1 text-[14px]">
              м.Івано-Франківськ,{" "}
              <span className="block lg:inline ">вул.Пасічна,2а(0 пoверх)</span>{" "}
            </p>
          </a>
          <button
            type="button"
            className="absolute right-0  -top-[170px] flex items-center justify-center h-[110px] w-[110px] rounded-full bg-white text-base font-medium  text-red transition-all duration-300 hover:bg-red focus:bg-red hover:text-white focus:text-white md:h-[130px] md:w-[130px] md:text-xl lg:-top-[200px] lg:w-[150px] lg:h-[150px]"
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
