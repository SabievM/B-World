import axios from "axios";
import { GoogleBookApiResponceType } from "./getBookGoogleBookApi";

const apiKey = import.meta.env.VITE_API_KEY
const apiURL = import.meta.env.VITE_API_URL

export type GenreBookResponseType = {
    items: GoogleBookApiResponceType[];
}

export const getGenres = async (genre: string) => {
    const response = await axios.get<GenreBookResponseType>(`${apiURL}?q=subjects:${genre}&langRestrict=ru&maxResults=10&oprderBy=relevance&key=${apiKey}`)
    console.log(response.data);
    
    return response.data
}
