import './Terms.scss'
import DeliveryIcon from '../../assets/icons/icon-delivery .svg'
import StaryIcon from '../../assets/icons/icon-star.svg'
import BookIcon from '../../assets/icons/icon-book.svg'

const Terms = () => {
  return (
    <div className='terms'>
        <div className="container">
            <div className="left">
                <img src={DeliveryIcon} alt="DeliveryIcon" />
                <span>Бесплтаная доставка по Городу</span>
            </div>
            <div className="middle">
                <img src={StaryIcon} alt="StaryIcon" />
                <span>Сохрани наши контакты</span>
            </div>
            <div className="right">
                <img src={BookIcon} alt="BookIcon" />
                <span>Читай на здоровье</span>
            </div>
            
        </div>
    </div>
  )
}

export default Terms