import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame1 from '../images/dual_1.png'
import frame2 from '../images/dual_2.png'
import frame3 from '../images/dual_3.png'
import frame4 from '../images/dual_4.png'
import frame5 from '../images/dual_5.png'
/*import frame6 from '../images/dual_6.png'*/

import F7Doodle from '../images/f7_doodle.png'
import F7Label from '../images/f7_label.png'
import F7Legal from '../images/f7_legal.png'
import F7Logo from '../images/f7_logo.png'
import F7Subs from '../images/f7_subs.png'

import './styles.css'

const FADE_IN_TIME  = 0.5


@neocastDataProvider([
  'autumn_carved_price_6in',
  'autumn_carved_price_12in'
])
export default class FreshFitPromoQuad extends Component {
  
componentDidMount() {
    new TimelineMax({ delay: 0.5 })

      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 1,x:1920})
      .set(this.frame3, { opacity: 1,x:1920 })
      .set(this.frame4, { opacity: 1,x:1920 })
      .set(this.frame5, { opacity: 1,x:1920 })

      .set(this.F7Doodle, { opacity: 0,y:"-200" })
      .set(this.F7Label, { opacity: 0,x:465, y:920 })
      .set(this.F7Legal, { opacity: 0,x:100, y:1111 })
      .set(this.F7Logo, { opacity: 0,x:530 , y:600})
      .set(this.F7Subs, { opacity: 0,x:0,y:"-1080" })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3, x:"-1000"  })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1, x:0 }, "-=" + FADE_IN_TIME)

      .to(this.frame2, FADE_IN_TIME, { opacity: 1, x:0  }, "-=" + FADE_IN_TIME)

      .to(this.frame2, FADE_IN_TIME, { opacity: 1, delay: 3, x:"-1920"  })
      .to(this.frame3, FADE_IN_TIME, { opacity: 1, x:0}, "-=" + FADE_IN_TIME)

      .to(this.frame3, FADE_IN_TIME, { opacity: 0, delay: 3, x:"-1920" })
      .to(this.frame4, FADE_IN_TIME, { opacity: 1, x:0  }, "-=" + FADE_IN_TIME)

      .to(this.frame4, FADE_IN_TIME, { opacity: 0, delay: 3, x:"-1920" })
      .to(this.frame5, FADE_IN_TIME, { opacity: 1, x:0 }, "-=" + FADE_IN_TIME)

      .to(this.frame5, FADE_IN_TIME, { opacity: 0, delay: 3, x:"-1920"  })

      .to(this.F7Doodle, FADE_IN_TIME, { opacity: 1, y:0 }, "-=" + FADE_IN_TIME)
      .to(this.F7Subs, FADE_IN_TIME, { opacity: 1, y:0 }, "-=" + FADE_IN_TIME)
      .to(this.F7Logo, FADE_IN_TIME, { opacity: 1, x:530, y:200}, "-=" + FADE_IN_TIME)
      .to(this.F7Label, FADE_IN_TIME, { opacity: 1 }, "-=" + FADE_IN_TIME)
      .to(this.F7Legal, FADE_IN_TIME, { opacity: 1 , y:1060}, "-=" + FADE_IN_TIME)

  }


  render() {
    return (
      <div className='c-Promotion-2018w1-FreshFit'>

        <img className='freshFrame frame1' src={frame1} ref={(node) => this.frame1 = node} />
        <img className='freshFrame frame2' src={frame2} ref={(node) => this.frame2 = node} />
        <img className='freshFrame frame3' src={frame3} ref={(node) => this.frame3 = node} />
        <img className='freshFrame frame4' src={frame4} ref={(node) => this.frame4 = node} />
        <img className='freshFrame frame5' src={frame5} ref={(node) => this.frame5 = node} />

        <img src={F7Doodle} className='f7 F7Doodle' ref={(node) => this.F7Doodle = node } />
        <img src={F7Label} className='f7 F7Label' ref={(node) => this.F7Label = node } />
        <img src={F7Legal} className='f7 F7Legal' ref={(node) => this.F7Legal = node } />
        <img src={F7Logo} className='f7 F7Logo' ref={(node) => this.F7Logo = node } />
        <img src={F7Subs} className='f7 F7Subs' ref={(node) => this.F7Subs = node } />

      </div>
    )
  }
}
