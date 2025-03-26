import { useEffect, useState } from "react";
import Card from "../Card/Card";
import RowLeft from "../../assets/icons/row-left.svg";
import RowRight from "../../assets/icons/row-right.svg";
import "./NewArrivals.scss";
import { BookResponseType, getBooks } from "../../requests/getBooks";

type NewArrivalsProps = {
  newArrivalsRef: React.RefObject<HTMLDivElement>;
};

const NewArrivals: React.FC<NewArrivalsProps> = ({ newArrivalsRef }) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [newBooks, setNewBooks] = useState<BookResponseType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getBooks({ new: true });
        if (resp) {
          setNewBooks(resp);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleSlideLeft = () => {
    setSlidePosition((prev) => Math.min(prev + 200, 0));
  };

  const handleSlideRight = () => {
    setSlidePosition((prev) => Math.max(prev - 200, -200 * (newBooks.length - 1)));
  };

  return (
    <div ref={newArrivalsRef} className="new-arrivals">
      <div className="container">
        <div className="title">
          <h2>New Arrivals</h2>
        </div>
        <div style={{ transform: `translateX(${slidePosition}px)` }} className="cards">
          {newBooks.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
      <div onClick={handleSlideLeft} className="row left">
        <img src={RowLeft} alt="Left Arrow" />
      </div>
      <div onClick={handleSlideRight} className="row right">
        <img src={RowRight} alt="Right Arrow" />
      </div>
    </div>
  );
};

export default NewArrivals;