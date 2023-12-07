import { Cinzel } from "next/font/google"
import { navLinks, socialeList } from "@/data/navList"
import Link from "next/link"

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });
const Footer = () => {

    return <footer className="bg-red py-8 md:py-10 lg:py-12 mb-[100px]">
        <div className="container text-white flex flex-wrap gap-5 text-center md:flex-nowrap md:gap-[90px] lg:gap-[150px]">
            <div className="w-[100%] md:w-[180px] lg:w-[350px] text-lg">
            <p className={`${cinzel.className} text-3xl font-medium mb-3 md:text-4xl lg:mb-5`}>
          Beautiful Nails</p>

          <div className="md:w-[220px] lg:w-[300px] lg:text-lg">
   <p>Чекаємо Вас за адресою:</p>

    <p>
    вул. Пасічна, 2а (0 поверх), м. Івано-Франківськ  
    </p>
    </div>
    <p>Графік роботи:</p>
          <p className="mb-2">Понеділок - Неділя</p>
          <p>9:00 - 20:00</p>
          </div>
    <div className="w-[100%] md:w-[150px] lg:w-[200px]"> 
        <h3 className=" font-bold mb-3 lg:text-lg lg:mb-4">Меню</h3>
<ul className="flex flex-wrap w-[100px] justify-center gap-3 lg:gap-4">
    {navLinks.map(({href, title}) => <Link key={title} href={href} className="text-white lg:text-lg">{title}</Link>)}
    </ul>
    </div> 
    <div className="relative flex flex-wrap gap-5 lg:text-lg">
    {/* <div className="w-[100%]">
        <h3 className=" font-bold mb-3 lg:text-lg lg:mb-4">Документи</h3>
        <p className="mb-2">Політика конфіденційності</p>
        <p>Правила користування сайтом</p>
    </div> */}
    
    <ul className="flex w-[100%] gap-4 lg:absolute lg:flex-wrap lg:right-0 lg:w-14">
          {socialeList.map(({link, href}) => <li key={href}>
            <Link href={link}  rel="noopener noreferrer" target='_blank' className="block text-white rounded-full p-2 border-2 border-transparent scale-100 transition-all duration-300 hover:border-white  focus:border-white">
             <svg className="w-[32px] h-[32px] fill-current text-current md:w-[38px] md:h-[38px]">
         <use href={href}></use>
             </svg>
           </Link>
          </li>
          )}
        </ul>
        </div>
        </div>
        
    </footer>
};

export default Footer;