import React, { Component } from "react";
import PropTypes from "prop-types";
export class NewsItem extends Component {
  static defaultProps = {
    Title: "News Title",
  };
  static propTypes = {
    Title: PropTypes.string,
    Description: PropTypes.string,
    ImageURL: PropTypes.string,
    NewsURL: PropTypes.string,
    COLOR: PropTypes.string,
    Bg_Color: PropTypes.string,
  };
  render() {
    let { Title, Description, ImageURL, NewsURL, COLOR, Bg_Color } = this.props;
    return (
      <>
        <div className="NewsItem">
          <div
            style={{ color: COLOR, backgroundColor: Bg_Color }}
            className="card "
          >
            <img src={ImageURL} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{Title}</h5>
              <p className="card-text">{Description}.</p>
              <a
                href={NewsURL}
                rel="noreferrer"
                target="_blank"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
