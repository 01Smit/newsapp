import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className=" my-3">
      <div className="card">
        <span className="position-absolute top-0 end-0 translate-middle-y badge rounded-pill bg-danger" style={{zIndex: '1' }}>{source.name}</span>
        <img src={!imageUrl? 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637': imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text"><small className="text-body-secondary">By {!author? 'Unkown':author} on {new Date(date).toGMTString()}.</small></p>
          <a rel="noreferrer" href={newsUrl} target={"_blank"} className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default NewsItem;
