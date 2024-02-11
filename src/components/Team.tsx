import Image from "next/image";
import BtnReadMore from "./btnComponents.tsx/BtnReadMore";

const Team = () => {
  return (
    <section>
      <div className="container py-8 md:py-10 lg:py-[60px] text-red ">
       <h2 className=" mb-4 text-4xl font-medium text-center md:text-5xl md:mb-6 lg:mb-8 lg:text-6xl">Про нас</h2>
       <div className="lg:flex lg:justify-between lg:gap-8">
       <div className="border-b pb-5 mb-7 border-lightred border-t pt-5 lg:pt-[80px] lg:w-[600px] lg:text-lg">
      <p className="mb-5"><span className="font-semibold pr-2 lg:text-lg">Beautiful Nails</span>- затишна студія в мікрорайоні Пасічна. Індивідуальний підхід до кожного клієнта, професійна допомога в підборі домашнього догляду за руками та ногами, безпечне обслуговування, адже усі робочі інструменти проходять повний процес дезинфекції та стерилізації згідно з усіма санітарно-епідеміологічними вимогами МОЗ України.</p>
     <BtnReadMore />
       <p className=" font-semibold lg:text-lg">Манікюр не розкіш, а прояв любові до себе.</p>
       </div>
       <div className="text-center">
      <Image src='/about/img-Ira.jpg' alt={"Iryna Mochkodan"} width={300} height={500} className="m-auto rounded-2xl mb-3 lg:w-[400px]"/>
       <h3 className="font-semibold lg:text-lg">Ірина Мочкодан</h3>
       <p  className="w-[300px] lg:w-[400px] m-auto">Власниця студії, майстриня манікюру та педикюру</p>
       </div>
       </div>
      </div>
    </section>
  );
};
export default Team;
