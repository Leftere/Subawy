import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import Frame1Logo from '../images/Frame1Logo.png'
import Frame1Text1 from '../images/Frame1Text1.png'
import Frame1Text2 from '../images/Frame1Text2.png'
import Frame1Text3 from '../images/Frame1Text3.png'
import Frame1Text4 from '../images/Frame1Text4.png'
import Frame1Text5 from '../images/Frame1Text5.png'
import Frame1 from '../images/Frame1.png'
import Frame1_2 from '../images/Frame1_2.png'
import Frame1_3 from '../images/Frame1_3.png'
import Frame1_4 from '../images/Frame1_4.png'

import MeatballSub from '../images/meatballSub.jpg'
import Frame3Text1 from '../images/Frame3Text1.png'
import Frame3Text2 from '../images/Frame3Text2.png'
import Frame4Text1 from '../images/Frame4Text1.png'
import Frame4Text2 from '../images/Frame4Text2.png'
import Frame4Text3 from '../images/Frame4Text3.png'
import Frame4Logo from '../images/Frame4Logo.png'
import Legal from '../images/legal.png'

import './styles.css'


@neocastDataProvider([
  'beyond_meatball_marinara_price_6in',
  'beyond_meatball_marinara_price_12in',
])

export default class BeyondMeatballMarinara extends Component
{
  componentDidMount() {

    let meatballStart = -2840
    let meatballEnd = -1500
    let meatballOffset = meatballStart + 640
    let shutterSpeed = 2
    let subSpeed = 10


    let timeline = new TimelineMax()

    timeline
    .set(this.Frame1, {autoAlpha: 1})
    .set(this.Frame1Logo, {autoAlpha: 0})
    .set(this.Frame1Text1, {autoAlpha: 0})
    .set(this.Frame1Text2, {autoAlpha: 0})
    .set(this.Frame1Text3, {autoAlpha: 0})
    .set(this.Frame1Text4, {autoAlpha: 0})
    .set(this.Frame1Text5, {autoAlpha: 0})

    .set(this.Frame1_2, {autoAlpha: 0})
    .set(this.Frame1_3, {autoAlpha: 0})
    .set(this.Frame1_4, {autoAlpha: 0})

    .set(this.MeatballSubContainer, {left: -2200, top: -1100})
    .set(this.MeatballSub, {left: 0, width: "3500px", height: "2626px"})

    .set(this.Frame3Text1, {autoAlpha: 0, left: 0})
    .set(this.Frame3Text2, {autoAlpha: 0,  left:100})

    .set(this.Frame4Text1, {autoAlpha: 0})
    .set(this.Frame4Text2, {autoAlpha: 0})
    .set(this.Frame4Text3, {autoAlpha: 0})
    .set(this.Frame4Logo, {autoAlpha: 0})
    .set(this.Legal, {autoAlpha: 0})
    .set(this.Prices, {autoAlpha: 0, left: 30, top: 1010})

    //-------------------------------------------------//

    .to(this.Frame1Text1, 0, {autoAlpha: 1, top:0}, "+=0.5")
    .to(this.Frame1Text2, 0, {autoAlpha: 1, top:0}, "+=0.75")
    .to(this.Frame1Text3, 0, {autoAlpha: 1, top:0}, "+=0.35")
    .to(this.Frame1Text4, 0, {autoAlpha: 1, top:0}, "+=0.35")
    .to(this.Frame1Text5, 0, {autoAlpha: 1, top:0}, "+=0.35")
    .to(this.Frame1Logo, 0, {autoAlpha: 1})

    .to(this.Frame1, 0, {autoAlpha: 0}, "=+2")
    .to(this.Frame1_2, 0, {autoAlpha: 1}, "=-1")

    .to(this.Frame1_2, 0, {autoAlpha: 0}, "=+1")
    .to(this.Frame1_3, 0, {autoAlpha: 1}, "=-1")

    .to(this.Frame1_3, 0, {autoAlpha: 0}, "=+1")
    .to(this.Frame1_4, 0, {autoAlpha: 1}, "=-1")

    .to(this.Frame1_4, 0, {autoAlpha: 0}, "=+1")

    .to(this.MeatballSub, 10, {left: 400, ease: Power1.ease}, "-=5" )

    .to(this.Frame3Text1, 0.5, {autoAlpha: 1}, "-=4")
    .to(this.Frame3Text2, 0.5, {autoAlpha: 1}, "-=3")

    .to(this.MeatballSub, 4, {width: "2100px", height: "1575px", left:1400, top:750}, "-=1")
    .to(this.Frame3Text1, 0.5, {autoAlpha: 0}, "-=3")
    .to(this.Frame3Text2, 0.5, {autoAlpha: 0}, "-=3")

    .to(this.Frame4Text1, 0.5, {autoAlpha: 1, top:0}, "-=2")
    .to(this.Frame4Text2, 0.5, {autoAlpha: 1, top:0}, "-=1.5")
    .to(this.Frame4Logo, 0.5, {autoAlpha: 1}, "-=1")
    .to(this.Frame4Text3, 0.5, {autoAlpha: 1, left:0})
    .to(this.Legal, 0.5, {autoAlpha: 1}, "+=0.5")
    .to(this.Prices, 0.5, {autoAlpha: 1}, "-=0.5")
  }

  render() {
    
    let sixInchPrice = `$${API.loc('beyond_meatball_price_6in')}`
    let twelveInchPrice = `$${API.loc('beyond_meatball_price_12in')}`
    
    return (


      <div className="c-beyond-meatball-quad">

        <div className="frame2" ref={(node) => this.Frame2 = node}>
          <div className="meatball-sub-container" ref={(node) => this.MeatballSubContainer = node}>
            <img className="meatball-sub" src={MeatballSub} ref={(node) => this.MeatballSub = node}/>
          </div>
        </div>

        <div className="frame3">
          <img src={Frame3Text1} ref={(node) => this.Frame3Text1 = node}/>
          <img src={Frame3Text2} ref={(node) => this.Frame3Text2 = node}/>
        </div>

        <div className="frame4">
          <img src={Frame4Text1} ref={(node) => this.Frame4Text1 = node} />
          <img src={Frame4Text2} ref={(node) => this.Frame4Text2 = node} />
          <img src={Frame4Text3} ref={(node) => this.Frame4Text3 = node} />
          <img src={Frame4Logo} ref={(node) => this.Frame4Logo = node} />
          <img src={Legal} ref={(node) => this.Legal = node} />
          <div className="meatball-prices" ref={(node) => this.Prices = node}>
            <div className="price">{sixInchPrice} <span className="calories">480 cal</span></div>
            <div className="price">{twelveInchPrice} <span className="calories">960 cal</span></div>
          </div>
        </div>

        <div className="frame1" ref={(node) => this.Frame1 = node}>
          <img src={Frame1Logo} ref={(node) => this.Frame1Logo = node} alt="Beyond Meat Logo" />
          <img src={Frame1Text1} ref={(node) => this.Frame1Text1 = node} alt="New" />
          <img src={Frame1Text2} ref={(node) => this.Frame1Text2 = node} alt="Beyond" />
          <img src={Frame1Text3} ref={(node) => this.Frame1Text3 = node} alt="Meatball" />
          <img src={Frame1Text4} ref={(node) => this.Frame1Text4 = node} alt="Marinara" />
          <img src={Frame1Text5} ref={(node) => this.Frame1Text5 = node} alt="Powered by plants" />
        </div>

        <div className="frame1-1">
          <img src={Frame1_2} ref={(node) => this.Frame1_2 = node} />
          <img src={Frame1_3} ref={(node) => this.Frame1_3 = node} />
          <img src={Frame1_4} ref={(node) => this.Frame1_4 = node} />
        </div>
      </div>
    )
  }
}
