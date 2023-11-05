"use client";
import BtnOpenMenu from "./BtnOpenMenu";
import CloseIcon from "./icons/CloseIcon";
import { MouseEvent, useEffect } from "react";
import Link from "next/link";
import { navLinks, sociale } from "@/data/navList";
import InstagramIcon from "./icons/InstagramIcon";
import FasebookIcon from "./icons/FasebbokIcon";
import ViberIcon from "./icons/ViberIcon";
import TelegramIcon from "./icons/TelegramIcon";

type CloseModal = {
  togleModal: () => void;
};

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
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-40"
      onClick={handleOverlayClick}
    >
      <div className="absolute right-0 top-0 w-[265px]  py-6 bg-white md:w-[400px]">
     <button
          type="button"
          onClick={togleModal}
          className="absolute right-3 top-3 text-black "
        >
          <CloseIcon />
        </button>
        <ul className="text-red font-semibold text-lg text-center mb-6 px-6 md:px-8 md:text-2xl md:mb-7">
          {navLinks.map(({ title, href }) => (
            <li key={title} className="my-1 py-2 md:my-3">
              <Link href={href} rel="noopener noreferrer" className="transition-all duration-300 hover:border-b-2 hover:border-red focus:border-b-2 focus:border-red">{title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4 mx-auto border-t border-gray-400 pt-6 px-6 md:px-8 md:py-7" >
            <a href='https://www.instagram.com/beautiful.nails.if'  rel="noopener noreferrer" target='_blank'>
              <InstagramIcon />
            </a>
            <a href='https://facebook.com/beautifulnails.pasichna.if'  rel="noopener noreferrer" target='_blank'><FasebookIcon /></a>
            <a href=""  rel="noopener noreferrer" target='_blank'><ViberIcon /></a>
            <a href=""  rel="noopener noreferrer" target='_blank'><TelegramIcon /></a>
            </div>
    
      </div>
    </div>
  );
};

export default BurgerMenu;
