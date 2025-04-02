import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Collections.scss";
import { BookResponseType, getBooks } from "../../requests/getBooks";

import RowLeft from "../../assets/icons/row-left.svg";
import RowRight from "../../assets/icons/row-right.svg";

type CollectionsProps = {
  collectionsRef: React.RefObject<HTMLDivElement>;
};

const Collections: React.FC<CollectionsProps> = ({ collectionsRef }) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [collections, setCollections] = useState<BookResponseType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getBooks({ bestseller: true, new: true });
        if (resp) {
          setCollections(resp);
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
    setSlidePosition((prev) => Math.max(prev - 200, -200 * (collections.length - 1)));
  };

  return (
    <div ref={collectionsRef} className="collections">
      <div className="container">
        <h2 className="title">Коллекции</h2>
        <div style={{ transform: `translateX(${slidePosition}px)` }} className="cards">
          {collections.map((item) => (
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

export default Collections;