import React from 'react';
import {Route, Routes} from "react-router-dom";
import Register from "@/view/auth/Register";
import Login from "@/view/auth/Login";

const AuthRouter = () => {
    return (
        <Routes>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/login'} element={<Login/>}/>
        </Routes>
    );
};

export default AuthRouter;