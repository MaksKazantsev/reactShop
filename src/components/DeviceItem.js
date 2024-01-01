import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        navigate(DEVICE_ROUTE + '/' + device.id)
    }
    return (
        <div onClick={handleSubmit} className='border-2 rounded-md items-center justify-center flex flex-col p-4 '>
            <img src={device.img} alt='iphone' className='lg:w-[200px] lg:h-[210px]'/>
            <div className='w-[100px]'>
                <div className='flex justify-around items-center'>
                    <div>Apple</div>
                      <div className='flex'>
                        <div>{device.rating}</div>
                        <img alt="star" className='w-[20px] h-[20px]'/>
                    </div>
                </div>
            </div>
            <div>{device.name}</div>
        </div>
    );
};

export default DeviceItem;