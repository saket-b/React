import React, { Component } from 'react'
import spinner from "./__Iphone-spinner-1.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src = {spinner} alt="loading" />
      </div>
    )
  }
}
