import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {source}
          </span>
       
          <img
            src={
              !imageUrl
                ? "https://images.moneycontrol.com/static-mcnews/2023/04/morning-scan-8-770x431.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
