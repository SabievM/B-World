import './Slider.scss'
import RowLeft from '../../assets/icons/icon-row-left.svg'
import RowRight from '../../assets/icons/icon-row-right.svg'
import SliderContainer from '../SliderContainer/SliderContainer'
import { useEffect, useState } from 'react'
import { getSlides, SlidesResponseType } from '../../requests/getSlides'

const Slider = () => {
    const [positionSlide, setPositionSlide] = useState(0)
    const [slidesData, setSlidesData] = useState<SlidesResponseType[]>([])
    const leftSlide = () => {
        setPositionSlide(prev => prev >= 0 ? -300 : prev + 100)
    
    }
    const rightSlide = () => {
        setPositionSlide(prev => prev <= -300 ? 0 : prev - 100)
    }

    useEffect(() => {
        try{
            const fetchData = async() => {
                const resp = await getSlides()
                setSlidesData(resp)
            }
            fetchData()
        } catch(err){
            console.log(err);
        }
    }, [])
    
    return (
        <div className='slides'>
            <div style={{left: `${positionSlide}%`}} className="wrapper-slides">
                {slidesData?.map((item) => (
                    <SliderContainer key={item?.id} slide={item.params} />
                ))}
                
            </div>
            <div className="rows">
                <div onClick={leftSlide} className="row-left">
                    <img src={RowLeft} alt="" />
                </div>
                <div onClick={rightSlide} className="row-right">
                    <img src={RowRight} alt="" />
                </div>
            </div>
        </div>
        
    )
}

export default Slider