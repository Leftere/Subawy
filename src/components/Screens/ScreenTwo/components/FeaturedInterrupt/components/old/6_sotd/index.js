import { Component } from 'react'

import image from './background.jpg'


export default class SubOfTheDay extends Component {
  render() {
    return (
      <div className='c-Promotion'>
        <img className='c-Promotion_background' src={image} />
      </div>
    )
  }
}
