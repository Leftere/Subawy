import { Component } from 'react'

import image from './background.jpg'


export default class CateringHalf extends Component {
  render() {
    return (
      <div className='c-Footer'>
        <div
          className='c-Footer_background'
          style={{ background: `url(${image})` }}
        />
      </div>
    )
  }
}
