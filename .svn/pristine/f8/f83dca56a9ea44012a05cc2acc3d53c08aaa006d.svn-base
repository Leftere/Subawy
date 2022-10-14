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
  'mediterranean_rsc_price_6in',
  'mediterranean_rsc_price_12in',
  'mediterranean_salad_price',
  'mediterranean_steak_price_6in',
  'mediterranean_steak_price_12in'
])
class EndingFrameComponent extends Component {
  render() {
    return (
      <div className='med-ending-frame'>
        <img src={endingFrame} />

        <div className='ending-price med-price1-6'>
          ${this.props.mediterranean_rsc_price_6in}
        </div>

        <div className='ending-price med-price1-12'>
          ${this.props.mediterranean_rsc_price_12in}
        </div>

        <div className='ending-price med-price-salad'>
          ${this.props.mediterranean_salad_price}
        </div>

        <div className='ending-price med-price2-6'>
          ${this.props.mediterranean_steak_price_6in}
        </div>

        <div className='ending-price med-price2-12'>
          ${this.props.mediterranean_steak_price_12in}
        </div>

      </div>
    )
  }
}


export default class MediterraneanCollection extends Component {  
  render() {
    return (
      <PromoBase
        {...this.props}
        backgroundColor={'#3bbce9'}
        textColor={'#ffffff'}

        frame1Text={'Crumbly Feta cheese'}
        frame2Text={`
          Creamy<br/>
          Tzatziki sauce
        `}
        frame3Text={'Authentic Greek flavor'}
        
        panClass={'panBottomLeft'}

        imageFrames={[
          <img src={frame1} className='promo-img-frame' />,
          <img src={frame3} className='promo-img-frame' />,
          <EndingFrameComponent />
        ]}
      />
    )
  }
}


