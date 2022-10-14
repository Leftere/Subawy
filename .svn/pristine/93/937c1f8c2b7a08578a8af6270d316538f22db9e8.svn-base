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
  'mediterranean_wraps_steak_price',
  'mediterranean_wraps_rsc_price'
])
class EndingFrameComponent extends Component {
  render() {
    return (
      <div className='med-wraps-ending-frame'>
        <img src={endingFrame} />

        <div className='ending-price med-wraps-price1'>
          ${this.props.mediterranean_wraps_steak_price}
        </div>

        <div className='ending-price med-wraps-price2'>
          ${this.props.mediterranean_wraps_rsc_price}
        </div>

      </div>
    )
  }
}


export default class MediterraneanWraps extends Component {  
  render() {
    return (
      <PromoBase
        {...this.props}
        backgroundColor={'#8b4098'}
        textColor={'#ffffff'}

        frame1Text={'Crumbly Feta cheese'}
        frame2Text={'Creamy Tzatziki sauce'}
        frame3Text={`
          Double <br/>
          the meat
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


