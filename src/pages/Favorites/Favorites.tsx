import './Favorites.scss'
import { RootState } from "@reduxjs/toolkit/query"
import { useSelector } from "react-redux"
import Card from '../../components/Card/Card'


const Favorites = () => {

    const favorites = useSelector((state: RootState) => state.favorites.favorites)
    

    return (
        <div className='favorites'>
            <div className="container">
                {favorites.length === 0 ? (
                    <h2>Пока нет избранных! Добавьте сюда свою книгу, чтобы не потреть</h2>
                ) : (
                    favorites?.map((item) => 
                        <div style={{display:"flex", flexDirection:"column", gap: "20px"}}>
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