import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>New Monkey HeadLines</h2>
        <div className="row">
            <div className="col-md-4">
                <NewsItems title = "Cricket News" description = "cricket is interesting"/>
            </div>
            <div className="col-md-4">
                <NewsItems title = "Cricket News" description = "cricket is interesting"/>
            </div>
            <div className="col-md-4">
                <NewsItems title = "Cricket News" description = "cricket is interesting"/>
            </div>
        
        </div>
        
      </div>
    )
  }
}
