import Axios from "./axios.service";
const access_token = 'access_token';
const login = (credentails) => {
    return Axios.post('/login_check',credentails)
}
const register = (crendentials) => {
    return Axios.post('/users',crendentials)
}
const saveToken = (token) => {
    localStorage.setItem(access_token,token)
}
const isLogged = () => {
    let token = localStorage.getItem(access_token)
    return !!token
}
const logout =() => {
    localStorage.removeItem(access_token)
}
export const  userAccountService = {login,register,saveToken,isLogged,logout}