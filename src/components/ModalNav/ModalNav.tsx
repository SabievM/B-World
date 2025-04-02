import { Link } from 'react-router-dom'
import './ModalNav.scss'

type ModalCatalogProps = {
    open: boolean,
    openNav: boolean,
    setOpen: (open: boolean) => void,
    setOpenNav: (openNav: boolean) => void,
  };

const ModalNav: React.FC<ModalCatalogProps> = ({open, setOpen, openNav, setOpenNav}) => {

    const openModalCatalog = () => {
        setOpen(!open);
        setOpenNav(false)
      };
    
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("modal-nav")) {
        setOpenNav(!openNav);
    }
    };
    return (
        <div onClick={handleOverlayClick} className="modal-nav">
            <div className="navigate">
                <ul className="nav-list">
                <li onClick={() => setOpenNav(false)} className="nav-item">
                    <Link to="/#bestsellers">Бестселлеры</Link>
                </li>
                <li onClick={() => setOpenNav(false)} className="nav-item">
                    <Link to="/#new-arrivals">Новинки</Link>
                </li>
                <li onClick={() => setOpenNav(false)} className="nav-item">
                    <Link to="/#collections">Коллекции</Link>
                </li>
                <li onClick={openModalCatalog} className="nav-item">
                    <Link to="#">Каталог</Link>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default ModalNav