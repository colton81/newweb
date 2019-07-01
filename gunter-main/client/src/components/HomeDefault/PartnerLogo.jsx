import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import partnerWhiteOne from '../../assets/images/partner-white-one.png';
import partnerWhiteTwo from '../../assets/images/partner-white-two.png';
import partnerWhiteThree from '../../assets/images/partner-white-three.png';
import partnerWhiteFour from '../../assets/images/partner-white-four.png';
import partnerWhiteFive from '../../assets/images/partner-white-five.png';
import partnerWhiteSix from '../../assets/images/partner-white-six.png';

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
}
 
class PartnerLogo extends React.Component {
    render(){
        return (
            <div className="partner-area uk-section uk-dark uk-padding-remove-top">
                <div className="uk-container">
                    {/* <div className="partner-slides owl-carousel owl-theme"> */}
                    <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="item">
                            <Link to="#">
                                <img src={partnerWhiteOne} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerWhiteTwo} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerWhiteThree} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerWhiteFour} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerWhiteFive} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerWhiteSix} alt="Partner" />
                            </Link>
                        </div>
                        </OwlCarousel>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}
 
export default PartnerLogo;