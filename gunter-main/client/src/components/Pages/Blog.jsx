import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../Common/Footer';
import blogImgOne from '../../assets/images/blog1.jpg';
import blogImgTwo from '../../assets/images/blog2.jpg';
import blogImgThree from '../../assets/images/blog3.jpg';
 
class Blog extends React.Component {
    render(){
        return (
            <React.Fragment>
            <section class="page-title-area uk-page-title">
                <div class="uk-container">
                    <h1>Blog</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </section>
            <section className="blog-area uk-blog uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgOne} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">25 April</span>
                                <h3><Link to="/blog-details">The 13 Best Time Tracking Apps of 2019</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgTwo} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">26 April</span>
                                <h3><Link to="/blog-details">11 Tools to Help You Easily Create Proposals</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgThree} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">27 April</span>
                                <h3><Link to="/blog-details">The Outlook for Digital Agencies in 4 Charts</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgOne} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">25 April</span>
                                <h3><Link to="/blog-details">The 13 Best Time Tracking Apps of 2019</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgTwo} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">26 April</span>
                                <h3><Link to="/blog-details">11 Tools to Help You Easily Create Proposals</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgThree} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">27 April</span>
                                <h3><Link to="/blog-details">The Outlook for Digital Agencies in 4 Charts</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgOne} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">25 April</span>
                                <h3><Link to="/blog-details">The 13 Best Time Tracking Apps of 2019</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgTwo} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">26 April</span>
                                <h3><Link to="/blog-details">11 Tools to Help You Easily Create Proposals</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-post-image">
                                <Link to="#">
                                    <img src={blogImgThree} alt="blog" />
                                </Link>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">27 April</span>
                                <h3><Link to="/blog-details">The Outlook for Digital Agencies in 4 Charts</Link></h3>
                                <Link to="#" className="read-more">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="pagination-area">
                        <ul className="uk-pagination uk-flex-center">
                            <li><Link to="#"><span className="flaticon-back"></span></Link></li>
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li className="uk-active"><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#"><span className="flaticon-right"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
            </React.Fragment>
        );
    }
}
 
export default Blog;