import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'sides_cookies_price_1ct'
])
export default class SmoresFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-SmoresFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.sides_cookies_price_1ct}</p>
      </div>
    )
  }
}
