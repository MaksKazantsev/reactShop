import React from 'react';
import CreateType from "../modals/CreateType";
import CreateBrand from "../modals/CreateBrand";
import CreateDevice from "../modals/CreateDevice";

const Admin = () => {
    return (
        <div className={'flex flex-col w-screen gap-3 p-5'}>
            <CreateType/>
            <CreateBrand/>
            <CreateDevice/>
        </div>
    );
};

export default Admin;