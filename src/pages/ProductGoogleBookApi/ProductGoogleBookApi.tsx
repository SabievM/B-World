import BookDetailGoogleBooksApi from "../../components/BookDetailGoogleBooksApi/BookDetailGoogleBooksApi"
import Collections from "../../components/Collections/Collections"
import './ProductGoogleBookApi.scss'


const ProductGoogleBookApi = () => {
  return (
    <div className="product">
      <BookDetailGoogleBooksApi/>
      <Collections/>
    </div>
  )
}

export default ProductGoogleBookApi