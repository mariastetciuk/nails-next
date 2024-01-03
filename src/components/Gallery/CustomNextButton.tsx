import { CustomButtonProps } from "@/type/type";

const CustomNextButton = ({ onClick }: CustomButtonProps) => (
    <button onClick={onClick} className="custom-next-button absolute bottom-[113px] z-1 -right-[25px]  text-red px-2 py-1 sm:bottom-[135px] sm:-right-[60px] md:bottom-[200px] md:-right-[150px] lg:bottom-[235px] lg:-right-[250px]">
       <svg className="w-[55px] h-[55px] fill-current text-current md:w-[70px] md:h-[80px] lg:w-[90px] lg:h-[110px]">
         <use href='/sprite.svg#icon-cheveron-right'></use>
             </svg>
    </button>
  );

  export default CustomNextButton;