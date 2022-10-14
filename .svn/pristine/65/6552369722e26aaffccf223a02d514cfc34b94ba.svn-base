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
  'big_hot_pastrami_melt_price_6in',
  'big_hot_pastrami_melt_price_12in'
])
class EndingFrameComponent extends Component {
  render() {
    return (
      <div className='pastrami-ending-frame'>
        <img src={endingFrame} />

        <div className='ending-price pastrami-price6'>
          ${this.props.big_hot_pastrami_melt_price_6in}
        </div>

        <div className='ending-price pastrami-price12'>
          ${this.props.big_hot_pastrami_melt_price_12in}
        </div>

      </div>
    )
  }
}


export default class Pastrami extends Component {
  render() {
    return (
      <PromoBase
        {...this.props}

        frame1Text={'Pastrami piled high'}
        frame2Text={`
          Toasted with<br/>
          <div class='pastrami-frame2-text'>
            American cheese
          </div>`}
        frame3Text={`
          On our new<br/>
          rye bread
        `}


        panClass={'panBottomLeft'}

        imageFrames={[
          <img src={frame1} className='promo-img-frame' />,
          <img src={frame2} className='promo-img-frame' />,
          <EndingFrameComponent />
        ]}
      />
    )
  }
}


