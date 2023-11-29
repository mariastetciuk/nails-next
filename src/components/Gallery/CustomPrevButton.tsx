import { CustomButtonProps } from "@/type/type";

const CustomPrevButton = ({ onClick }: CustomButtonProps) => (
    <button onClick={onClick} className="custom-prev-button absolute z-20 -left-[25px] bottom-[113px] text-red px-2 py-1 sm:bottom-[135px] sm:-left-[60px] md:bottom-[200px] md:-left-[150px] lg:bottom-[242px] lg:-left-[235px]">
         <svg className="w-[60px] h-[60px] fill-current text-current md:w-[70px] md:h-[80px] lg:w-[90px] lg:h-[110px]">
         <use href='/sprite.svg#icon-cheveron-left'></use>
             </svg>
    </button>
  );

  export default CustomPrevButton;