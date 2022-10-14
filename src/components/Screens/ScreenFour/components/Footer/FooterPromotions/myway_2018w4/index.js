import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

export default class MyWayFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-MyWayFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
      </div>
    )
  }
}
