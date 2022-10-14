import { Component } from 'react'

import image from './background.jpg'


export default class Panini2016w8 extends Component {
  render() {
    return (
      <div className='c-Footer'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
      </div>
    )
  }
}
