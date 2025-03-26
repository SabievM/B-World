import BookDetail from "../../components/BookDetail/BookDetail"
import Collections from "../../components/Collections/Collections"
import './Product.scss'


const Product = () => {
  return (
    <div className="product">
      <BookDetail/>
      <Collections/>
    </div>
  )
}

export default Product