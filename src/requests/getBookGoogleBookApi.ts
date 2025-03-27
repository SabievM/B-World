import axios from "axios"

const apiURL = import.meta.env.VITE_API_URL

type ImageLinks = {
    medium?: string,
    small?: string,
    smallThumbnail?: string,
    thumbnail?: string
}

export type VolumeInfo = {
    imageLinks?: ImageLinks,
    title: string,
    description?: string,
    authors?: string[],
    language?: string,
    printedPageCount?: number,
    publishedDate?: string,
    publisher?: string,
    previewLink?: string
}
export type GoogleBookApiResponceType = {
    id: string,
    volumeInfo: VolumeInfo
}

export const getBookGoogleBookApi = async(id: string) => {
    const response = await axios.get<GoogleBookApiResponceType>(`${apiURL}/${id}`)
    
    return response.data
}