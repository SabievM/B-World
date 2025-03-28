import axios from "axios";

const BASE_URL = "https://673e4dda0118dbfe860ae241.mockapi.io/products/"

type Slides = {
    author: string,
    description: string,
    image: string
}

export const postSlide = async (params: Slides) => {
    try {
        const resp = axios.post(BASE_URL, {params})
        return resp
    } catch(err){
        console.log(err);
    }   
}