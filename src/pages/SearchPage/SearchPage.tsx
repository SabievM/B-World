import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './SearchPage.scss'

import CardGoogleBooksApi from '../../components/CardGoogleBooksApi/CardGoogleBooksApi'
import { useSelector } from 'react-redux';
import { searchBook, SearchBookResponseType } from '../../requests/searchBooks';
    


const SearchPage = () => {
    
    const [booksList, setBooksList] = useState<SearchBookResponseType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const search = useSelector(state => state.searchReducer.search)
    console.log("search in SearchPage", search);
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await searchBook(search)
            setBooksList(response.items)
            setIsLoading(false)
        }
        fetchData()
    }, [search])
    return (
        <div className='search-page'>
            <div className="container">
            <>
                {!isLoading ? (
                    booksList?.map((item) => 
                        <div key={item.id} style={{display:"flex", flexDirection:"column", gap: "20px"}}>
                            <CardGoogleBooksApi id={item.id} book={item.volumeInfo}/>
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