import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div className='flex justify-center items-center h-screen bg-[#242582]'>
            <div className='w-[600px] p-5  rounded bg-[#2F2FA2]'>
                <h2 className='text-center mb-5 text-2xl text-pink-500'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <form action="#" className='flex flex-col gap-3'>
                    <input type="email" placeholder='Enter your email adress...' className='p-3'/>
                    <input type="text" placeholder='Enter your password...' className='p-3'/>
                    <div className='flex justify-between'>
                        {isLogin ?
                            <p  className='text-pink-500'>No account? <NavLink to={REGISTRATION_ROUTE}>Make it!</NavLink></p>
                        :
                        <p className='text-pink-500'>Have an account? <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink></p>
                        }
                    <button className='bg-transparent px-5 py-3 ml-5 rounded text-[#F64C72] font-bold border-[#F64C72] border-2'>{isLogin ? 'Sign In' : 'Registration'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;