import './About.scss'
import MapImage from '../../assets/images/mapJBScreen.jpg'
import MapComponent from '../../components/GoogleMap/GoogleMap'

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="left">
                <h2 className="title">Вы слышали про нас?</h2>
                <p className="description">Jane Books — это уютный книжный магазин, где каждый найдет что-то для себя. Мы предлагаем широкий ассортимент книг различных жанров: от классики до современных бестселлеров.
                Приходите и погрузитесь в мир литературы! 📚
                По поводу сотрудничества, можете оставить заявку!
                </p>
                <div className="form">
                    <input type="text" placeholder='Ваше имя'/>
                    <input type="email" placeholder='Электронная почта'/>
                </div>
                <button className="btn">Subscribe</button>
            </div>
            <div className="right">
                <img src={MapImage} alt="" />
                {/* <MapComponent/> */}
            </div>
        </div>
        
    </div>
  )
}

export default About