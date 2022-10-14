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
  'fritos_chicken_enchilada_melt_price_6in',
  'fritos_chicken_enchilada_melt_price_12in'
])
class EndingFrameComponent extends Component {
  render() {
    return (
      <div className='fritos-ench-ending-frame'>
        <img src={endingFrame} />

        <div className='ending-price fritos-ench-price6'>
          ${this.props.fritos_chicken_enchilada_melt_price_6in}
        </div>

        <div className='ending-price fritos-ench-price12'>
          ${this.props.fritos_chicken_enchilada_melt_price_12in}
        </div>

      </div>
    )
  }
}


export default class FritosEnchilada extends Component {
  render() {
    return (
      <PromoBase
        {...this.props}

        backgroundColor={'#8b4098'}
        textColor={'#ffffff'}
        changeImageAtIndex={2}

        frame1Text={'Enchilada seasoned chicken'}
        frame2Text={'Chipotle southwest sauce'}
        frame3Text={`
          Crunchy<br/>
          Fritos <div class='fritos-restricted'>®</div>
        `}

        imageFrames={[
          <img src={frame1} className='promo-img-frame' />,
          <img src={frame3} className='promo-img-frame' />,
          <EndingFrameComponent />
        ]}

      />
    )
  }
}


