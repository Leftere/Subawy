import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

/**
 * All 2017 LMDP promos follow the same pattern, so use this component as a basis for all of them,
 * and configure them individually here.
 */
import PromoBase from '../PromoBase'

// Assets
import frame1 from './frame1.jpg'
import frame2 from './frame2.jpg'
import endingFrame from './endingFrame.jpg'


import './styles.css'


@neocastDataProvider([
  'hickory_rsc_melt_price_6in',
  'hickory_rsc_melt_price_12in',
  'hickory_turkey_bacon_melt_price_6in',
  'hickory_turkey_bacon_melt_price_12in'
])
class EndingFrameComponent extends Component {
  render() {
    return (
      <div className='hickory-ending-frame'>

        <img src={endingFrame} />

        <div className='ending-price hickory-price1-6'>
          ${this.props.hickory_rsc_melt_price_6in}
        </div>

        <div className='ending-price hickory-price1-12'>
          ${this.props.hickory_rsc_melt_price_12in}
        </div>

        <div className='ending-price hickory-price2-6'>
          ${this.props.hickory_turkey_bacon_melt_price_6in}
        </div>

        <div className='ending-price hickory-price2-12'>
          ${this.props.hickory_turkey_bacon_melt_price_12in}
        </div>

      </div>
    )
  }
}


export default class HickoryCollection extends Component {  
  render() {
    return (
      <PromoBase
        {...this.props}
        backgroundColor={'#ff8200'}
        textColor={'#ffffff'}

        frame1Text={`
          Smoky<br/>
          hickory sauce
        `}
        frame2Text={`
          Sweet<br/>
          BBQ finish
        `}
        frame3Text={`
          Toasted<br/>
          to perfection
        `}

        imageFrames={[
          <img src={frame1} className='promo-img-frame' />,
          <img src={frame2} className='promo-img-frame' />,
          <EndingFrameComponent />
        ]}
      />
    )
  }
}


