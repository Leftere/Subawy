import { Component } from 'react'

import API from 'api'

import imageAllDay from './background.jpg'
import imageMorning from './background-morning.jpg'


export default class Breakfast2017w2 extends Component {
  constructor(props) {
    super(props)

    if (API.loc('serves_bfast_all_day', false)) {
      this.image = imageAllDay
    } else {
      this.image = imageMorning
    }
  }

  render() {
    return (
      <div className='c-Promotion'>
        <img className='c-Promotion_background' src={this.image} />
      </div>
    )
  }
}
