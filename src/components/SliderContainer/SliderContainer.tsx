import './SliderContainer.scss'
import Slide from '../../assets/images/image-slider1.png'
type PropsSlide = {
    author: string,
    description: string,
    image: string
}

const SliderContainer = ({slide}: PropsSlide) => {

    const orderViaWhatsApp = () => {
        const message = `Здравствуйте! Я хочу заказать эту книгу, автора ${slide.author}`;
        const url = `https://wa.me/+79389954044?text=${encodeURIComponent(message)}`;   
        window.open(url, '_blank');
    }

    return (
        <div className="slider">
            <div className="container">
                <div className="left">
                    <button className="btn">Author of august</button>
                    <h1 className="title">{slide.author}</h1>
                    <p className="description">{slide.description}</p>
                    <button onClick={orderViaWhatsApp} className="btn-bottom"><a href="">Заказть эту книгу</a></button>
                </div>
                <div className="right">
                    <div className="text">Autographed books + 30% discount</div>
                    <div className="image">
                        <img src={Slide} alt="SLIDEBOOK" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderContainer