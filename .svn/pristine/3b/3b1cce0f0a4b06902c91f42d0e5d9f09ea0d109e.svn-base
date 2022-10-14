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
  'the_cuban_price_6in',
  'the_cuban_price_12in'
])
class EndingFrameComponent extends Component {
  render() {
    return (
      <div className='cuban-ending-frame'>
        <img src={endingFrame} />

        <div className='ending-price cuban-price6'>
          ${this.props.the_cuban_price_6in}
        </div>

        <div className='ending-price cuban-price12'>
          ${this.props.the_cuban_price_12in}
        </div>

      </div>
    )
  }
}


export default class Cuban extends Component {  
  render() {
    return (
      <PromoBase
        {...this.props}

        frame1Text={`
          Pork<br/>
          carnitas and<br/>
          <div class='bf-ham-text'>
            Black Forest Ham
          </div>
        `}
        frame2Text={`House-made pickles`}
        frame3Text={`
          On new<br/>
          hoagie bread
        `}

        changeImageAtIndex={2}
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


