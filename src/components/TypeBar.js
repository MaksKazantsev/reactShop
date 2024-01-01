import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <>
        <div className='flex flex-col gap-4'>
            {device.types.map(type =>
            <a key={type.id}
               className={type.id === device.selectedType.id  ? 'text-white border-2 p-4 text-center border-[#F64C72] bg-[#F64C72] rounded' : 'rounded text-white border-2 p-4 text-center border-[#F64C72] hover:bg-[#F64C72] duration-300'}
               onClick={() => device.setSelectedType(type)}
            >{type.name}</a>
            )}
        </div>
        </>
    );
});

export default TypeBar;