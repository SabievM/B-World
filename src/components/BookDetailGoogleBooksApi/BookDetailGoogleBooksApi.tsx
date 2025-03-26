import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import IconStar from '../../assets/icons/icon-star-raiting.svg';
import './BookDetailGoogleBooksApi.scss';

import { BookResponseType } from '../../requests/getBooks';
import { RootState } from '../../redux/store';
import { toggleFavorite } from '../../redux/favoritesSlice';
import { getBookGoogleBookApi } from '../../requests/getBookGoogleBookApi';

const BookDetailGoogleBooksApi: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookResponseType | null>(null);
  const [numberOfBooks, setNumberOfBooks] = useState<number>(1);

  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

console.log(id);
    
  const orderViaWhatsApp = () => {
    if (!book) return;
    const message = `Здравствуйте! Я хочу заказать книгу "${book.title}" от автора ${book.author}, в количестве ${numberOfBooks}`;
    const url = `https://wa.me/+79389954044?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        if (!id) return;
        const resp = await getBookGoogleBookApi(id);
        if (resp) {
          setBook(resp.volumeInfo);
        }
        console.log(resp.volumeInfo);
        
      } catch (err) {
        console.error('Ошибка загрузки книги:', err);
      }
    };

    window.scrollTo(0, 0);
    fetchBook();
  }, [id]);

  return (
    <div className="book-detail">
      <div className="container">
        <div className="left">
          <div className="main-image">
            <img src={book?.imageLinks.thumbnail} alt="MainImage" />
          </div>
        </div>
        <div className="right">
          <h2 className="title">{book?.title}</h2>
          <span className="author">{book?.author}</span>
          <div className="rating">
            <div className="rating-stars">
              <img src={IconStar} alt="IconStar" />
            </div>
            <span className="rating-number">4.5</span>
          </div>
          <span className="price">{book?.price} руб</span>
          <p className="description">{book?.description}</p>
          <div className="counter">
            <button
              onClick={() => setNumberOfBooks((prev) => (prev <= 1 ? 1 : prev - 1))}
              className="counter-button"
            >
              -
            </button>
            <span>{numberOfBooks}</span>
            <button onClick={() => setNumberOfBooks((prev) => prev + 1)} className="counter-button">
              +
            </button>
          </div>
          <div className="btns">
            <button onClick={orderViaWhatsApp} className="btn add-cart">
              Заказать через WhatsApp
            </button>
            <button
              onClick={() => book && dispatch(toggleFavorite(book))}
              className="btn add-favorite"
            >
              {favorites.some((fav) => fav.id === book?.id)
                ? 'Удалить из избранных'
                : 'Добавить в избранное'}
            </button>
          </div>
          <div className="additional-information">
            <div className="column column-left">
              <div className="item">
                <span className="name">Автор :</span>
                <span className="meaning">{book?.authors[0]}</span>
              </div>
              <div className="item">
                <span className="name">Language</span>
                <span className="meaning">{book?.language}</span>
              </div>
              <div className="item">
                <span className="name">Print length :</span>
                <span className="meaning">{book?.printedPageCount}</span>
              </div>
            </div>
            <div className="column column-right">
              <div className="item">
                <span className="name">Publication date :</span>
                <span className="meaning">{book?.publishedDate}</span>
              </div>
              <div className="item">
                <span className="name">Издатель :</span>
                <span className="meaning">{book?.publisher}</span>
              </div>
              <div className="item">
                <span className="name">Читать онлайн :</span>
                <span className="meaning"><a style={{color:"red"}} target='_blank' href={book?.previewLink}>Нажми сюда</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailGoogleBooksApi;