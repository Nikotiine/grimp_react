import React from 'react';
import UserNavbar from "../../components/user/UserNavbar";
import {Outlet} from "react-router-dom";

const UserLayout = () => {
    return (
        <div className={'UserLayout'}>
            <UserNavbar/>
            <Outlet/>

        </div>
    );
};

export default UserLayout;