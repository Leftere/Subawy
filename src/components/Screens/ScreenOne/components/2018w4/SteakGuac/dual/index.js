import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame3 from '../images/frame3.png'
import frame5 from '../images/frame5.png'
import frame8 from '../images/frame8.png'

import text1 from '../images/f1_text.png'
import text2 from '../images/f2_text.png'
import text4 from '../images/f4_text.png'
import text6 from '../images/f6_text.png'
import text7 from '../images/f7_text_alt.png'

import footer7 from '../images/f7_footer.png'

import copyright from '../images/copyright.png'

import './styles.css'

const FADE_IN_TIME = 0.3
const DELAY_TIME = 0.5

@neocastDataProvider([
  'sweet_n_smoky_steak_and_guac_wrap_price',
])
export default class SteakGuacPromoDual extends Component {

  componentDidMount() {
    new TimelineMax()

      // init/frame 1
      .set(this.frame1, { autoAlpha: 1 })
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame5, { autoAlpha: 0 })
      .set(this.frame7, { autoAlpha: 0 })

      // frame 2
      .to(this.frame1, FADE_IN_TIME, { autoAlpha: 0, delay: 3 })
      .to(this.frame2, FADE_IN_TIME, { autoAlpha: 1 }, "-=" + DELAY_TIME)

      // frame 3
      .to(this.frame2, FADE_IN_TIME, { autoAlpha: 0, delay: 3 })
      .to(this.frame3, FADE_IN_TIME, { autoAlpha: 1 }, "-=" + DELAY_TIME)

      // frame 5
      .to(this.frame3, FADE_IN_TIME, { autoAlpha: 0, delay: 3 })
      .to(this.frame5, FADE_IN_TIME, { autoAlpha: 1 }, "-=" + DELAY_TIME)

      // frame 7
      .to(this.frame5, FADE_IN_TIME, { autoAlpha: 0, delay: 3 })
      .to(this.frame7, FADE_IN_TIME, { autoAlpha: 1 }, "-=" + DELAY_TIME)

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion-2018w4-SteakGuacPromo'>
        <div className="frame frame1" ref={(node) => this.frame1 = node}>
          <img className="text1" src={text1}/>
        </div>
        <div className="frame frame2" ref={(node) => this.frame2 = node}>
          <img className="text2" src={text2}/>
        </div>
        <div className="frame" ref={(node) => this.frame3 = node}>
          <img src={frame3}/>
          <img className="text4" src={text4}/>
        </div>
        <div className="frame" ref={(node) => this.frame5 = node}>
          <img src={frame5}/>
          <img className="text6" src={text6}/>
        </div>
        <div className="frame" ref={(node) => this.frame7 = node}>
          <img src={frame8}/>
          <div>
            <img className="text7" src={text7}/>
            <p className="price7">${this.props.sweet_n_smoky_steak_and_guac_wrap_price}</p>
            <p className="calories7">600 cal</p>
            <img className="footer7" src={footer7}/>
          </div>
          <img className="copyright" src={copyright}/>
        </div>
      </div>
    )
  }
}
