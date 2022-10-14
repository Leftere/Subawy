import { Component } from 'react'

import API from 'api'

/**
 * All 2017 LMDP promos follow the same pattern, so use this component as a basis for all of them,
 * and configure them individually here.
 */
import PromoBase from './PromoBase'

// Assets
import frame1 from './frame1.jpg'
import frame2 from './frame2.jpg'
import endingFrameVitamin from './endingFrame.jpg'
import endingFrameCup from './endingFrame-cup.jpg'


import './styles.css'

let endingFrameImage = endingFrameCup

if (API.loc('serves_coca_cola')) {
  endingFrameImage = endingFrameVitamin
}

class EndingFrameComponent extends Component {
  render() {
    return (
      <div className='rot-chik-ending-frame'>
        <img src={endingFrameImage} />
      </div>
    )
  }
}


export default class RotisserieChicken2017w8 extends Component {
  render() {
    return (
      <PromoBase
        {...this.props}

        backgroundColor={'#8cc63f'}
        textColor={'#ffffff'}

        frame1Text={`
          <div style="font-size: 95px">
            100%<br/>
            white meat<br/>
            chicken<br/>
            <div class='with-seasoning-marinade'>
              with seasoning & marinade
            </div>
          </div>
        `}
        frame2Text={'No artificial preservatives'}
        frame3Text={'Hand-pulled perfection'}

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


