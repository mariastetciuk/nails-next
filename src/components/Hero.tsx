import FixedBtn from "./btnComponents.tsx/Sociale";
import Link from "next/link";
import { Cinzel, Roboto_Serif } from "next/font/google";
import { socialeList } from "@/data/navList";
import OrderServise from "./OrderServise";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });
const vollkorn = Roboto_Serif({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section className="overflow-x-hidden relative bgImage w-screen scree text-white ">
      <div className="container max-h-[550px] pt-[110px] md:pt-[140px] md:max-h-[700px] lg:pt-[180px] lg:max-h-[800px]">
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
        <div className="sm:px-60px md:flex md:justify-center sm:gap-[100px] lg:mb-5 lg:gap-10">
          <div className="flex flex-wrap mx-auto gap-3 max-w-[400px] sm:max-w-[450px] sm:text-xl md:max-w-[500px] md:text-2xl md:gap-6 lg:m-0 lg:border-r-2 lg:border-white lg:border-opacity-25">
            <a
              href={"tel: +380989505917"}
              className="flex gap-6 md:gap-8 transition-all duration-300 hover:text-red hover:font-medium focus:text-red"
            >
              <svg
                aria-label="icon phone"
                className="w-[26px] h-[26px] text-center fill-current text-current md:w-[32px] md:h-[32px]"
              >
                <use href="/sprite.svg#icon-phone"></use>
              </svg>
              +38 (098) 9505917
            </a>
            <Link
              href="https://www.google.com/maps/place/Beautiful+Nails.+%D0%A1%D1%82%D1%83%D0%B4%D1%96%D1%8F+%D0%BC%D0%B0%D0%BD%D1%96%D0%BA%D1%8E%D1%80%D1%83+%D1%82%D0%B0+%D0%BF%D0%B5%D0%B4%D0%B8%D0%BA%D1%8E%D1%80%D1%83/@48.9210646,24.7125106,17z/data=!4m14!1m7!3m6!1s0x4730c184b9d02d8b:0x545e662ae1fac0e6!2zQmVhdXRpZnVsIE5haWxzLiDQodGC0YPQtNGW0Y8g0LzQsNC90ZbQutGO0YDRgyDRgtCwINC_0LXQtNC40LrRjtGA0YM!8m2!3d48.9210646!4d24.7125106!16s%2Fg%2F11vf3qw1ry!3m5!1s0x4730c184b9d02d8b:0x545e662ae1fac0e6!8m2!3d48.9210646!4d24.7125106!16s%2Fg%2F11vf3qw1ry?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-6 items-center text-white md:gap-8 transition-all duration-300 hover:text-red hover:font-medium focus:text-red"
            >
              <svg
                aria-label="icon map"
                className="w-[32px] h-[32px] fill-current text-current sm:w-[40px] sm:h[40px] md:w-[46px] md:h-[46px]"
              >
                <use href="/sprite.svg#icon-location"></use>
              </svg>
              м. Івано-Франківськ, вул. Леся Курбаса 4/4
            </Link>
            <div className="flex gap-6 text-white md:gap-8">
              <svg
                aria-label="icon clock"
                className="w-[26px] h-[26px] fill-current text-current md:w-[32px] md:h-[32px]"
              >
                <use href="/sprite.svg#icon-time"></use>
              </svg>
              <p>Вт-Нд: 10:30 - 20:00</p>
            </div>
            <Link
              href={"mailto:beautifulnails.if@gmail.com"}
              className="flex gap-6 text-white md:gap-8 transition-all duration-300 hover:text-red hover:font-medium focus:text-red"
            >
              <svg
                aria-label="icon email"
                className="w-[26px] h-[26px] fill-current text-current md:w-[32px] md:h-[32px]"
              >
                <use href="/sprite.svg#icon-envelope"></use>
              </svg>
              <p>beautifulnails.if@gmail.com</p>
            </Link>
          </div>
          <div className="hidden lg:block bg-white bg-opacity-20 py-5 w-[400px] h-[260px] rounded-3xl lg:w-[450px]">
            <OrderServise />
          </div>
        </div>
        <ul className="flex py-6 justify-center items-center w-[100%] gap-5 md:gap-7">
          {socialeList.map(({ link, href }) => (
            <li key={href}>
              <Link
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                className="block text-white rounded-full p-2 border-2 border-transparent scale-100 transition-all duration-300 hover:border-white hover:text-red  focus:border-white focus:text-red"
              >
                <svg
                  aria-label="icon sociale network"
                  className="w-[32px] h-[32px] fill-current text-current sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]"
                >
                  <use href={href}></use>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
        <FixedBtn />
      </div>
    </section>
  );
};
export default Hero;
