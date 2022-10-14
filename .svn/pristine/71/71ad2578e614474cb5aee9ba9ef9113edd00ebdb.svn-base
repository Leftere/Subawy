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
import text6a from '../images/f6_text_a.png'
import text6b from '../images/f6_text_b.png'
import text6c from '../images/f6_text_c.png'
import text6d from '../images/f6_text_d.png'
import text7 from '../images/f7_text_alt.png'

import footer7 from '../images/f7_footer.png'

import copyright from '../images/copyright.png'

import './styles.css'

@neocastDataProvider([
  'sweet_n_smoky_steak_and_guac_wrap_price',
])
export default class SteakGuacPromoQuad extends Component {

  componentDidMount() {
    new TimelineMax()

       // init/frame 1
       .set(this.frame1, { autoAlpha: 1 })
       .set(this.frame2, { autoAlpha: 0 })
       .set(this.frame3, { autoAlpha: 0 })
       .set(this.text4, { autoAlpha: 0 })
       .set(this.frame5, { autoAlpha: 0 })
       .set(this.text6a, { autoAlpha: 0 })
       .set(this.text6b, { autoAlpha: 0 })
       .set(this.text6c, { autoAlpha: 0 })
       .set(this.text6d, { autoAlpha: 0 })
       .set(this.frame7, { autoAlpha: 0 })

       // frame 2
       .set(this.frame1, { autoAlpha: 0, delay: 3 })
       .set(this.frame2, { autoAlpha: 1 })

       // frame 3
       .set(this.frame2, { autoAlpha: 0, delay: 2 })
       .set(this.frame3, { autoAlpha: 1 })
       .set(this.bg3, { left: -386 })
       .to(this.bg3, 2, { left: -486 })

       // frame 4
       .set(this.text4, { autoAlpha: 1 })

       // frame 5
       .set(this.frame3, { autoAlpha: 0, delay: 2 })
       .set(this.frame5, { autoAlpha: 1 })
       .set(this.bg5, { top: -50 })
       .to(this.bg5, 2, { top: 0 })

       // frame 6
       .set(this.text6a, { autoAlpha: 1 })
       .set(this.text6b, { autoAlpha: 1, delay: 0.5 })
       .set(this.text6c, { autoAlpha: 1, delay: 0.5 })
       .set(this.text6d, { autoAlpha: 1, delay: 0.5 })

       // frame 7
       .set(this.frame5, { autoAlpha: 0, delay: 3 })
       .set(this.frame7, { autoAlpha: 1 })
       .to(this.bg7, 6, { top: -100 })

       // end
       // .set(this.text7, { autoAlpha: 0 })

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
          <img src={frame3} ref={(node) => this.bg3 = node}/>
          <img className="text4" src={text4} ref={(node) => this.text4 = node}/>
        </div>
        <div className="frame" ref={(node) => this.frame5 = node}>
          <img src={frame5} ref={(node) => this.bg5 = node}/>
          <img className="text6" src={text6a} ref={(node) => this.text6a = node}/>
          <img className="text6" src={text6b} ref={(node) => this.text6b = node}/>
          <img className="text6" src={text6c} ref={(node) => this.text6c = node}/>
          <img className="text6" src={text6d} ref={(node) => this.text6d = node}/>
        </div>
        <div className="frame" ref={(node) => this.frame7 = node}>
          <img src={frame8} ref={(node) => this.bg7 = node}/>
          <div ref={(node) => this.text7 = node}>
            <img className="text7" src={text7} ref={(node) => this.text7 = node}/>
            <p className="price7" ref={(node) => this.price7 = node}>${this.props.sweet_n_smoky_steak_and_guac_wrap_price}</p>
            <p className="calories7" ref={(node) => this.calories7 = node}>600 cal</p>
            <img className="footer7" src={footer7}/>
          </div>
          <img className="copyright" src={copyright}/>
        </div>
      </div>
    )
  }
}
