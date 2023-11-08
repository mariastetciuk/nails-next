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
    <section className="bg:bg-gradient-to-tr from-black to-red text-white">
      <div className="container py-10 md:py-12">
        <h2 className={` mb-8 text-2xl text-center md:text-4xl`}>
          {" "}
          5 ПРИЧИН ОБРАТИ <span className={`${vibes.className} pt-4 text-4xl block md:inline md:text-5xl`}>Beautiful Nails</span> 
        </h2>
        <div className="flex flex-wrap md:text-xl">
          <div className="flex flex-wrap gap-5 pb-5 pl-6 border-l-2 border-white md:border-none">
            <div className="flex flex-wrap gap-5 md:w-[350px] md:mb-7">
            <p className="relative">
              У нас майстрині з десятирічним досвідом
              <span className="absolute -left-8 top-0 block w-4 h-4 rounded-full bg-white md:hidden"></span>
            </p>

            <p className="relative">
              Більше 100 кольорів гель-лаків, різноманітний деко
              <span className="absolute -left-8 top-1 block w-4 h-4 rounded-full bg-white md:hidden"></span>
            </p>
            <p className="relative">
              Даємо гарантію на свою роботу, підбираємо носибельний матеріал
              відповідно до ваших нігтів
              <span className="absolute -left-8 top-1 block w-4 h-4 rounded-full bg-white md:hidden"></span>
            </p>
            </div>
            <div className="hidden relative md:block md:w-[330px]">
              <Image src={'/about/image1.jpg'} alt={'image'} width={150} height={170} className="absolute right-10 z-[1] bottom-10"/>
              <Image src={'/about/image2.jpg'} alt={'image'} width={150} height={170} className="absolute left-5 top-5 "/>
            </div>
          </div>
          <div className="flex flex-wrap  gap-5 pl-6 border-l-2 border-white md:gap-[80px]  md:border-none lg:gap-8">
          <div className="hidden relative md:block md:w-[330px] md:h-[180px] lg:hidden">
              <Image src={'/about/image3.jpg'} alt={'image'} width={150} height={170} className="absolute right-10 z-[1] -bottom-5"/>
              <Image src={'/about/image4.jpg'} alt={'image'} width={150} height={170} className="absolute left-5 -top-3
              "/>
            </div>
            <div className="flex flex-wrap gap-5 md:w-[280px]">
            <p className="relative">
              Дотримуємося усіх норм дезинфекції та стерилізації інструментів,
              для кожного клієнта окрема одноразова пилочка
              <span className="absolute -left-8 top-1 block w-4 h-4 rounded-full bg-white md:hidden"></span>
            </p>
            <p className="relative">
              Тривалість процедури - 90 хвилин
              <span className="absolute -left-8 top-2 block w-4 h-4 rounded-full bg-white md:hidden"></span>
            </p>
            </div>
          </div>
          </div>
          </div>
    </section>
  );
};

export default AboutUs;
