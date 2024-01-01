import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className='grid lg:grid-cols-4 gap-4 grid-cols-2 text-sm'>
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
                )}
        </div>
    );
});

export default DeviceList;