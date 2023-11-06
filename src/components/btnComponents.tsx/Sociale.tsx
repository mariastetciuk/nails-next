"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CloseIcon from "../icons/CloseIcon";
import PhoneIcon from "../icons/PhoneIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FasebookIcon from "../icons/FasebbokIcon";
import TelegramIcon from "../icons/TelegramIcon";
import ViberIcon from "../icons/ViberIcon";
import Link from "next/link";

const FixedBtn = () => {
  const [isShowPopUp, setisShowPopUp] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/icon/icon-facebook.svg",
    "/icon/icon-instagram.svg",
    "/icon/icon-viber.svg",
    "/icon/icon-telegram.svg",
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
    <div className="fixed left-0 right-0 bottom-7 z-1">
      <div className="flex items-center mx-auto justify-between px-5 w-[320px] md:w-[768px] lg:w-[1280px] lg:px-20">
        <Link
        href={'tel: +380989505917'}
          className=" flex justify-center text-red items-center w-[70px] h-[70px] rounded-full border-8 border-lightred bg-white transition-all duration-300 md:w-[80px] md:h-[80px]"
        >
          <PhoneIcon />
        </Link>
        <div className="relative ">
          <button
            type="button"
            onClick={togglePopUp}
            className="  flex justify-center items-center w-[50px] h-[50px] rounded-full border-4 border-lightred bg-white transition-all duration-300 md:w-[60px] md:h-[60px]"
          >
            {isShowPopUp ? (
              <CloseIcon />
            ) : (
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                width={40}
                height={40}
              />
            )}
          </button>
          {isShowPopUp && (
            <div className="absolute -top-[200px] flex flex-wrap justify-center items-center right-0 w-[50px] md:w-[60px] ">
              <Link
                href="https://www.instagram.com/beautiful.nails.if"
                rel="noopener noreferrer"
                target='_blank'
                
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://facebook.com/beautifulnails.pasichna.if"
                rel="noopener noreferrer"
                target='_blank'
               
              >
                <FasebookIcon />
              </Link>
              <Link href="" rel="noopener noreferrer" target='_blank'
              >
                <ViberIcon />
              </Link>
              <Link href="" rel="noopener noreferrer" target='_blank'
             >
                <TelegramIcon />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FixedBtn;
