import './Favorites.scss'
import Card from '../../components/Card/Card'
import { useAppSelector } from '../../redux/hooks'
import CardGoogleBooksApi from '../../components/CardGoogleBooksApi/CardGoogleBooksApi'

const Favorites = () => {

    const favorites = useAppSelector((state) => state.favorites.favorites)
    
    return (
        <div className='favorites'>
            <div className="container">
                {favorites.length === 0 ? (
                    <h2>Пока нет избранных! Добавьте сюда свою книгу, чтобы не потреть</h2>
                ) : (
                    favorites?.map((item) => {
                        if ("author" in item) {
                            return (
                                <div key={item.id} style={{display:"flex", flexDirection:"column", gap: "20px"}}>
                                    <Card book={item}/>
                                </div>
                            )
                        } else{
                            return (
                                <div key={item.id} style={{display:"flex", flexDirection:"column", gap: "20px"}}>
                                    <CardGoogleBooksApi book={item} id={item.id}/>
                                </div>
                            )
                        }
                    }
                        
                    )
                )
                    }
            </div>
        </div>
    )
}

export default Favorites