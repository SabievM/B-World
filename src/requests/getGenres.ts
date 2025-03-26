import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY
const apiURL = import.meta.env.VITE_API_URL

export type GenreBookResponseType = {
    id: number,
    title: string,
    authors: string[],
    pageCount: number,
    description: string,
    previewLink: string,
    imageLinks: string[]
}

export const getGenres = async (genre: string) => {
    const response = await axios.get<GenreBookResponseType[]>(`${apiURL}?q=subjects:${genre}&langRestrict=ru&maxResults=10&oprderBy=relevance&key=${apiKey}`)
    console.log(genre, '222');
    
    return response.data
}
