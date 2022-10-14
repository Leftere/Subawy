import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'


export default class ChilesOnionsW6 extends Component {
  render() {
    return (
      <div className='c-Footer'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
      </div>
    )
  }
}
