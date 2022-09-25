import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout,Dashboard,Profil} from "@/view/user";
import Error404 from "@/_utils/Error.404";


const UserRouter = () => {
    return (
       <Routes>

           <Route element={<Layout/>}>
               <Route index element={<Dashboard/>}/>
               <Route path={'/home'} element={<Dashboard/>}/>
               <Route path={'/profil'} element={<Profil/>}/>
               <Route path={'*'} element={<Error404/>}/>
           </Route>

       </Routes>
    );
};

export default UserRouter;