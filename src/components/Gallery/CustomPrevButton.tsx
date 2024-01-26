import { CustomButtonProps } from "@/type/type";

const CustomPrevButton = ({ onClick }: CustomButtonProps) => (
    <button onClick={onClick} className="custom-prev-button absolute z-10 -left-[22px] top-[25px] text-red px-2 py-1 sm:-left-[20px] sm:top-[24px] lg:left-[40px]">
         <svg className="w-[50px] h-[50px] fill-current text-current lg:w-[70px] lg:h-[70px]">
         <use href='/sprite.svg#icon-cheveron-left'></use>
             </svg>
    </button>
  );

  export default CustomPrevButton;