import axios from "axios";

const BASE_URL = "http://localhost:3000/slides/"

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