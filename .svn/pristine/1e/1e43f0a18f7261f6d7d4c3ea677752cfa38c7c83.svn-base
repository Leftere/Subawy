import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'turkey_provolone_price',
])
export default class KingsHawaiianFooterW4 extends Component {
  render() {
    return (
      <div className='c-Footer c-KingsHawaiianFooterW4'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.turkey_provolone_price}</p>
      </div>
    )
  }
}
