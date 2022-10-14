import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'ucgb_price_6in',
  'ucgb_price_12in',
])
export default class UCGBFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-UCGB_footer'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.ucgb_price_6in}</p>
        <p className="item-price price-2">${this.props.ucgb_price_12in}</p>
      </div>
    )
  }
}
