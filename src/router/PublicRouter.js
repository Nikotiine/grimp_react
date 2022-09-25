import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout , Home} from '@/view/public'
import Error404 from "@/_utils/Error.404";
const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={'/home'} element={ <Home/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Route>
        </Routes>
    );
};

export default PublicRouter;