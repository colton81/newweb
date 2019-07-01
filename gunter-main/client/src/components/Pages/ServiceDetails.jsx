import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import Collapsible from 'react-collapsible';
import blogImage from '../../assets/images/blog-details.jpg';
import Footer from '../Common/Footer';

const options = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true
}
 
class ServiceDetails extends React.Component {
    render(){
        return (
            <React.Fragment>
                <section className="page-title-area uk-page-title">
                    <div className="uk-container">
                        <h1>Services Details</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Services Details</li>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <section className="services-details-area uk-services-details uk-section">
                    <div className="uk-container">
                        <article className="uk-article services-details">
                            <div className="uk-grid uk-flex">
                                <div className="inner uk-width-expand">
                                    <div className="services-details-desc">
                                        <h3>Email Marketing</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <b>laboris nisi ut aliquip ex ea commodo consequat</b>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                        <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                                <img src={blogImage} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={blogImage} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={blogImage} alt="img" />
                                            </div>
                                        </OwlCarousel>

                                        <h3>Why Choose This Service</h3>
                                        <p>Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium dolore Totam rem aperiam with Link long list of products and never ending customer support.</p>

                                        <ul className="services-features-list">
                                            <li><i className="flaticon-tick"></i> Great Technology</li>
                                            <li><i className="flaticon-tick"></i> Delivery On Time</li>
                                            <li><i className="flaticon-tick"></i> Expert Engineers</li>
                                            <li><i className="flaticon-tick"></i> Creative Architecture</li>
                                            <li><i className="flaticon-tick"></i> Industrial Construction</li>
                                            <li><i className="flaticon-tick"></i> 24/7 Support</li>
                                        </ul>

                                        <blockquote className="blockquote">
                                            <p>Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium dolore Totam rem aperiam with Link long list of products and never ending customer support.</p>
                                        </blockquote>

                                        <h3>Our Work Benefits</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                        <div className="our-work-benefits">
                                            <Collapsible trigger="Which material types can you work with">
                                                <p>This is the collapsible content. It can be any element or React component you like. It can even be another Collapsible component. Check out the next section!</p>
                                            </Collapsible>

                                            <Collapsible trigger="Is Smart Lock required for instant apps?">
                                                <p>This is the collapsible content. It can be any element or React component you like. It can even be another Collapsible component. Check out the next section!</p>
                                            </Collapsible>
                                        </div>
                                    </div>
                                </div>

                                <div className="uk-sidebar uk-width-1-5 uk-flex-first@l uk-first-column">
                                    <div className="widget widget_search">
                                        <form>
                                            <input type="text" className="uk-input" placeholder="Search here..." />
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>

                                    <div className="widget service_list">
                                        <ul>
                                            <li><Link to="#" className="active">Email Marketing <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#">Market Analysis <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#">Keyword Research <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#">Digital Branding <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#">Creative Solutions <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#">Marketing Solutions <i className="flaticon-right"></i></Link></li>

                                            <li><Link to="#">Business Analytics <i className="flaticon-right"></i></Link></li>

                                            <li><Link to="#">UX & UI Design <i className="flaticon-right"></i></Link></li>

                                            <li><Link to="#">Photography <i className="flaticon-right"></i></Link></li>

                                            <li><Link to="#">Management <i className="flaticon-right"></i></Link></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_download">
                                        <h3 className="widget-title">Download</h3>
                                        <div className="bar"></div>
                                        
                                        <ul>
                                            <li><Link to="#">Our Brochure Pdf <i className="flaticon-edit"></i></Link></li>
                                            <li><Link to="#">Our Iso Certificate <i className="flaticon-edit"></i></Link></li>
                                            <li><Link to="#">Greate Technology <i className="flaticon-edit"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>  

                <Footer />
            </React.Fragment>
        );
    }
}
 
export default ServiceDetails;