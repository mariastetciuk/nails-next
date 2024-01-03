import { team } from "@/data/navList";
import Image from "next/image";

const Team = () => {
  return (
    <section>
      <div className="container py-8 md:py-10 lg:py-12 text-red">
        <h2 className="relative text-center uppercase leading-[30px] font-extrabold text-red text-[100px] sm:leading-[33px] sm:text-[130px] text-opacity-70 mb-10 md:leading-[68px] md:text-[180px] md:mb-[100px] lg:mb-0 lg:w-[560px] lg:leading-[75px] lg:pt-[150px]">
          наша{" "}
          <span className=" font-bold text-black text-[45px] sm:text-[50px] md:text-[100px] text-opacity-1 lg:text-[85px]">
            команда
          </span>
        </h2>
        <div className="flex flex-wrap gap-5">
        {team.map(({id, src, name, item1, item2, item3}) => (
          <div key={id} className={`flex flex-wrap gap-[60px] ${id === 1 ? "" : "md:flex-row-reverse pl-8"} `}>
            <div className="m-auto md:pl-5">
            <Image
              src={src}
              width={250}
              height={250}
              alt="team"
              className="  rounded-3xl mb-3"
            ></Image>
            <p className=" uppercase text-lg font-semibold text-center">
              {name}
            </p>
            </div>
            <ul className="pl-6 border-l-2 border-red md:w-[350px]">
              <li className="relative mb-5">Майстер манікюру та педикюру.  <span className="absolute -left-8 top-0 block w-4 h-4 rounded-full bg-red "></span></li>
              <li className="relative mb-5">{item1}  <span className="absolute -left-8 top-0 block w-4 h-4 rounded-full bg-red "></span></li>
              <li className="relative mb-5">{item2}  <span className="absolute -left-8 top-0 block w-4 h-4 rounded-full bg-red "></span></li>
              <li className="relative mb-5">{item3}  <span className="absolute -left-8 top-2 block w-4 h-4 rounded-full bg-red "></span></li>
            </ul>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
