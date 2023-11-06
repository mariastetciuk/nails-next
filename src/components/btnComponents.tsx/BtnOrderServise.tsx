'use client'
import { PropsBtnOrder } from "@/type/type";
import { useState } from "react";
import OrderServiseModal from "../OrderServiceModal";


const BtnOrderService = ({style}: PropsBtnOrder) => {
    const [isShowModal, setisShowModal] = useState(false);

    const togleModal = () => setisShowModal(prev => !prev);


    return (
    <>
        <button className={style} onClick={togleModal}>Записатися</button>
        {isShowModal && <OrderServiseModal togleModal={togleModal} />}
        </>
    )
};
export default BtnOrderService;