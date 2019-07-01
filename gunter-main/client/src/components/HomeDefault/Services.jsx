import React from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import ImgHolder from "../../assets/images/thumb-480-700.jpg";
import Image1 from "../../assets/images/IMG_0544.jpeg";
import "./swiper.css";

import OwlCarousel from "react-owl-carousel3";
import job911 from "../../assets/images/job911.jpeg";
import "../slideshow/slideshow.css";
import arrow from "../../assets/images/svg/arrow-r.svg";
import "../slideshow/global.css";
import "../slideshow/style.css";

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
        className="elementor-element elementor-element-3a709187 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
        data-id="3a709187"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-element elementor-element-545ad043 elementor-column elementor-col-100 elementor-top-column"
              data-id="545ad043"
              data-element_type="column"
            >
              <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-46bde991 elementor-widget elementor-widget-frel-service-query"
                    data-id="46bde991"
                    data-element_type="widget"
                    data-widget_type="frel-service-query.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="cons_w_wrapper">
                        <div
                          className="fn_cs_service_query"
                          data-column-count="3"
                        >
                          <div className="top_bar">
                            <div className="t_inner">
                              <h3>Our Projects</h3>
                              <span />
                              <div className="owl_control">
                                <div className="fn_prev" />
                                <div className="fn_next" />
                              </div>
                            </div>
                          </div>

                          <div className="service_part">
                            <OwlCarousel
                              className="owl-carousel"
                              loop
                              margin={1}
                              
                            >
                              <div className="item">
                                <div className="img_holder">
                                  <img src={ImgHolder} alt="" />
                                  <div
                                    className="abs_img"
                                    data-bg-img={job911}
                                    style={{
                                      background_image:
                                        "url(../../assets/images/job911.jpeg)"
                                    }}
                                  >
                                    <a href="#" />
                                  </div>
                                </div>
                                <div class="title">
                                  <h3>
                                    <a href="http://industify.frenify.com/1/myservice/aerospace-and-defense/">
                                      Filter Housings
                                    </a>
                                  </h3>
                                </div>
                                <div className="view_more">
                                  <a href="myservice/aerospace-and-defense/">
                                    <span className="text">View More</span>
                                    <span className="arrow">
                                      <img
                                        className="industify_w_fn_svg"
                                        src={arrow}
                                        alt="svg"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="item">
                                <div className="img_holder">
                                  <img src={ImgHolder} alt="" />
                                  <div className="abs_img" data-bg-img={job911}>
                                    <a href="#" />
                                  </div>
                                </div>
                                <div class="title">
                                  <h3>
                                    <a href="http://industify.frenify.com/1/myservice/aerospace-and-defense/">
                                      Custom Vessels
                                    </a>
                                  </h3>
                                </div>
                                <div className="view_more">
                                  <a href="myservice/aerospace-and-defense/">
                                    <span className="text">View More</span>
                                    <span className="arrow">
                                      <img
                                        className="industify_w_fn_svg"
                                        src={arrow}
                                        alt="svg"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="item">
                                <div className="img_holder">
                                  <img src={ImgHolder} alt="" />
                                  <div className="abs_img" data-bg-img={job911}>
                                    <a href="#" />
                                  </div>
                                </div>
                                <div className="view_more">
                                  <a href="myservice/aerospace-and-defense/">
                                    <span className="text">View More</span>
                                    <span className="arrow">
                                      <img
                                        className="industify_w_fn_svg"
                                        src={arrow}
                                        alt="svg"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="item">
                                <div className="img_holder">
                                  <img src={ImgHolder} alt="" />
                                  <div className="abs_img" data-bg-img={job911}>
                                    <a href="#" />
                                  </div>
                                </div>
                                <div className="view_more">
                                  <a href="myservice/aerospace-and-defense/">
                                    <span className="text">View More</span>
                                    <span className="arrow">
                                      <img
                                        className="industify_w_fn_svg"
                                        src={arrow}
                                        alt="svg"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="item">
                                <div className="img_holder">
                                  <img src={ImgHolder} alt="" />
                                  <div className="abs_img" data-bg-img={job911}>
                                    <a href="#" />
                                  </div>
                                </div>
                                <div className="view_more">
                                  <a href="myservice/aerospace-and-defense/">
                                    <span className="text">View More</span>
                                    <span className="arrow">
                                      <img
                                        className="industify_w_fn_svg"
                                        src={arrow}
                                        alt="svg"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="item">
                                <div className="img_holder">
                                  <img src={ImgHolder} alt="" />
                                  <div className="abs_img" data-bg-img={job911}>
                                    <a href="#" />
                                  </div>
                                </div>
                                <div className="view_more">
                                  <a href="myservice/aerospace-and-defense/">
                                    <span className="text">View More</span>
                                    <span className="arrow">
                                      <img
                                        className="industify_w_fn_svg"
                                        src={arrow}
                                        alt="svg"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
