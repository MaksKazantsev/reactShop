import React, {useContext, useState} from "react";
import {Context} from "../index";
import { Dropdown } from 'flowbite-react';

export default function CreateDevice() {
    const {device} = useContext(Context)
    const [showModal, setShowModal] = useState(false)
    const [info, setInfo] = useState({})
    const addInfo = () => {
        setInfo([...info, {title: '', description:'', number:''}])
    }
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Add a device
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center flex items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl lg:w-[500px]">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add a device
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black text-3xl">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='flex justify-center flex-col gap-2 items-start p-5'>
                                    <Dropdown label="Device List" dismissOnClick={false} renderTrigger={() =>
                                        <span className='py-2 px-5 border-2 rounded border-pink-500 text-white bg-pink-500 w-1/2 text-center'>Choose a device</span>
                                    }>
                                    {device.types.map(type =>
                                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                    )}
                            </Dropdown>
                                    <Dropdown label="Brand list" dismissOnClick={false} renderTrigger={() =>
                                        <span className='py-2 px-2 border-2 rounded border-pink-500 text-white bg-pink-500 w-1/3 text-center'>Choose a device</span>
                                    }>
                                        {device.brands.map(brand =>
                                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                        )}
                                    </Dropdown>
                                    <input type="text" placeholder='Enter a device name' className='w-[100%] rounded focus:border-pink-500'/>
                                    <input type="number" placeholder='Enter a price' className='w-[100%] rounded focus:border-pink-500'/>
                                    <input type="file" className=''/>
                                    <hr/>
                                    <button

                                    >Add a new feature</button>
                                </div>

                            {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}