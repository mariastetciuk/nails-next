'use client'
import { useState, useEffect } from "react";
import OpenBurgerMenuIcon from "../icons/OpenBurgerMenuIcon"
import BurgerMenu from "../BurgerMenu";



const BtnOpenMenu = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const togleModal = () => setIsShowMenu((prev)=>!prev);
return (
  <div className={`fixed left-0 right-0 top-5 z-[9999] md:top-8  lg:top-[45px] ${!showButton && "lg:hidden"}`}>
   <div className="container flex justify-end items-center lg:px-[20px] bg:px-[50px]">
    <button type='button' aria-label="open menu" onClick={togleModal} className="py-1 px-2 rounded-md bg-red bg-opacity-60 text-white">
        <OpenBurgerMenuIcon />
    </button>
    {isShowMenu && <BurgerMenu  togleModal={togleModal}/>}
</div>
    </div>
)
};
export default BtnOpenMenu;