import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_522.svg';
import footerShapeOne from '../../assets/images/footer-shape1.png';
import footerShapeTwo from '../../assets/images/footer-shape2.png';
import GoTop from './GoTop';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area uk-dark uk-footer">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link to="index.html">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>

                                <p>Lorem ipsum dolor consectetur adipiscing elit, eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                       

                        <div className="item">
                            <div className="single-footer-widget">
                                <h3>Houston</h3>
                                <div className="bar"></div>

                                <div className="location">
                                    <p>7400 Apache St.<br />Houston, TX 77028<br /> United States</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-footer-widget">
                                <h3>Contact</h3>
                                <div className="bar"></div>

                                <ul className="contact-info">
                                    <li><Link to="#">info@houstonprocessanddesign.com</Link></li>
                                    <li><Link to="#">fax@houstonprocessanddesign.com</Link></li>
                                    <li><Link to="#">281-741-9439</Link></li>
                                </ul>
                                <ul className="social">
                                    <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                                    <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                                    <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                            <div className="item">
                                <p>© HoustonProcessandDesign. All Rights Reserved, 2019</p>
                            </div>

                            <div className="item">
                                <ul>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <GoTop scrollStepInPx="50" delayInMs="16.66" />
                    </div>
                </div>

                <div className="br-line"></div>
                <div className="footer-shape1">
                    <img src={footerShapeOne} alt="shape" />
                </div>
                <div className="footer-shape2">
                    <img src={footerShapeTwo} alt="shape" />
                </div>
            </footer>
        );
    }
}
 
export default Footer;