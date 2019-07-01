import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../../assets/images/project-details.jpg';
import Footer from '../Common/Footer';
 
class ProjectDetails extends React.Component {
    render(){
        return (
            <React.Fragment>
                {/* <!-- Start Page Title Area --> */}
                <section className="page-title-area uk-page-title">
                    <div className="uk-container">
                        <h1>Project Details</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Project Details</li>
                        </ul>
                    </div>
                </section>
                {/* <!-- End Page Title Area --> */}

                {/* <!-- Start Project Details Area --> */}
                <section className="project-details-area uk-project-details uk-section">
                    <div className="uk-container">
                        <div className="uk-grid uk-flex project-details">
                            <div className="project-details-img uk-width-expand">
                                <img src={projectImg} alt="project" />
                            </div>

                            <div className="item uk-width-1-5">
                                <div className="project-details-info">
                                    <ul>
                                        <li><span>Customer Name:</span> Steven John</li>
                                        <li><span>Category:</span> Art & Design</li>
                                        <li><span>Date:</span> 04/11/2019</li>
                                        <li><span>Status:</span> In Process</li>
                                        <li><span>Demo Link:</span> <Link to="#">www.gunter.com</Link></li>
                                        <li><span>Tags:</span> <Link to="#">Art</Link>, <Link to="#">Design</Link></li>
                                        <li>
                                            <span>Share:</span>
                                            
                                            <ul>
                                                <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                                                <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                                                <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="project-details-desc">
                            <h3>Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>

                            <blockquote className="blockquote">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Lorem ipsum dolor sit amet.</p>
                            </blockquote>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>

                        <div className="project-next-and-prev">
                            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                                <div className="item">
                                    <Link to="#" className="uk-button uk-button-default">Prev Project</Link>
                                </div>
            
                                <div className="item uk-text-right">
                                    <Link to="#" className="uk-button uk-button-default">Next Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default ProjectDetails;