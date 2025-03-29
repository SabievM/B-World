import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './SearchPage.scss'

import CardGoogleBooksApi from '../../components/CardGoogleBooksApi/CardGoogleBooksApi'
import { searchBook } from '../../requests/searchBooks';
import { useAppSelector } from '../../redux/hooks';
import { GenreBookResponseType } from '../../requests/getGenres';
    


const SearchPage = () => {
    
    const [booksList, setBooksList] = useState<GenreBookResponseType | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const search = useAppSelector(state => state.searchReducer.search)
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await searchBook(search)
            setBooksList(response)
            setIsLoading(false)
        }
        fetchData()
    }, [search])
    return (
        <div className='search-page'>
            <div className="container">
            <>
                {!isLoading ? (
                    booksList?.items.map((item) => 
                        <div key={item.id} style={{display:"flex", flexDirection:"column", gap: "20px"}}>
                            <CardGoogleBooksApi id={item.id} book={item}/>
                        </div>
                    )
                ) : (
                    <div style={{width: "200px", height:"200px", margin:"0 auto"}}>
                        <CircularProgress size={"100px"}/>
                    </div>
                )}
            </>
            </div>
        </div>
    )
}

export default SearchPage