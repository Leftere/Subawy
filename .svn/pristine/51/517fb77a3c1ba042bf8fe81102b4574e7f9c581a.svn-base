import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'little_cheesesteak_price',
  'little_turkey_price',
])
export default class SubwayMinisFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-SubwayMinisFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.little_cheesesteak_price}</p>
        <p className="item-price twe-price">${this.props.little_turkey_price}</p>
      </div>
    )
  }
}
