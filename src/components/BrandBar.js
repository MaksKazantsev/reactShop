import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className='flex flex-col gap-4'>
            {device.brands.map(brand =>
                <div key={brand.id}
                     onClick={() => device.setSelectedBrand(brand)}
                     className={brand.id === device.selectedBrand.id  ? 'text-white border-2 p-4 text-center border-[#F64C72] bg-[#F64C72] rounded' : 'rounded text-white border-2 p-4 text-center border-[#F64C72] hover:bg-[#F64C72] duration-300'}
                >
                    {brand.name}
                </div>
            )}
        </div>
    );
});

export default BrandBar;