import {userAccountService} from "../../_services/user.account.service";
import {Navigate} from "react-router-dom";
const AuthGard =({children})=>{

    if(!userAccountService.isLogged()){
       return <Navigate to={'/auth/login'}/>
    }
    return children
}

export default AuthGard