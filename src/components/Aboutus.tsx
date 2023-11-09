import {
  Great_Vibes,
  Zilla_Slab,
  Oranienbaum,
  Pompiere,
} from "next/font/google";
import Image from "next/image";

const vibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const zilla = Zilla_Slab({ subsets: ["latin"], weight: ["300"] });
const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: ["400"] });
const pompiere = Pompiere({ subsets: ["latin"], weight: ["400"] });

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-tr from-black to-red text-white mb-[200px]">
      <div className="container py-10 md:py-12">
        <h2 className={` mb-8 text-2xl text-center md:text-4xl`}>
          {" "}
          5 ПРИЧИН ОБРАТИ <span className={`${vibes.className} pt-4 text-4xl block md:inline md:text-5xl`}>Beautiful Nails</span> 
        </h2>
        <div className="flex flex-wrap gap-9 md:text-xl border-l-2 border-white md:border-none">
          <div className="flex flex-wrap gap-5 pl-6 md:border-l-2 md:border-white ">
            <div className="flex flex-wrap gap-5 md:w-[350px]">
            <p className="relative">
              У нас майстрині з десятирічним досвідом
              <span className="absolute -left-8 top-0 block w-4 h-4 rounded-full bg-white "></span>
            </p>

            <p className="relative">
              Більше 100 кольорів гель-лаків, різноманітний декор
              <span className="absolute -left-8 top-1 block w-4 h-4 rounded-full bg-white "></span>
            </p>
            <p className="relative">
              Даємо гарантію на свою роботу, підбираємо носибельний матеріал
              відповідно до ваших нігтів
              <span className="absolute -left-8 top-1 block w-4 h-4 rounded-full bg-white "></span>
            </p>
            </div>
            <div className="hidden relative md:block md:w-[330px]">
              <Image src={'/about/image1.jpg'} alt={'image'} width={150} height={170} className="absolute right-10 z-[1] bottom-10"/>
              <Image src={'/about/image2.jpg'} alt={'image'} width={150} height={170} className="absolute left-5 top-5 "/>
            </div>
          </div>
          <div className="flex flex-wrap  gap-5  md:gap-[80px]  lg:gap-8">
          <div className="hidden relative md:block md:w-[330px] md:h-[180px] lg:hidden">
              <Image src={'/about/image3.jpg'} alt={'image'} width={150} height={170} className="absolute right-10 z-[1] -bottom-10"/>
              <Image src={'/about/image4.jpg'} alt={'image'} width={150} height={170} className="absolute left-5 top-0
              "/>
            </div>
            <div className="flex flex-wrap gap-5 pl-6 border-l-2 border-whit md:w-[280px]">
            <p className="relative">
              Дотримуємося усіх норм дезинфекції та стерилізації інструментів,
              для кожного клієнта окрема одноразова пилочка
              <span className="absolute -left-8 top-0 block w-4 h-4 rounded-full bg-white "></span>
            </p>
            <p className="relative">
              Тривалість процедури - 90 хвилин
              <span className="absolute -left-8 top-2 block w-4 h-4 rounded-full bg-white "></span>
            </p>
            </div>
          </div>
          </div>
          </div>
    </section>
  );
};

export default AboutUs;
