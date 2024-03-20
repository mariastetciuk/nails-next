import Link from "next/link";
import { useState } from "react";
import OrderServiseModal from "./OrderServiceModal";

const OrderService = ()=> {
    const [isShowModal, setisShowModal] = useState(false);

    const togleModal = () => setisShowModal(prev => !prev);
    return (
        <div className="relative border-t border-red border-opacity-40 pt-8">
            
            <p className="mb-8 text-red lg:w-[550px] md:text-xl lg:text-2xl lg:pt-8">Ви можете записатись на процедури за допомогою онлайн-запису, по телефону або в нашій <Link href={'https://www.instagram.com/direct/t/17842239836855986'} rel="noopener noreferrer" target='_blank' className=" cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-red">соц.мережі — інстаграм</Link> </p>
            <div className="mx-auto w-[130px] h-[130px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] lg:mr-0">
            <button type="button" onClick={togleModal} className="animate block mx-auto rounded-full bg-red opacity-50 text-white w-[130px] h-[130px] px-5 scale-100 transition-all duration-700 md:w-[150px] md:h-[150px] lg:mr-0 lg:w-[170px] lg:h-[170px] hover:scale-125 lg:absolute lg:right-44 lg:top-6" >
               онлайн запис
            </button>
            </div>
            {isShowModal && <OrderServiseModal togleModal={togleModal} />}
        </div>
    )
};

export default OrderService; 