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
  'cubano_price_6in',
  'cubano_price_12in'
])
class EndingFrameComponent extends Component {
  render() {
    return (
      <div className='cubano-ending-frame'>
        <img src={endingFrame} />

        <div className='ending-price cubano-price6'>
          ${this.props.cubano_price_6in}
        </div>

        <div className='ending-price cubano-price12'>
          ${this.props.cubano_price_12in}
        </div>

      </div>
    )
  }
}


export default class Cubano extends Component {  
  render() {
    return (
      <PromoBase
        {...this.props}

        frame1Text={`Applewood pulled pork`}
        frame2Text={`
          Black <br/>
          Forest ham
        `}
        frame3Text={`
          Swiss cheese<br/>
          & pickles
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


