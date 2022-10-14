import { Component } from 'react'

import image from './background.jpg'


export default class Panini2017w2 extends Component {
  render() {
    return (
      <div className='c-Footer'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
      </div>
    )
  }
}
