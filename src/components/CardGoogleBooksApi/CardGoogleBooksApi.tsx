import "./CardGoogleBooksApi.scss"
import IconCardFavorite from "../../assets/icons/icon-card-favorite.svg"
import DeleteIcon from "../../assets/icons/icons-delete.svg"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleFavoriteGoogleBooks } from "../../redux/favoritesSlice"
import { GenreBookResponseType } from "../../requests/getGenres"
import React from "react"


type Props = {
    book: GenreBookResponseType,
    id: string
}

const CardGoogleBooksApi: React.FC<Props> = ({ book, id }: Props) => {
    
    const dispatch = useDispatch()
    const favorites = useSelector((state: RootState) => state.favorites.favorites)
    console.log(book);
    
    return (
        
        <div className="card">
            <Link to={`/bookdetail-googlebook/${id}/`}>
                <img
                    className="card-image"
                    src={book?.imageLinks.thumbnail}
                    alt="Image"
                />
            </Link>
            <span className="title">{book?.title.length < 50 ? book?.title : `${book?.title.slice(0, 50)}...`}</span>
            {book?.authors && (
                <span className="author">{book?.authors[0]}</span>
            )}
            <span className="price">{book?.pageCount} страниц</span>
            <div className="preview">
                <a target="_blank" href={book.previewLink} className="link">Предварительный просмотр</a>
            </div>
            <div onClick={() => dispatch(toggleFavoriteGoogleBooks(book))} className="favorite">
                <img
                    src={favorites.some((fav) => fav.title === book.title) ? DeleteIcon : IconCardFavorite}
                    alt="IconCardFavorite"
                />
            </div>
        </div>
       
    )
}

export default CardGoogleBooksApi
