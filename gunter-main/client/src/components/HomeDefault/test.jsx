import React, { Component } from "react";
import Parallax from "parallax-js";
class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scene = React.createRef();
  }

  componentDidUpdate() {
    if (this.scene) {
      var childNodes = this.scene.current.childNodes;
      var i;
      for (i = 0; i < childNodes.length; i++) {
        this.parallax = new Parallax(childNodes[i]);
      }
    } else {
      return null;
    }
  }
  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    if (!this.state.pageData) return null;
    const posts = this.state.pageData.map((post, index) => {
      return (
        <div
          key={index}
          className="post diary-post"
          data-relative-input="true"
          data-hover-only="true"
          data-clip-relative-input="true">
          <div className="diary-post__background" data-depth="0.4">
            <figure
              data-depth="0.6"
              className="diary-post__image"
              style={{
                backgroundImage: `url(${
                  post._embedded["wp:featuredmedia"][0].media_details.sizes
                    .medium.source_url
                })`
              }}
            />
          </div>
          <h2 className="diary-post__title" data-depth="0.4">
            {post.title.rendered}
          </h2>
          <h6 className="diary-post__date">{post.date}</h6>
        </div>
      );
    });
    return (
      <main ref={this.scene} className="page page-diary">
        {posts}
      </main>
    );
  }
}
export default Diary;