import React from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Typed from 'react-typed';

class Banner extends React.Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div id="home" className="uk-banner uk-dark main-banner item-bg2">
        <div
          class="overlay"
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
            playsinline="playsInline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
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
                <Typed
                  strings={["Here you can find anything"]}
                  typeSpeed={40}
                />
                <br />

                <Typed
                  strings={[
                    "Filter Housings.",
                    "Process Skids.",
                    "Custom ASME Designs.",
                    "Custom Pressure Vessels."
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  attr="placeholder"
                  loop
                >
                  <input type="text" />
                </Typed>
                <Link to="#" className="uk-button uk-button-default">
                  Get Started
                </Link>

                <Link
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
