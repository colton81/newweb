import React from 'react';
import dot from '../../assets/images/dot.png';
import whiteDot from '../../assets/images/white-dot.png';
import Truck from '../../assets/images/Truck.PNG'
 
class Features extends React.Component {
    render(){
        return (
            <section className="uk-features uk-dark features-area uk-section uk-padding-remove-top">
                <div className="img-class">
                <img src={Truck} style={{z_index: "-10", width: "100%", top: "-2rem !important", display: "block"}} alt=""/>
                </div>
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m">
                        <div className="uk-item">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-mail"></i>
                                </div>
                                <h3>IN-HOUSE SERVICES</h3>
                                <div className="bar"></div>
                                <p>With our in-house
                                                        engineering, drafting,
                                                        fabrication, and
                                                        machining departments we
                                                        can keep a tight control
                                                        over quality and
                                                        delivery times.</p>

                                <div className="dot-img">
                                    <img src={dot} alt="dot" className="color-dot" />
                                    <img src={whiteDot} alt="dot" className="white-dot" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box active">
                                <div className="icon">
                                    <i className="flaticon-targeting"></i>
                                </div>
                                <h3>CAPABILITIES</h3>
                                <div className="bar"></div>
                                <p>With a 40,000 SQft
                                                        facility, 24ft hook
                                                        height, 2, 10 TON CRANES
                                                        AND 1, 15 TON CRANE we
                                                        can handle the majority
                                                        of jobs.</p>

                                <div className="dot-img">
                                    <img src={dot} alt="dot" className="color-dot" />
                                    <img src={whiteDot} alt="dot" className="white-dot" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-quality"></i>
                                </div>
                                <h3>QUALITY</h3>
                                <div className="bar"></div>
                                <p>We ensure that all
                                                        projects are done with
                                                        utmost professionalism
                                                        using quality materials
                                                        while offering clients
                                                        the support and
                                                        accessibility.</p>

                                <div className="dot-img">
                                    <img src={dot} alt="dot" className="color-dot" />
                                    <img src={whiteDot} alt="dot" className="white-dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Features;