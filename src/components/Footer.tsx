import { Cinzel } from "next/font/google";
import { navLinks, socialeList } from "@/data/navList";
import Link from "next/link";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });
const address = "м. Івано-Франківськ, вул. Леся Курбаса 4/4";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address
)}`;

const Footer = () => {
  return (
    <div id="footer" className="overflow-x-hidden bg-red">
      <div className="container text-white py-8 md:py-10 lg:py-12 flex flex-wrap gap-5 text-center md:flex-nowrap md:gap-[90px] lg:gap-[150px] md:text-left">
        <div className="w-[100%] sm:max-w-[350px] text-lg">
          <p
            className={`${cinzel.className} text-3xl font-medium mb-3 md:text-4xl lg:mb-5`}
          >
            Beautiful Nails
          </p>

          <div>
            <p className="font-bold mb-3 text-center md:text-left lg:mb-4 lg:w-[300px] lg:text-lg">
              Чекаємо Вас за адресою:
            </p>
            <Link
              href="https://www.google.com/maps/place/Beautiful+Nails.+%D0%A1%D1%82%D1%83%D0%B4%D1%96%D1%8F+%D0%BC%D0%B0%D0%BD%D1%96%D0%BA%D1%8E%D1%80%D1%83+%D1%82%D0%B0+%D0%BF%D0%B5%D0%B4%D0%B8%D0%BA%D1%8E%D1%80%D1%83/@48.9210646,24.7125106,17z/data=!4m14!1m7!3m6!1s0x4730c184b9d02d8b:0x545e662ae1fac0e6!2zQmVhdXRpZnVsIE5haWxzLiDQodGC0YPQtNGW0Y8g0LzQsNC90ZbQutGO0YDRgyDRgtCwINC_0LXQtNC40LrRjtGA0YM!8m2!3d48.9210646!4d24.7125106!16s%2Fg%2F11vf3qw1ry!3m5!1s0x4730c184b9d02d8b:0x545e662ae1fac0e6!8m2!3d48.9210646!4d24.7125106!16s%2Fg%2F11vf3qw1ry?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 md:mb-5 items-center text-white transition-all duration-300 hover:underline focus:underline"
            >
              вул. Леся Курбаса 4/4,
              <span className="block">м. Івано-Франківськ</span>
            </Link>
          </div>
          <p className="font-bold mb-3 text-center md:text-left lg:mb-4 lg:w-[300px] lg:text-lg">
            Графік роботи:
          </p>
          <p className="mb-2">Вівторок - Неділя</p>
          <p>10:30 - 20:00</p>
        </div>
        <div className="mx-auto">
          <h3 className=" font-bold mb-3 md:text-left md:text-lg lg:mb-4">
            Меню
          </h3>
          <ul className="flex flex-wrap justify-center md:justify-start w-[80px] mx-auto gap-3 lg:gap-4">
            {navLinks.map(({ href, title }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-white md:text-lg border-b-2 border-transparent transition-all duration-300 hover:border-white  focus:border-white"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[100%] relative  flex flex-wrap justify-center gap-5 mx-auto md:w-9 lg:text-lg">
          <ul className="flex gap-4 md:absolute md:flex-wrap md:right-0 md:w-14">
            {socialeList.map(({ link, href }) => (
              <li key={href}>
                <Link
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="block text-white rounded-full p-2 border-2 border-transparent transition-all duration-300 hover:border-white  focus:border-white"
                >
                  <svg
                    aria-label="icon sociale network"
                    className="w-[32px] h-[32px] fill-current text-current md:w-[38px] md:h-[38px]"
                  >
                    <use href={href}></use>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-white text-center border-t-2 border-white pt-6 pb-[80px] md:text-lg lg:text-xl lg:py-6">
        <p className="inline">Розробка</p>
        <a
          href={"https://t.me/Mariia_Stetsiuk"}
          rel="noopener noreferrer"
          target="_blank"
          className=" cursor-pointer mx-2 border-b-2 border-white pt-3"
        >
          Mariia Stetsiuk
        </a>
        2023.
        <p className="md:inline md:ml-2">© Усі права захищені</p>
      </div>
    </div>
  );
};

export default Footer;
