import React from 'react';

const DevicePage = () => {
    const description = [
        {id:1, title: 'RAM', description: '5GB'},
        {id:2, title: 'RAM', description: '5GB'},
        {id:3, title: 'RAM', description: '5GB'},
        {id:4, title: 'RAM', description: '5GB'},
        {id:5, title: 'RAM', description: '5GB'}
    ]
    const device =  {id: 1, name: 'Iphone 15 Pro', price: 25000, rating: 5, img: 'https://hips.hearstapps.com/hmg-prod/images/iphone-15-pro-max-review-esquire-65095f09647c8.jpg?crop=0.5xw:1xh;center,top'}
    return (
        <div className='grid grid-cols-3 mt-4 px-5'>
            <div className='col-span-1 justify-center flex'>
                <img src={device.img} alt="" className='w-[300px] h-[300px]'/>
            </div>
            <div className='col-span-1 items-center justify-center flex flex-col'>
                <h1 className='text-4xl'>{device.name}</h1>
                <div className='flex items-center justify-center bg-[url(/src/assets/star.png)] bg-no-repeat w-[240px] h-[240px] bg-center bg-cover'>
                    <p className='text-7xl'>{device.rating}</p>
                </div>
            </div>
            <div className='col-span-1 flex flex-col items-center justify-around text-3xl border-4'>
                <h3>From: {device.price}</h3>
                <button className='border-2 rounded p-2'>Add to cart</button>
            </div>
            <div className='flex flex-col gap-2 col-span-3 py-5'>
                <h1 className='text-4xl'>Features:</h1>
                {description.map((info, index) =>
                <div key={info.id} className={index % 2 === 0 ? 'bg-blue-500 p-3' : 'bg-transparent p-3'} >
                    {info.title} : {info.description}
                </div>
                )}
            </div>
        </div>
    );
};

export default DevicePage;