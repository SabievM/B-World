import "./Card.scss";
import IconCardFavorite from "../../assets/icons/icon-card-favorite.svg";
import DeleteIcon from "../../assets/icons/icons-delete.svg";
import { Link } from "react-router-dom";
import { BookResponseType } from "../../requests/getBooks";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";


type Props = {
  book: BookResponseType;
};

const Card: React.FC<Props> = ({ book }) => {
  const dispatch = useDispatch();
  const favorites = useAppSelector((state: RootState) => state.favorites.favorites);

  const orderViaWhatsApp = () => {
    const message = `Здравствуйте! Я хочу заказать книгу "${book.title}" от автора ${book.author}`;
    const url = `https://wa.me/+79389954044?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="card">
      <Link to={`/bookdetail/${book.id}/`}>
        <img className="card-image" src={book.images[0]} alt="Book cover" />
      </Link>
      <span className="title">{book.title}</span>
      <span className="author">{book.author}</span>
      <span className="price">{book.price} руб.</span>
      <div className="add-to-cart">
        <span onClick={orderViaWhatsApp} className="cart">Заказать через WhatsApp</span>
      </div>
      <div onClick={() => dispatch(toggleFavorite(book))} className="favorite">
        <img
          src={favorites.some((fav) => fav.id === book.id) ? DeleteIcon : IconCardFavorite}
          alt="Favorite icon"
        />
      </div>
    </div>
  );
};

export default Card;