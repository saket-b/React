import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let {tittle, description} = this.props;
    return (
      <div >
          <div className="card" style={{width: "18rem"}}>
              <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/artemis_ii_graphics.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div> 
      </div>
    )
  }
}
