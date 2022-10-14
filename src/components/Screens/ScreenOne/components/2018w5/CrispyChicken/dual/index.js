import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

 import frame1 from '../images/frame1.png'

 import bg2 from '../images/bg2.png'
 import text2 from '../images/text2.png'

 import bg3 from '../images/bg3.png'

 import frame4 from '../images/frame4.png'

 import bg5 from '../images/bg5.png'
 import text5 from '../images/text5.png'

 import bg6 from '../images/bg6.png'

 import bg7 from '../images/bg7.png'
 import text7 from '../images/text7.png'

 import text8 from '../images/text8.png'

 import frame9 from '../images/frame9.png'
 import frame10 from '../images/frame10.png'

 import fss1 from '../images/ss1.png'
 import fss2 from '../images/ss2.png'

import './styles.css'

@neocastDataProvider([
  'homestyle_crispy_chicken_price_6in',
  'homestyle_crispy_chicken_price_12in',
  'fresh_fit_crispy_chicken_price_6in',
  'fresh_fit_crispy_chicken_price_12in'
])
export default class CrispyChickenPromoQuad extends Component {

componentDidMount() {
    var beatLength = 1.5
    new TimelineMax()

      // reset/frame 1
      .set(this.frame1, { autoAlpha: 1 })
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame5, { autoAlpha: 0 })
      .set(this.frame6, { autoAlpha: 0 })
      .set(this.frame7, { autoAlpha: 0 })
      .set(this.frame8, { autoAlpha: 0 })
      .set(this.frame9, { autoAlpha: 0 })
      .set(this.frame10, { autoAlpha: 0 })
      .set(this.fss1, { autoAlpha: 0 })
      .set(this.fss2, { autoAlpha: 0 })
      .set(this.fss1, { autoAlpha: 0 })
      .set(this.fss2, { autoAlpha: 0 })


      .set(this.frame1, { autoAlpha: 0, delay: 3 })
      // .set(this.frame2, { autoAlpha: 1 })
      // .to(this.bg2, 2, { left: "-=50" })

      // .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 1 })

      .set(this.frame3, { autoAlpha: 0, delay: beatLength })
      .set(this.frame4, { autoAlpha: 1 })

      .set(this.frame4, { autoAlpha: 0, delay: 1 })
      .set(this.frame5, { autoAlpha: 1 })

      .set(this.frame5, { autoAlpha: 0, delay: beatLength })
      .set(this.frame6, { autoAlpha: 1 })

      .set(this.frame6, { autoAlpha: 0, delay: beatLength })
      .set(this.frame7, { autoAlpha: 1 })

      .set(this.frame7, { autoAlpha: 0, delay: beatLength })
      .set(this.frame8, { autoAlpha: 1 })

      .set(this.frame8, { autoAlpha: 0, delay: beatLength })
      .set(this.fss1, { autoAlpha: 1 })

      .set(this.fss1, { autoAlpha: 0, delay: 1.5 })
      .set(this.fss2, { autoAlpha: 1 })

      .set(this.fss2, { autoAlpha: 0, delay: 2 })
      .set(this.frame10, { autoAlpha: 1 })

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion-2018w5-CrispyChickenPromo'>

        <div className="frame frame1" ref={(node) => this.frame1 = node}>
          <img src={frame1}/>
        </div>

        <div className="frame frame2" ref={(node) => this.frame2 = node}>
          <img className="bg" src={bg2} ref={(node) => this.bg2 = node}/>
          <img className="text" src={text2}/>
        </div>

        <div className="frame frame3" ref={(node) => this.frame3 = node}>
          <img className="bg" src={bg3} ref={(node) => this.bg3 = node}/>
          <img className="text" src={text2}/>
        </div>

        <div className="frame frame4" ref={(node) => this.frame4 = node}>
          <img src={frame4}/>
        </div>

        <div className="frame frame5" ref={(node) => this.frame5 = node}>
          <img className="bg" src={bg5} ref={(node) => this.bg5 = node}/>
          <img className="text" src={text5}/>
        </div>

        <div className="frame frame6" ref={(node) => this.frame6 = node}>
          <img className="bg" src={bg6} ref={(node) => this.bg6 = node}/>
          <img className="text" src={text5}/>
        </div>

        <div className="frame frame7" ref={(node) => this.frame7 = node}>
          <img className="bg" src={bg7} ref={(node) => this.bg7 = node}/>
          <img className="text" src={text7}/>
        </div>

        <div className="frame frame8" ref={(node) => this.frame8 = node}>
          <img className="bg" src={bg7} ref={(node) => this.bg8 = node}/>
          <img className="text" src={text8}/>
        </div>

        <div className="frame frame9" ref={(node) => this.frame9 = node}>
          <img src={frame9}/>
        </div>

        <div className="frame frame-ss1" ref={(node) => this.fss1 = node}>
          <img src={fss1}/>
        </div>

        <div className="frame frame-ss2" ref={(node) => this.fss2 = node}>
          <img src={fss2}/>
        </div>

        <div className="frame frame10" ref={(node) => this.frame10 = node}>
          <img src={frame10}/>
          <p className="price price1">${this.props.homestyle_crispy_chicken_price_6in} / ${this.props.homestyle_crispy_chicken_price_12in}</p>
          <p className="price price2">${this.props.fresh_fit_crispy_chicken_price_6in} / ${this.props.fresh_fit_crispy_chicken_price_12in}</p>
        </div>

      </div>
    )
  }
}
