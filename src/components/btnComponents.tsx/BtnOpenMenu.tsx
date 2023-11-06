'use client'
import { useState } from "react";
import OpenBurgerMenuIcon from "../icons/OpenBurgerMenuIcon"
import BurgerMenu from "../BurgerMenu";


const BtnOpenMenu = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);

    const togleModal = () => setIsShowMenu((prev)=>!prev);
return (
<>
    <button type='button' onClick={togleModal} className="flex items-center lg:hidden">
        <OpenBurgerMenuIcon />
    </button>
    {isShowMenu && <BurgerMenu  togleModal={togleModal}/>}
    </>
)
};
export default BtnOpenMenu;