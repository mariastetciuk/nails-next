import Link from "next/link";

const OrderService = ()=> {
    return (
        <div className="relative border-t border-red border-opacity-40 pt-8">
            
            <p className="mb-8 text-red text-justify lg:w-[550px] md:text-xl lg:pt-8">Ви можете записатись на процедури за допомогою онлайн-запису, по телефону або в наших соціальних мережах.</p>
            <div className="mx-auto lg:m-0">
            <Link href={'https://bookon.ua/s/YX5lIe2bTLArVDZ6cFLB'}rel="noopener noreferrer" target='_blank' aria-label="ordere servise" className="animate border border-white flex items-center text-center justify-center w-[130px] h-[130px] md:w-[150px] md:h-[150px] lg:w-[170px] mx-auto rounded-full bg-red bg-opacity-50 text-white px-5 transition-all duration-700 lg:m-0 lg:h-[170px] hover:opacity-70 lg:absolute lg:right-44 lg:top-6" >
               online запис
            </Link>
            </div>
        </div>
    )
};

export default OrderService; 