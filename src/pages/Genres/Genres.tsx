import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './Genres.scss'
import { getGenres } from '../../requests/getGenres'
import CardGoogleBooksApi from '../../components/CardGoogleBooksApi/CardGoogleBooksApi'
import { useSelector } from 'react-redux';
    


const Genres = () => {

    const [booksGenres, setBooksGenres] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const genre = useSelector(state => state.genres.genre)
    console.log(genre, '111');
    
    useEffect(() => {
        try {
            const fetchData = async () => {
                setIsLoading(true)
                const resp = await getGenres(genre)
                setBooksGenres(resp.items)
                setIsLoading(false)
            }
            fetchData()
        } catch(err) {
            setBooksGenres([])
            console.log(err)
        }
        
    }, [genre])

    return (
        <div className='genres'>
            <div className="container">

                {!isLoading ? (booksGenres?.map((item) => 
                    <div key={item.id} style={{display:"flex", flexDirection:"column", gap: "20px"}}>
                        <CardGoogleBooksApi id={item.id} book={item.volumeInfo}/>
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