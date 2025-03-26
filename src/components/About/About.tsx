import './About.scss'
import MapImage from '../../assets/images/image-map.png'

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="left">
                <h2 className="title">Did you know us? </h2>
                <p className="description">We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. 
                If you are about books, you must to subscribe to our newsletter. </p>
                <div className="form">
                    <input type="text" placeholder='Your name'/>
                    <input type="email" placeholder='Your e-mail'/>
                </div>
                <button className="btn">Subscribe</button>
            </div>
            <div className="right">
                <img src={MapImage} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default About