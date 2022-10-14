import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame1 from './frame1.jpg'
import frame2 from './frame2.jpg'
import frame3 from './frame3.jpg'
import frame4 from './frame4.jpg'
import endFrame from './endingFrame.jpg'

import './styles.css'

const FADE_IN_TIME  = 1


@neocastDataProvider([
  'autumn_carved_price_6in',
  'autumn_carved_price_12in'
])
export default class AutumnCarved2017w7Dual extends Component {
  
componentDidMount() {
    new TimelineMax({ delay: 1 })

      .set(this.startFrame, { opacity: 1 })
      .set(this.frame1, { opacity: 0 })
      .set(this.frame2, { opacity: 0 })
      .set(this.frame3, { opacity: 0 })
      .set(this.frame4, { opacity: 0 })
      .set(this.endFrame, { opacity: 1 })

      .set(this.pricing1, { opacity: 1 })
      .set(this.pricing2, { opacity: 0 })

      .to(this.startFrame, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame1, FADE_IN_TIME, { opacity: 1 })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3 }, 4)
      .to(this.pricing1, FADE_IN_TIME, { opacity: 0, delay: 3 }, 4)
      .to(this.frame2, FADE_IN_TIME, { opacity: 1 })

      .to(this.frame2, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame3, FADE_IN_TIME, { opacity: 1 })

      .to(this.frame3, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame4, FADE_IN_TIME, { opacity: 1 })

      .to(this.frame4, FADE_IN_TIME, { opacity: 0, delay: 2 })
      .to(this.endFrame, FADE_IN_TIME, { opacity: 1, 'z-index': 10 }, 22)
      .to(this.pricing2, FADE_IN_TIME, { opacity: 1 }, 22)
      .to(this.endFrameImg, FADE_IN_TIME, { opacity: 1 }, 22)

  }


  render() {
    return (
      <div className='c-Promotion-w7autumnDual'>

        <div className='turkeyFrame startFrame' ref={(node) => this.startFrame = node} >
          <img className='startFrame' src={endFrame} />

          <div className='prepricing' ref={(node) => this.pricing1 = node}>
            <div className='price price-six'>${this.props.autumn_carved_price_6in}</div>
            <div className='price price-foot'>${this.props.autumn_carved_price_12in}</div>
          </div>

        </div>

        <img className='turkeyFrame frame1' src={frame1} ref={(node) => this.frame1 = node} />
        <img className='turkeyFrame frame2' src={frame2} ref={(node) => this.frame2 = node} />
        <img className='turkeyFrame frame3' src={frame3} ref={(node) => this.frame3 = node} />
        <img className='turkeyFrame frame4' src={frame4} ref={(node) => this.frame4 = node} />


        <div className='turkeyFrame endFrame' ref={(node) => this.endFrame = node} >
          <img className='endFrame' src={endFrame} ref={(node) => this.endFrameImg = node} />

          <div className='prepricing' ref={(node) => this.pricing2 = node}>
            <div className='subprice'>
              <div className='price price-six'>${this.props.autumn_carved_price_6in}</div>
              <div className='price price-foot'>${this.props.autumn_carved_price_12in}</div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
