import axios from "axios"

const apiURL = import.meta.env.VITE_API_URL

export const getBookGoogleBookApi = async(id: string) => {
    const response = await axios.get(`${apiURL}/${id}`)
    
    return response.data
}