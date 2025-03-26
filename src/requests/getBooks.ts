import axios from "axios";

const  BASE_URL = "http://localhost:3000/books";

type Book = {
    id?: number,
    bestseller?: boolean,
    new?: boolean
}
export type BookResponseType = {
    id: number,
    title: string,
    author: string,
    description: string,
    images: string[],
    publication_year: number,
    rating: number,
    price: number,
    bestseller: boolean,
    new: boolean,
    genre: string,
    category: string,
    language: string,
    pages: number,
    publication_date: string,
    age_restriction: string,
    size: string
}
export const getBooks = async(params: Book) => {
    try {
        const response = await axios.get<BookResponseType[]>(BASE_URL, {
            params
        })
        return response.data
    } catch(err) {  
        console.log(err);
    }
}