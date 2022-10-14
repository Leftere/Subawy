import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'italian_ciabatta_price',
])
export default class ItalianCiabattaFooterW4 extends Component {
  render() {
    return (
      <div className='c-Footer c-ItalianCiabattaFooterW4'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.italian_ciabatta_price}</p>
      </div>
    )
  }
}
