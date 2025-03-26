import { useLocation } from 'react-router-dom'
import About from '../../components/About/About'
import Bestsellers from '../../components/Bestsellers/Bestsellers'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Slider from '../../components/Slider/Slider'
import Terms from '../../components/Terms/Terms'
import './Main.scss'
import { useEffect, useRef } from 'react'
import Collections from '../../components/Collections/Collections'


const Main = () => {
  
  const bestsellersRef = useRef(null)
  const newArrivalsRef = useRef(null)
  const collectionsRef = useRef(null)
  const location = useLocation()

  
  
  useEffect(() => {
    if (location.hash === "#bestsellers" && bestsellersRef.current) {
      bestsellersRef.current.scrollIntoView({behavior: "smooth"})
    } else if (location.hash === "#new-arrivals" && newArrivalsRef.current){
      newArrivalsRef.current.scrollIntoView({behavior: "smooth"})
    } else if (location.hash === "#collections" && collectionsRef.current) {
      collectionsRef.current.scrollIntoView({behavior: "smooth"})
    }
   
  }, [location])

  return (

    <div className='main'>
        <Slider/>
        <Terms/>
        <Bestsellers bestsellersRef={bestsellersRef}/>
        <NewArrivals newArrivalsRef={newArrivalsRef}/>
        <Collections collectionsRef={collectionsRef}/>
        <About/>
    </div>
  )
}

export default Main