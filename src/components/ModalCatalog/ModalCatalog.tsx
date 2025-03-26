import { Link } from "react-router-dom";
import "./ModalCatalog.scss";
import { useDispatch } from "react-redux";
import { changeGenres } from "../../redux/genreSlice";

type ModalCatalogProps = {
  open: boolean,
  setOpen: (open: boolean) => void;
};

const ModalCatalog: React.FC<ModalCatalogProps> = ({ setOpen }) => {
  const dispatch = useDispatch();

  const handleClickItem = (genre: string) => {
    dispatch(changeGenres(genre));
    setOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("modal-catalog")) {
      setOpen(false);
    }
  };

  const genres = [
    "Русская классика",
    "Зарубежная классика",
    "Зарубежная проза",
    "Фэнтези",
    "Детектив",
    "Психология",
    "Научпоп",
    "Английский язык",
    "Физика",
    "Планета Земля",
  ];

  return (
    <div className="modal-catalog" onClick={handleOverlayClick}>
      <div className="modal-catalog-wrapper">
        <button className="close-btn" onClick={() => setOpen(false)}>
          Закрыть
        </button>
        <div className="modal-catalog-container">
          <h3 className="modal-title">Каталог</h3>
          <ul className="genres-list">
            {genres.map((genre) => (
              <li key={genre} className="genres-item">
                <Link to={`/genre/${genre}`} onClick={() => handleClickItem(genre)}>
                  {genre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalCatalog;