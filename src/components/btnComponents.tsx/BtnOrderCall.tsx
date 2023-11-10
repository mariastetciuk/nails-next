'use client'
import { PropsBtnOrder } from "@/type/type";
import { useState } from "react";
import OrderServiseModal from "../OrderServiceModal";


const BtnOrderCall = () => {
    const [isShowModal, setisShowModal] = useState(false);

    const togleModal = () => setisShowModal(prev => !prev);


    return (
    <>
        <button className='hidden lg:flex justify-center text-red items-center rounded-full border-4 border-red bg-white transition-all duration-300 md:w-[60px] md:h-[60px] hover:bg-red hover:text-white focus:bg-red focus:text-white' onClick={togleModal}>
        <svg className="w-[38px] h-[38px] fill-current text-current">
           <use href='/sprite.svg#icon-phone'></use>
               </svg>
        </button>
        {isShowModal && <OrderServiseModal togleModal={togleModal} />}
        </>
    )
};

export default BtnOrderCall;