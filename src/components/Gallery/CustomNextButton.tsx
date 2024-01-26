import { CustomButtonProps } from "@/type/type";

const CustomNextButton = ({ onClick }: CustomButtonProps) => (
    <button onClick={onClick} className="custom-next-button absolute -right-[23px] top-[18px] z-10  text-red px-2 py-1 sm:-right-[24px] sm:top-[23px] md:-right-[24px] lg:right-[20px]">
       <svg className="w-[50px] h-[50px] fill-current text-current lg:w-[70px] lg:h-[70px]">
         <use href='/sprite.svg#icon-cheveron-right'></use>
             </svg>
    </button>
  );

  export default CustomNextButton;