import axios from "axios";

const BASE_URL = 'http://localhost:3000/slides/';

export type SlidesResponseType = {
    author: string,
    description: string,
    image: string
}

export const getSlides = async () => {
    const resp = await axios.get<SlidesResponseType[]>(BASE_URL)
    return resp.data
}