import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
import blogImg from '../../assets/images/blog-details.jpg';
import clientOne from '../../assets/images/client1.png';
import clientTwo from '../../assets/images/client2.png';
import clientThree from '../../assets/images/client3.png';
import blogOne from '../../assets/images/blog1.jpg';
import blogTwo from '../../assets/images/blog2.jpg';
import blogThree from '../../assets/images/blog3.jpg';
 
class BlogDetails extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <React.Fragment>
                {/*  Start Page Title Area */}
                <section className="page-title-area uk-page-title">
                    <div className="uk-container">
                        <h1>Blog Details</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/*  Start Blog Details Area */}
                <section className="blog-details-area uk-blog-details uk-section">
                    <div className="uk-container">
                        <article className="uk-article blog-details">
                            <div className="uk-grid uk-flex">
                                <div className="inner uk-width-expand">
                                    <div className="article-img">
                                        <img src={blogImg} alt="blog-details" />
                                        <div className="date">20 <br /> Mar</div>
                                    </div>

                                    <div className="article-content">
                                        <ul className="category">
                                            <li><Link to="#">IT</Link></li>
                                            <li><Link to="#">Mobile</Link></li>
                                            <li><Link to="#">Marketing</Link></li>
                                            <li><Link to="#">Design</Link></li>
                                            <li><Link to="#">Development</Link></li>
                                        </ul>
                                            
                                        <h3>The 13 Best Time Tracking Apps of 2019</h3>
                                        
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore Link repellendus debitis explicabo quisquam obcaecati....</p>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <blockquote className="blockquote">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                        </blockquote>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                    </div>

                                    <div className="post-controls-buttons uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                                        <div className="item">
                                            <Link to="#" className="uk-button uk-button-default">Prev Post</Link>
                                        </div>

                                        <div className="item uk-text-right">
                                            <Link to="#" className="uk-button uk-button-default">Next Post</Link>
                                        </div>
                                    </div>

                                    <div id="comments" className="comments-area">
                                        <h2 className="comments-title">3 Comments</h2>

                                        <ol className="comment-list">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientOne} alt="client" className="avatar" />
                                                            <b className="fn">John Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                March 28, 2019 at 7:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={clientTwo} alt="client" className="avatar" />
                                                                    <b className="fn">John Smith</b>
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    <Link to="#">
                                                                        March 28, 2019 at 7:16 am
                                                                    </Link>
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                            </div>

                                                            <div className="reply">
                                                                <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </li>

                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientThree} alt="client" className="avatar" />
                                                            <b className="fn">John Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                March 28, 2019 at 7:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>
                                            </li>
                                        </ol>

                                        <div id="respond" className="comment-respond">
                                            <h3 className="comment-reply-title">Leave Link Reply</h3>

                                            <form id="commentform" className="comment-form" onSubmit={this.onFormSubmit}>
                                                <p className="comment-notes">Your email address will not be published.</p>
                                                
                                                <p className="comment-form-comment">
                                                    <textarea id="comment" placeholder="Comment" cols="45" rows="5" />
                                                </p>
                                                <p className="comment-form-author">
                                                    <input id="author" placeholder="Name" type="text" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <input id="email" placeholder="Email"  type="text" />
                                                </p>
                                                <p className="comment-form-url">
                                                    <input id="url" placeholder="Website" type="text" />
                                                </p>
                                                <p className="form-submit">
                                                    <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="uk-sidebar uk-width-1-5">
                                    <div className="widget widget_search">
                                        <form>
                                            <input type="text" className="uk-input" placeholder="Search here..." />
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                    
                                    <div className="widget widget_categories">
                                        <h3 className="widget-title">Categories</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">AJAX</Link></li>
                                            <li><Link to="#">Apache</Link></li>
                                            <li><Link to="#">CSS</Link></li>
                                            <li><Link to="#">PHP</Link></li>
                                            <li><Link to="#">Django</Link></li>
                                            <li><Link to="#">Error</Link></li>
                                            <li><Link to="#">IIS</Link></li>
                                            <li><Link to="#">JavaScript</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_recent_entries">
                                        <h3 className="widget-title">Recent Posts</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <img src={blogOne} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">The Most Popular New top Business Apps</Link></h5>
                                                <p className="date">21 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogTwo} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">3 WooCommerce Plugins to Boost Sales</Link></h5>
                                                <p className="date">20 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogThree} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">The Best Marketing top Management Tools</Link></h5>
                                                <p className="date">27 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogOne} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">How to Build Link Business Dashboard</Link></h5>
                                                <p className="date">27 January, 2019</p>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_tag_cloud">
                                        <h3 className="widget-title">Tags</h3>
                                        <div className="bar"></div>

                                        <div className="tagcloud">
                                            <Link to="#">Error</Link>
                                            <Link to="#">Cake Bake</Link>
                                            <Link to="#">Dromzone</Link>
                                            <Link to="#">File</Link>
                                            <Link to="#">Yii</Link>
                                            <Link to="#">Yii2</Link>
                                            <Link to="#">UUID</Link>
                                            <Link to="#">Setup</Link>
                                            <Link to="#">Error</Link>
                                            <Link to="#">Cake Bake</Link>
                                            <Link to="#">Dromzone</Link>
                                            <Link to="#">File</Link>
                                            <Link to="#">Yii</Link>
                                            <Link to="#">Yii2</Link>
                                            <Link to="#">UUID</Link>
                                            <Link to="#">Setup</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="widget widget_archive">
                                        <h3 className="widget-title">Archives</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">December 2018</Link></li>
                                            <li><Link to="#">January 2019</Link></li>
                                            <li><Link to="#">February 2019</Link></li>
                                            <li><Link to="#">March 2019</Link></li>
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
 
export default BlogDetails;