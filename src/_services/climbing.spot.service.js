import Axios from "./axios.service";

const getAllParameter = async () => {
    const {data} = await Axios.get('/climbing_data/naming')
    return data
}
const create = async (credentials) => {
    const {data} = await Axios.post('/climbing_spots',credentials)
    return data
}
export const climbingSpotService = {getAllParameter,create}