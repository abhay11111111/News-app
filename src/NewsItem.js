import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, Imurl, newsUrl, author, date } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!Imurl ? "https://s.abcnews.com/images/Politics/president-trump-epa-jef-181022_hpMain_16x9_992.jpg" : Imurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="badge badge-secondary">New</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"> By {!author ? "Unknown" : author} on {date} </small></p>
            <a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-outline-info"><b>Read More</b></a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
