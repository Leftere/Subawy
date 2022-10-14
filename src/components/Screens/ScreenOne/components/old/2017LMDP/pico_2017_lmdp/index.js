import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

/**
 * All 2017 LMDP promos follow the same pattern, so use this component as a basis for all of them,
 * and configure them individually here.
 */
import PromoBase from '../PromoBase'

// Assets
import frame1 from './frame1.jpg'
import frame3 from './frame3.jpg'
import endingFrame from './endingFrame.jpg'


import './styles.css'


@neocastDataProvider([
  'pico_chicken_price_6in',
  'pico_chicken_price_12in',
  'pico_steak_price_6in',
  'pico_steak_price_12in'
])
class EndingFrameComponent extends Component {
  render() {
    return (
      <div className={`pico-ending-frame ${this.props.player}`}>
        <img src={endingFrame} />

        <div className='ending-price price1_6'>
          ${this.props.pico_chicken_price_6in}
        </div>

        <div className='ending-price price1_12'>
          ${this.props.pico_chicken_price_12in}
        </div>

        <div className='ending-price price2_6'>
          ${this.props.pico_steak_price_6in}
        </div>

        <div className='ending-price price2_12'>
          ${this.props.pico_steak_price_12in}
        </div>

      </div>
    )
  }
}


export default class PicoDeGalloCollection extends Component {  
  render() {
    return (
      <PromoBase
        {...this.props}

        frame1Text={'House-made pico de gallo'}
        frame2Text={'Creamy guacamole'}
        frame3Text={'Melted Monterey cheddar'}

        imageFrames={[
          <img src={frame1} className='promo-img-frame' />,
          <img src={frame3} className='promo-img-frame' />,
          <EndingFrameComponent {...this.props} />
        ]}
      />
    )
  }
}


