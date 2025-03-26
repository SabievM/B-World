import axios from "axios";


const BASE_URL = "http://localhost:3000/slides"

export const deleteSlide = async(id: string) => {
    await axios.delete(`${BASE_URL}/${id}`)
}