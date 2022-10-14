import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.jpg'
import './styles.css'

@neocastDataProvider([
  'corned_beef_price_6in',
  'corned_beef_price_12in'
])
export default class ReubenFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-ReubenFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />

        <p className="item-price six-price">${this.props.corned_beef_price_6in}</p>
        <p className="item-price twelve-price">${this.props.corned_beef_price_12in}</p>
      </div>
    )
  }
}
