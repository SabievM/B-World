import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import './Layout.scss'
import { useEffect, useState } from "react"

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  
      useEffect(() => {
          const handleScroll = () => {
              if (window.scrollY > 100) {
                  setIsVisible(true);
              } else {
                  setIsVisible(false);
              }
          };
  
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div className="layout">
        <Header/>
            <Outlet/>
        <Footer/>
        <div onClick={scrollToTop} className={`btn-top ${isVisible ? "btn-top-visible" : "btn-top-hidden"}`}>
          <span>Вверх</span>
        </div>
    </div>
  )
}

export default Layout