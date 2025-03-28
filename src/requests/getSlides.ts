import axios from "axios";

const BASE_URL = 'https://673e4dda0118dbfe860ae241.mockapi.io/products/';

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