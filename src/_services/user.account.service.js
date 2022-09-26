import Axios from "./axios.service";
const id = localStorage.getItem('id')
const getProfil = async () => {

    const {data} = await Axios.get('/users/'+id)
    return data
}
const editProfil = (credentials) => {
    return  Axios.put('/users/'+id,credentials)

}
export const userAccountService = {getProfil,editProfil}