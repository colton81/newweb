import React from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import BannerVid from '../../assets/images/banner1.mp4'
import './Typed.css';
import Typewriter1 from "../Common/typewritter";
import AnchorLink from 'react-anchor-link-smooth-scroll'



class Banner extends React.Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };
  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }
  render() {
    return (
      <div id="home" className="uk-banner uk-dark main-banner item-bg2">
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            z_index: "1",
            background: "black",
            opacity: "0.5"
          }}
        >
          <video
            style={{
              position: "absolute",
              min_width: "100%",
              min_height: "100%",
              width: "100%",
              height: "auto",
              z_index: "0"
            }}
            playsInline="playsInline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src={BannerVid}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="uk-container">
              <div className="main-banner-content">
                <h1>
                  Houston
                  <br />
                  Process And
                  <br />
                  Design
                </h1>
                <h3>
                <Typewriter1 heading={'We Are Your Experts In'}
    dataText={[  
      'Filter Housings      ', 
      'Custom Pressure Vessels     ',
      'Process Skids     ',
      'Swing Bolt Closures     ',
      
    ]}  />
                </h3>
                
               
               
                <Link to="/contact" href="#contact" className="uk-button uk-button-default">
                  Request A Quote
                </Link>
                
                

                {/* Youtube Pop Up Player */}

                {/* <Link
                  onClick={e => {
                    e.preventDefault();
                    this.openModal();
                  }}
                  to="#"
                  className="video-btn popup-youtube"
                >
                  <span uk-icon="play" /> Watch Video
                </Link> 

                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="bk7McNUjWgw"
                  onClose={() => this.setState({ isOpen: false })}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
