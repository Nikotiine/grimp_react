import React from 'react';
import Navbar from "../../components/public/Navbar";
import {Outlet} from "react-router-dom";

const PublicLayout = () => {
    return (
        <div className={'PublicLayout'}>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default PublicLayout;