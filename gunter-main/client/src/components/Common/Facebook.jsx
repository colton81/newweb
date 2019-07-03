import React, { Component } from "react";
import { FacebookProvider, Page, EmbeddedPost } from "react-facebook";

export default class Facebook extends Component {
  render() {
    return (
      <section>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3"></script>
      <div
            class="fb-page"
            data-href="https://www.facebook.com/facebook"
            data-tabs="timeline"
            data-width=""
            data-height=""
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/facebook"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/facebook">Facebook</a>
            </blockquote>
          </div>
        <FacebookProvider appId="123456789">
          
          <Page
            href="https://www.facebook.com/houstonprocessanddesign/"
            tabs="timeline"
          />
          <EmbeddedPost href="http://www.facebook.com" width="500" />
        </FacebookProvider>
      </section>
    );
  }
}
