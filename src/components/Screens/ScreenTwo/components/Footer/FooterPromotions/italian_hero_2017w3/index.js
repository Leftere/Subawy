import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import background from './background.jpg'
import backgroundSodium from './background-sodium.jpg'

import './styles.css'


@neocastDataProvider([
  'italian_hero_price_6in',
  'italian_hero_price_12in'
])
export default class ItalianHero2017w3FooterPromotion extends Component {
  constructor(props) {
    super(props)

    this.hasSodium = API.loc('store_plus_sodium', false)

    if (this.hasSodium) {
      this.image = backgroundSodium
    } else {
      this.image = background
    }
  }

  render() {
    const {
      italian_hero_price_6in,
      italian_hero_price_12in
    } = this.props

    const footerClass = this.hasSodium
      ? 'c-Footer_background-ItalianHero2017w3-sodium'
      : 'c-Footer_background-ItalianHero2017w3'

    return (
      <div className='c-Footer'>
        <div className={`c-Footer_background ${footerClass}`} style={{ background: `url(${this.image})` }}>
          <div className='hero_cb_6in hero_footer-price'>
            ${italian_hero_price_6in}
          </div>

          <div className='hero_12in hero_footer-price'>
            ${italian_hero_price_12in}
          </div>
        </div>
      </div>
    )
  }
}