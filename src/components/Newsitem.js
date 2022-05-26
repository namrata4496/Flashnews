import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div >
        <div className="card my-3" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>
    {source}</span>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
    <a href={newsUrl} target = {"_blank"} rel="noreferrer"  className="btn btn-sm btn-dark">read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
