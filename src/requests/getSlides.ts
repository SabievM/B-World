import axios from "axios";

const BASE_URL = 'http://localhost:3000/slides/';

type params = {
    author: string,
    description: string,
    image: string
}

export type SlidesResponseType = {
    id: number,
    params: params
}

export const getSlides = async () => {
    const resp = await axios.get<SlidesResponseType[]>(BASE_URL)
    return resp.data
}