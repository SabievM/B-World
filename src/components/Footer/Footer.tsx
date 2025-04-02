import Logo from "../../assets/images/logo_JB.jpg";
import InstagramIcon from '../../assets/icons/icon-instagram.svg'
import FacebookIcon from '../../assets/icons/icon-facebook.svg'
import TwitterIcon from '../../assets/icons/icon-twitter.svg'
import PhoneIcon from '../../assets/icons/icon-phone-white.svg'
import ClockIcon from '../../assets/icons/icon-clock.svg'
import MailIcon from '../../assets/icons/icon-mail.svg'
import PaipalImage from '../../assets/images/paipal.png'
import MasterCardImage from '../../assets/images/masterCard.png'
import VisaImage from '../../assets/images/visa.png'
import './Footer.scss'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="left">
            <div className="column column-logo">
                <Link to="/">
                  <div className="logo">
                    <img src={Logo} alt="Logo" />
                  </div>
                </Link>
            </div>
            <div className="column">
              <h3 className="title">Categories</h3>
              <span>Psychology</span>
              <span>Self-Help</span>
              <span>Romance </span>
              <span>Mystery</span>
            </div>
            <div className="column">
              <h3 className="title">For kids</h3>
              <span>Games </span>
              <span>Comics</span>
              <span>Fantasy </span>
            </div>
            <div className="column">
              <h3 className="title">E-Books</h3>
              <span>Fiction</span>
              <span>Historical</span>
              <span>Horror</span>
            </div>
            <div className="column column-contacts">
              <h3 className="title">Help & Contacts</h3>
              <div className="contacts">
                <img src={PhoneIcon} alt="PhoneIcon" />
                <span>+445 87 999 000</span>
              </div>
              <div className="contacts">
                <img src={ClockIcon} alt="ClockIcon" />
                <span>Mo-Fri, 9 AM to 11 PM</span>
              </div>
              <div className="contacts">
                <img src={MailIcon} alt="MailIcon" />
                <span>b.world@store.ro</span>
              </div>
            </div>
          </div>
          <div className="right">
            <p className="text">If you have questions, you can contact us or we will do it for you. </p>
            <button className="btn">Request a call</button>
          </div>
        </div>
        <div className="middle">
          <div className="links-to-social">
            <img src={FacebookIcon} alt="facebook" />
            <img src={InstagramIcon} alt="instagram" />
            <img src={TwitterIcon} alt="twitter" />
          </div>
          <div className="carts-bank">
            <img src={PaipalImage} alt="PaipalImage" />
            <img src={MasterCardImage} alt="MasterCardImage" />
            <img src={VisaImage} alt="VisaImage" />
          </div>
        </div>
        <div className="bottom">
          <p className="text">© All copyrights are reserved. B-World 2022. </p>
        </div>
      </div>
    </div>
  )
}

export default Footer