import axios from "axios";


const BASE_URL = "https://673e4dda0118dbfe860ae241.mockapi.io/products"

export const deleteSlide = async(id: number) => {
    await axios.delete(`${BASE_URL}/${id}`)
}