import { Link } from "react-router-dom";
import Logo from "../../assets/icons/LogoBWorld.svg";
import SearchIcon from "../../assets/icons/icon-search.svg";
import FavoriteIcon from "../../assets/icons/icon-favorite.svg";
import ProfileIcon from "../../assets/icons/icon-profile.svg";
import PhoneIcon from "../../assets/icons/icon-phone.svg";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import ModalCatalog from "../ModalCatalog/ModalCatalog";
import { changeSearch } from "../../redux/searchSlice";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const openModalCatalog = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="top">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <span className="logo-text">We love books</span>
          </div>
          <div className="search">
            <input
              onChange={(event) => setSearchText(event.target.value)}
              type="text"
              placeholder="Type any book here"
            />
            <Link to={`/search/${searchText}`}>
              <img onClick={() => dispatch(changeSearch(searchText))} className="image" src={SearchIcon} alt="search" />
            </Link>
          </div>
          <div className="navigate">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/#bestsellers">Бестселлеры</Link>
              </li>
              <li className="nav-item">
                <Link to="/#new-arrivals">Новинки</Link>
              </li>
              <li className="nav-item">
                <Link to="/#collections">Коллекции</Link>
              </li>
              <li onClick={openModalCatalog} className="nav-item">
                <Link to="#">Каталог</Link>
              </li>
            </ul>
          </div>
          <div className="profile">
            <div className="icon-list">
              <Link to="/favorites">
                <div className="icon-list-item psevdo-icon psevfo-favorite">
                  <img src={FavoriteIcon} alt="favorite" />
                  <div className="quantity">{favorites.length}</div>
                </div>
              </Link>
              <Link to="/admin/">
                <div className="icon-list-item profile-icon">
                  <img src={ProfileIcon} alt="profile" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <span>Найди свою книгу и прочти ее до конца, возможно, хотя бы что-то запомнишь!</span>
          </div>
          <div className="right">
            <div className="phone">
              <img src={PhoneIcon} alt="phone" />
              <span>+7 938 995 40 44</span>
            </div>
            <Link to="https://wa.me/+79389954044" target="blank">
              <button className="btn">Перейти в WhatsApp</button>
            </Link>
          </div>
        </div>
      </div>
      {open && <ModalCatalog open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Header;