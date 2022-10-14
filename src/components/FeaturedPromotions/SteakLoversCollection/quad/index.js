import { Component } from 'react'
import PropTypes from 'prop-types'

import API from 'api'

import './styles.css'

import delayedRender from 'components/common/delayedRender'

import introducing from './images/introducing.png'
import steakSub from './images/steaksub1.png'
import steakLoversCollectionTitle from './images/steakLoversCollectionTitle.png'

import otherSub2 from './images/otherSub2.png'
import otherSub1 from './images/otherSub1.png'

import finalCal from './images/finalCal.png'
import lto from './images/lto.png'
import price from './images/pricePoint.png'
import priceLower from './images/pricePoint599.png'

import legal from './images/legal.png'
import pricePoint499 from './images/pricePoint499.png'


@delayedRender()
export default class SteakLoversCollection extends Component {
  static propTypes = {
    isLowerPrice: PropTypes.bool
  }

  render() {
    const { isLowerPrice } = this.props;

    return (
      <div className='c-Promotion steakLoversFeatured'>

        <img src={introducing} className='introducing' />
        <img src={steakSub} className='mainSteakSub' />

        <div className='titleContainer'>
          <img src={steakLoversCollectionTitle} className='collectionTitle' />
        </div>

        <img src={otherSub2} className='otherSub2' />
        <img src={otherSub1} className='otherSub1' />
        <img src={finalCal} className='finalCal' />

        <img
          src={
            isLowerPrice
              ? priceLower
              : price
            }
          className='price'
        />

        <img src={lto} className='lto' />

        <img src={legal} className='legal' />
        <img src={pricePoint499} className='pricePoint499' />

      </div>
    )
  }
}
