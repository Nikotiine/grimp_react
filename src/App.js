
import '@/assets/style/main.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthGard from "@/_helpers/guard/AuthGard";
import {PublicRouter,AuthRouter,UserRouter} from '@/router'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Routes>
             <Route path={'/*'} element={ <PublicRouter/>}/>
             <Route path={'/auth/*'} element={<AuthRouter/>}/>
             <Route path={'/grimper/*'} element={
                 <AuthGard>
                 <UserRouter/>
                 </AuthGard>
             }/>

         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
