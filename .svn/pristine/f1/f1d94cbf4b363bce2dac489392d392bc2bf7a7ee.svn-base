import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
'sw_chicken_club_price_6in',
'sw_chicken_club_price_12in',
'steak_club_price_6in',
'steak_club_price_12in',
'american_club_price_6in',
'american_club_price_12in'
])
export default class ClubCollectionFooterW4 extends Component {
  render() {
    return (
      <div className='c-Footer c-ClubCollectionFooterW4'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />

        <p className="item-price price-chicken-six">${this.props.sw_chicken_club_price_6in}</p>
        <p className="item-price price-chicken-twe">${this.props.sw_chicken_club_price_12in}</p>

        <p className="item-price price-club-six">${this.props.steak_club_price_6in}</p>
        <p className="item-price price-club-twe">${this.props.steak_club_price_12in}</p>

        <p className="item-price price-american-six">${this.props.american_club_price_6in}</p>
        <p className="item-price price-american-twe">${this.props.american_club_price_12in}</p>

      </div>
    )
  }
}
