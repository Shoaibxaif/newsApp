import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {

    const { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2023/04/morning-scan-8-770x431.jpg" :imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blank"   rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;


