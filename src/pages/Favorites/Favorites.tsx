import './Favorites.scss'
import Card from '../../components/Card/Card'
import { useAppSelector } from '../../redux/hooks'


const Favorites = () => {

    const favorites = useAppSelector((state) => state.favorites.favorites)
    

    return (
        <div className='favorites'>
            <div className="container">
                {favorites.length === 0 ? (
                    <h2>Пока нет избранных! Добавьте сюда свою книгу, чтобы не потреть</h2>
                ) : (
                    favorites?.map((item) => 
                        <div key={item.id} style={{display:"flex", flexDirection:"column", gap: "20px"}}>
                            <Card book={item}/>
                        </div>
                    )
                )
                    }
            </div>
        </div>
    )
}

export default Favorites