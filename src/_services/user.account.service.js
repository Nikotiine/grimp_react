import Axios from "./axios.service";

const getProfil = () => {
    return Axios.get('/users/'+7)
}

export const userAccountService = {getProfil}