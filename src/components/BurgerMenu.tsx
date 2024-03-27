"use client";
import { MouseEvent, useEffect } from "react";
import Link from "next/link";
import { navLinks, socialeList } from "@/data/navList";
import {  Zilla_Slab } from 'next/font/google';
import { CloseModal } from "@/type/type";


const zilla = Zilla_Slab({subsets: ['latin'], weight: ['700']})


const BurgerMenu = ({ togleModal }: CloseModal) => {
  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      togleModal();
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePressESC = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      togleModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlePressESC);
    return () => {
      document.removeEventListener("keydown", handlePressESC);
    };
  }, [handlePressESC]);

  return (
    <div
      className={` fixed left-0 top-0 z-30 h-screen w-screen bg-black bg-opacity-40`}
      onClick={handleOverlayClick}
    >
      <div className="absolute right-0 top-0 w-[265px]  py-6 bg-white md:w-[350px]">
     <button
          type="button"
          onClick={togleModal}
          className="absolute right-3 top-3 text-red "
        >
          <svg className="w-[32px] h-[32px] fill-current text-current">
         <use href='/sprite.svg#icon-close'></use>
             </svg>
        </button>
        <div className="flex gap-3 pl-6 items-center border-b border-red md:gap-10">
        <ul className="flex flex-col gap-5">
          {socialeList.map(({link, href}) => <li key={href}>
            <Link href={link} rel="noopener noreferrer" target='_blank' className="block text-red rounded-full p-1 transition-all duration-300 hover:bg-red hover:text-white focus:bg-red focus:text-white">
             <svg aria-label="icon sociale network" className="w-[38px] h-[38px] fill-current text-current">
         <use href={href}></use>
             </svg>
           </Link>
          </li>)}
        </ul>
        <ul className={`${zilla.className} text-red font-semibold text-lg px-6 md:px-8 md:text-2xl`}>
          {navLinks.map(({ title, href }) => (
            <li key={title} className="my-1 py-2 md:my-3">
              <Link href={href} onClick={togleModal} className="transition-all duration-300 hover:border-b-2 hover:border-red focus:border-b-2 focus:border-red">{title}</Link>
            </li>
          ))}
        </ul>
       
        </div >
            <Link href={'tel: +380989505917'} className="block text-center text-2xl text-red py-3 font-semibold md:text-3xl md:py-5">+38 (098) 9505917</Link>
    
      </div>
      
    </div>
  );
};

export default BurgerMenu;
