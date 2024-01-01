import React from 'react';
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <div className='lg:grid grid-cols-2 lg:grid-cols-5 py-5 pl-5 gap-y-5'>
            <div className='lg:col-span-1 col-span-1 bg-[#2F2FA2] p-5 row-span-1 rounded-md flex flex-col text-start text-xl mr-5 gap-5'>
                <TypeBar/>
                <hr className='h-1 w-[100%] my-5'/>
                <BrandBar/>
            </div>
            <div className='col-span-4'>
            <DeviceList/>
            </div>
        </div>
    );
};

export default Shop;