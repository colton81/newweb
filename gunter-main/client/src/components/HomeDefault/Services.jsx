import React from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import ImgHolder from '../../assets/images/thumb-480-700.jpg'
import './swiper.css';


class Services extends React.Component {
  render() {
    const params = {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };
  
    return (
      <section
        id="services"
        className="services-area uk-dark uk-services uk-section"
      >
        <Swiper {...params}>
          <div className="swipers-slide">
              <div className="img-holder">
              <img src={ImgHolder} alt=""/>
              <div className="main-img">
              
              </div>
              </div>
              
          </div>
          <div className="swipers-slide">
              <div className="img-holder">
              <img src={ImgHolder} alt=""/>
              <div className="main-img">
              
              </div>
              </div>
              
          </div>
          <div className="swipers-slide">
              <div className="img-holder">
              <img src={ImgHolder} alt=""/>
              <div className="main-img">
              
              </div>
              </div>
              
          </div>
          <div className="swipers-slide">
              <div className="img-holder">
              <img src={ImgHolder} alt=""/>
              <div className="main-img">
              
              </div>
              </div>
              
          </div>
          <div className="swipers-slide">
              <div className="img-holder">
              <img src={ImgHolder} alt=""/>
              <div className="main-img">
              
              </div>
              </div>
              
          </div>
        </Swiper>

       {/*  <div className="uk-container">
          <div className="uk-section-title section-title">
            <span>What We Do</span>
            <h2>Our Services</h2>
            <div className="bar" />
          </div>

          <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
            <div className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-plan" />
                </div>
                <h3>Digital Branding</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>

            <div className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-think" />
                </div>
                <h3>Creative Solutions</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>

            <div className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-shout" />
                </div>
                <h3>Marketing Solutions</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>

            <div className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-analytics-1" />
                </div>
                <h3>Business Analytics</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>

            <div className="item">
              <div className="single-services active">
                <div className="icon">
                  <i className="flaticon-ux-design" />
                </div>
                <h3>UX & UI Design</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>

            <div className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-camera" />
                </div>
                <h3>Photography</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>

            <div className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-project" />
                </div>
                <h3>Management</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>

            <div className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-chat" />
                </div>
                <h3>Social Media</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>

            <div className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-data" />
                </div>
                <h3>Data Science</h3>

                <i className="flaticon-right link-btn" />

                <Link to="#" className="link uk-position-cover" />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Services;
