import axios from "axios";
import {authAccountService} from "./auth.account.service";

const Axios = axios.create({
    baseURL : '/api',
    headers : {
        'Content-Type':'application/json'
    },

})

Axios.interceptors.request.use(request=>{

    if(authAccountService.isLogged()){
        request.headers.Authorization = 'Bearer ' +authAccountService.getToken()

    }

    return request
})

export default Axios