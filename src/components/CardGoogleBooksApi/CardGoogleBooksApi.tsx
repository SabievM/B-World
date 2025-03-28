import "./CardGoogleBooksApi.scss"
import IconCardFavorite from "../../assets/icons/icon-card-favorite.svg"
import DeleteIcon from "../../assets/icons/icons-delete.svg"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toggleFavoriteGoogleBooks } from "../../redux/favoritesSlice"

import React from "react"
import { GoogleBookApiResponceType } from "../../requests/getBookGoogleBookApi"
import { useAppSelector } from "../../redux/hooks"


type Props = {
    book: GoogleBookApiResponceType,
    id: string
}

const CardGoogleBooksApi: React.FC<Props> = ({ book, id }: Props) => {
    
    const dispatch = useDispatch()
    const favorites = useAppSelector((state) => state.favorites.favorites)
    
    return (
        
        <div className="card">
            <Link to={`/bookdetail-googlebook/${id}/`}>
                <img
                    className="card-image"
                    src={book?.volumeInfo?.imageLinks?.thumbnail}
                    alt="Image"
                />
            </Link>
            <span className="title">{book?.volumeInfo?.title.length < 50 ? book?.volumeInfo?.title : `${book?.volumeInfo?.title.slice(0, 50)}...`}</span>
            {book?.volumeInfo?.authors && (
                <span className="author">{book?.volumeInfo?.authors}</span>
            )}
            <span className="price">{book?.volumeInfo?.printedPageCount} страниц</span>
            <div className="preview">
                <a target="_blank" href={book.volumeInfo?.previewLink} className="link">Предварительный просмотр</a>
            </div>
            <div onClick={() => dispatch(toggleFavoriteGoogleBooks(book))} className="favorite">
                <img
                    src={favorites.some((fav) => fav.id === book.id) ? DeleteIcon : IconCardFavorite}
                    alt="IconCardFavorite"
                />
            </div>
        </div>
       
    )
}

export default CardGoogleBooksApi
