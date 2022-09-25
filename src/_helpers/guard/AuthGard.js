import {authAccountService} from "../../_services/auth.account.service";
import {Navigate} from "react-router-dom";
const AuthGard =({children})=>{

    if(!authAccountService.isLogged()){
       return <Navigate to={'/auth/login'}/>
    }
    return children
}

export default AuthGard