import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Main from "./pages/Main/Main"
import Product from "./pages/Product/Product"
import Layout from "./components/Layout/Layout"
import AdminPage from "./pages/AdminPage/AdminPage"
import Favorites from "./pages/Favorites/Favorites"
import Genres from "./pages/Genres/Genres"
import SearchPage from "./pages/SearchPage/SearchPage"
import ProductGoogleBookApi from "./pages/ProductGoogleBookApi/ProductGoogleBookApi"




function App() {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Main/>}/>
              <Route path="/bookdetail/:id/" element={<Product/>}/>
              <Route path="/bookdetail-googlebook/:id/" element={<ProductGoogleBookApi/>}/>
              <Route path="/favorites/" element={<Favorites/>}/>
              <Route path="/genre/:genre" element={<Genres/>}/>
              <Route path="/search/:search" element={<SearchPage/>}/>
              <Route path="/admin/" element={<AdminPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default App
