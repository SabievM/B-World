import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './Genres.scss'
import { GenreBookResponseType, getGenres } from '../../requests/getGenres'
import CardGoogleBooksApi from '../../components/CardGoogleBooksApi/CardGoogleBooksApi'
import { useAppSelector } from '../../redux/hooks';

const Genres = () => {
    const [booksGenres, setBooksGenres] = useState<GenreBookResponseType | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const genre = useAppSelector(state => state.genres.genre)
    
    useEffect(() => {
        try {
            const fetchData = async () => {
                setIsLoading(true)
                const resp = await getGenres(genre)
                console.log('responce', resp);
                
                setBooksGenres(resp)
                setIsLoading(false)
            }
            fetchData()
        } catch(err) {
            setBooksGenres(null)
            console.log(err)
        }
        
    }, [genre])
    console.log(booksGenres);
    
    return (
        <div className='genres'>
            <div className="container">

                {!isLoading ? (booksGenres?.items.map((item) => 
                    <div key={item.id} style={{display:"flex", flexDirection:"column", gap: "20px"}}>
                        <CardGoogleBooksApi id={item.id} book={item}/>
                    </div>
                )) : (
                    <div style={{width: "200px", height:"200px", margin:"0 auto"}}>
                        <CircularProgress size={"100px"}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Genres