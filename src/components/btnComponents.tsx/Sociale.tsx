"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CloseIcon from "../icons/CloseIcon";
import Link from "next/link";
import { socialeDirect } from "@/data/navList";
import BtnOrderService from "./BtnOrderServise";
import BtnOrderCall from "./BtnOrderCall";

const FixedBtn = () => {
  const [isShowPopUp, setisShowPopUp] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/icon/facebook-messe.svg',
    "/icon/instagram.svg",
    "/icon/telegram.svg",
    "/icon/viber.svg"
  ];

  const togglePopUp = () => setisShowPopUp((prev) => !prev);



  useEffect(() => {
    const showNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const imageSliderInterval = setInterval(showNextImage, 3000);
   

    return () => {
     
      clearInterval(imageSliderInterval);
    };
  }, [currentImageIndex, images.length]);

  return (
    <div className="fixed left-0 right-0 bottom-7 z-[9999]">
      <div className="relative flex items-center mx-auto justify-between px-5 lg:px-20">
        <Link
        href={'tel: +380989505917'}
          className=" flex justify-center text-red items-center w-[55px] h-[55px] rounded-full border-4 border-red bg-white transition-all duration-300 md:w-[60px] md:h-[60px] lg:hidden hover:bg-red hover:text-white focus:bg-red focus:text-white"
        >
           <svg className="w-[38px] h-[38px] fill-current text-current">
           <use href='/sprite.svg#icon-phone'></use>
               </svg>
        </Link>
    
        <BtnOrderCall />
<BtnOrderService style="absolute left-1/2 -translate-x-1/2 inline-block text-center bg-white text-red py-1 text-lg rounded-3xl font-semibold px-3 border-4 border-red md:text-xl md:py-2 md:px-4 transition-all duration-300 hover:bg-red hover:text-white focus:bg-red focus:text-white lg:hidden" />
      

        <div className="relative ">
          <button
            type="button"
            onClick={togglePopUp}
            className="  flex justify-center text-red items-center w-[55px] h-[55px] rounded-full border-4 border-red  bg-white md:w-[60px] md:h-[60px] transition-all duration-300"
          >
            {isShowPopUp ? (
              <CloseIcon />
            ) : (
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                width={40}
                height={40}
                color="red"
              />
            )}
          </button>
          {isShowPopUp && (
            <ul className="absolute -top-[245px] flex gap-2 flex-wrap justify-center items-center right-0 w-[50px] md:w-[60px]">
            {socialeDirect.map(({link, href}) => <li key={href}>
              <Link href={link}  rel="noopener noreferrer" target='_blank' className="block text-red rounded-full p-2 bg-white transition-all duration-300 hover:bg-red hover:text-white focus:bg-red focus:text-white">
               <svg className="w-[38px] h-[38px] fill-current text-current">
           <use href={href}></use>
               </svg>
             </Link>
            </li>  
          )}
          </ul>
          )}
          </div>
          </div>
    </div>
  );
};

export default FixedBtn;
