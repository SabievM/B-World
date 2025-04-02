import { useEffect, useState } from 'react';
import Card from '../Card/Card';

import RowLeft from '../../assets/icons/row-left.svg';
import RowRight from '../../assets/icons/row-right.svg';

import './Bestsellers.scss';
import { BookResponseType, getBooks } from '../../requests/getBooks';

// Типизация пропсов
interface BestsellersProps {
  bestsellersRef: React.RefObject<HTMLDivElement>;
}

const Bestsellers: React.FC<BestsellersProps> = ({ bestsellersRef }) => {
  const [slidePosition, setSlidePosition] = useState<number>(0);
  const [data, setData] = useState<BookResponseType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getBooks({ bestseller: true });
        if (resp) {
          setData(resp);
        }
      } catch (err) {
        console.error('Ошибка загрузки книг:', err);
      }
    };

    fetchData();
  }, []);

  const handleSlideLeft = () => {
    setSlidePosition((prev) => (prev >= 0 ? 0 : prev + 200));
  };

  const handleSlideRight = () => {
    setSlidePosition((prev) =>
      data.length > 0 && prev <= -200 * (data.length - 1) ? prev : prev - 200
    );
  };

  return (
    <div ref={bestsellersRef} className="bestsellers">
      <div className="container">
        <div className="title">
          <h2>Бестселлеры</h2>
        </div>
        <div style={{ transform: `translate(${slidePosition}px)` }} className="cards">
          {data.map((item) => (
            <Card key={item.id} book={item} />
          ))}
        </div>
      </div>
      <div onClick={handleSlideLeft} className="row left">
        <img src={RowLeft} alt="RowLeft" />
      </div>
      <div onClick={handleSlideRight} className="row right">
        <img src={RowRight} alt="RowRight" />
      </div>
    </div>
  );
};

export default Bestsellers;