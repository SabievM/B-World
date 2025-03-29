import axios from "axios";
import { GenreBookResponseType } from "./getGenres";

const apiKey = import.meta.env.VITE_API_KEY
const apiURL = import.meta.env.VITE_API_URL

// export type BookVolumeInfo = {
//     id: number,
//     title: string,
//     authors: string[],
//     pageCount: number,
//     description: string,
//     previewLink: string,
//     imageLinks: {thumbnail: string}
// }

// export type SearchBookResponseType = {
//     kind: string,
//     totalItems: number,
//     items: {
//         id: string;
//         volumeInfo: BookVolumeInfo[]
//     }
// }


export const searchBook = async (search: string) => {
    const response = await axios.get<GenreBookResponseType>(`${apiURL}?q=${search}&key=${apiKey}`)
    return response.data
}