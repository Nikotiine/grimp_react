import Axios from "./axios.service";

const getProfil = async () => {
    let id = localStorage.getItem('id')
    const {data} = await Axios.get('/users/'+id)
    return data
}

export const userAccountService = {getProfil}