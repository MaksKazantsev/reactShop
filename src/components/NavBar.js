import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, DEVICE_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Bars3Icon} from "@heroicons/react/24/outline";



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate();
    function handleClick(e) {
        e.preventDefault()
        history(ADMIN_ROUTE)
    }
    return (
        <div className='bg-[#2F2FA2] w-screen h-20 flex justify-between items-center p-5'>
            <div className='lg:text-3xl text-[#F64C72] text-xl'>
                <NavLink to={SHOP_ROUTE} href="#">MegaTechnique</NavLink>
            </div>
            {user.isAuth ?
            <div className='flex'>
                <button className='bg-transparent px-5 py-3 ml-5 rounded text-[#F64C72] font-bold border-[#F64C72] border-2 lg:block hidden' onClick={() => user.setIsAuth(false)}>Sign Out</button>
                <button className='bg-transparent px-5 py-3 ml-5 rounded text-white bg-[#F64C72] border-[#F64C72] border-2 lg:block hidden' onClick={handleClick}>Admin Panel</button>
                <Bars3Icon className='w-[40px] lg:hidden block text-[#F64C72]'/>
            </div>
            :
                <div>
                    <button className='bg-transparent px-5 py-3 ml-5 rounded text-[#F64C72] font-bold border-[#F64C72] border-2' onClick={() => user.setIsAuth(true)}>Sign In</button>
                </div>
            }

        </div>
    );
});

export default NavBar;