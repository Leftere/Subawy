import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './BG.jpg'
import './styles.css'


@neocastDataProvider([
  'cauliflower_ranch_price',
])

export default class CauliflowerCurryFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-CauliflowerRanchFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">${this.props.cauliflower_ranch_price}<span className="cal">790 cal</span></p>
      </div>
    )
  }
}
