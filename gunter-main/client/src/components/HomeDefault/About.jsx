import React from 'react';
import lax from 'lax.js';
import signature from '../../assets/images/signature.png';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/galleryimage.png';
import one from '../../assets/images/1.png';
import LaxButton from '../Common/LaxButton';
import Parallax from 'parallax-js';
import Diary from './test';

 
class About extends React.Component {
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
        this.state = {};
    this.scene = React.createRef();
        
    }
    componentDidMount() {
        this.parallax = new Parallax(this.scene)
      }
      componentWillUnmount() {
        this.parallax.disable()
      }

    render(){
        return (
            <section id="about" className="uk-about uk-dark about-area uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="about-content">
                                <div className="uk-section-title section-title">
                                    <span>About Us</span>
                                    <h2>We are Houston Process and Design</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="about-text">
                                    <div className="icon">
                                        <i className="flaticon-quality"></i>
                                    </div>
                                    <h3>Best Digital Agency in the World</h3>
                                    <p> Houston Process and Design is a pioneer in
                                      the design and fabrication of heavy duty ASME
                                      and API code certified industrial pressure
                                      vessels, pressurized tanks, process
                                      vessels and tanks specializing in the Oil,
                                      Gas Power Refining and Petrochemical
                                      Markets.</p>
                                    <p>We are committed to providing the highest
                                      level of professionalism, service
                                      response, and quality workmanship.</p>

                                    <div className="signature">
                                        <img src={signature} alt="signature" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div ref={el => this.scene = el} className="about-img">
                                
                                <div data-depth="0.3" className="about-img1" >
                                <img src={about1}  alt="about-img" />
                                </div>
                                <div data-depth="0.9" className="about-img2" >
                                <img src={about2}  alt="about-img" />
                                </div>
                                
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
        );
    }
}

export default About;