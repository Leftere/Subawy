import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import delayedRender from 'components/Common/delayedRender'

import bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg2.jpg'
import bg3 from '../images/bg3.jpg'
import bg4 from '../images/bg4.jpg'
import bg5 from '../images/bg5.jpg'

import bg2text from '../images/bg2text.png'
import bg3text from '../images/bg3text.png'
import bg4text from '../images/bg4text.png'
import bg5text from '../images/bg5text.png'

import theBack from '../images/theBack.png'
import reubenOff from '../images/reubenOff.png'
import reubenOn from '../images/reubenOn.png'

import leftSub from '../images/leftSub.png'
import rightSub from '../images/rightSub.png'

import turkeyPrice from '../images/turkeyPrice.png'
import beefPrice from '../images/beefPrice.png'

import headerOff from '../images/headerOff.png'
import headerOn from '../images/header.png'

import lto from '../images/lto.png'
import legal from '../images/legal.png'

import './styles.css'

@delayedRender(300)
@neocastDataProvider([
  'turkey_reuben_price_6in',
  'turkey_reuben_price_12in',
  'corned_beef_reuben_price_6in',
  'corned_beef_reuben_price_12in'
])
export default class ReubenFeature extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const fadeInTime  = 0.5
    // const delayTime = 3
    const beatLength = 5

    TweenLite.defaultEase = Linear.easeNone;

    let master = new TimelineMax({repeat: false});
    let panel1 = new TimelineLite();
    // let panel2 = new TimelineLite();
    // let panel3 = new TimelineLite();
    // let panel4 = new TimelineLite();
    // let panel5 = new TimelineLite();

    panel1
      .set(this.frame1, { opacity: 1})
      .set(this.frame2, { opacity: 0})
      .set(this.frame3, { opacity: 0})
      .set(this.frame4, { opacity: 0})
      .set(this.frame5, { opacity: 0})
      .set(this.bg1, { transform: 'translate3d( 0px, 0, 0) scale(1.1)'})
      .set(this.bg2, { transform: 'translate3d( -50px, 0, 0) scale(1.1)'})
      .set(this.bg3, { transform: 'translate3d( 0px, 0, 0) scale(1.1)'})
      .set(this.bg4, { transform: 'translate3d( -50px, 0, 0) scale(1.1)'})
      .set(this.bg5, { transform: 'translate3d( 0px, 0, 0) scale(1.1)'})
      .set(this.reubenOn, { opacity: 0})
      .set(this.headerOff, { opacity: 0})
      .set(this.headerOn, { opacity: 0})
      .set(this.leftSub, { transform: 'translate3d( -1000px, 0, 0)'})
      .set(this.rightSub, { transform: 'translate3d( 1000px, 0, 0)'})
      .set(this.legal, { transform: 'translate3d( 0, 50px, 0)', opacity: 0})
      .set(this.turkeyPrice, { transform: 'translate3d( 0, 30px, 0)', opacity: 0})
      .set(this.priceTurkey6, { transform: 'translate3d( 0, 30px, 0)', opacity: 0})
      .set(this.priceTurkey12, { transform: 'translate3d( 0, 30px, 0)', opacity: 0})
      .set(this.beefPrice, { transform: 'translate3d( 0, 30px, 0)', opacity: 0})
      .set(this.priceBeef6, { transform: 'translate3d( 0, 30px, 0)', opacity: 0})
      .set(this.priceBeef12, { transform: 'translate3d( 0, 30px, 0)', opacity: 0})
      .set(this.lto, { transform: 'rotate3d( 0, 0, 1, -30deg)', opacity: 0})
      .to(this.bg1, beatLength, {transform: 'translate3d( -80px, -20px, 0) scale(1.1)'})
      .to(this.reubenOn, 0.01, {opacity: 1}, "-=4.2")
      .to(this.reubenOn, 0.01, {opacity: 0}, "-=4")
      .to(this.reubenOn, 0.01, {opacity: 0}, "-=3.1")
      .to(this.reubenOn, 0.01, {opacity: 1}, "-=3")
      .to(this.reubenOn, 0.01, {opacity: 0}, "-=2.9")
      .to(this.reubenOn, 0.01, {opacity: 1}, "-=2.8")
      .to(this.frame1, fadeInTime, {opacity: 0}, "-=" + fadeInTime)
      .to(this.frame2, fadeInTime, {opacity: 1}, "-=" + fadeInTime)
      .to(this.bg2, beatLength, {transform: 'translate3d( 0px, -20px, 0) scale(1.1)'}, "-=" + fadeInTime*2)
      .to(this.frame2, fadeInTime, {opacity: 0}, "-=" + fadeInTime)
      .to(this.frame3, fadeInTime, {opacity: 1}, "-=" + fadeInTime)
      .to(this.bg3, beatLength, {transform: 'translate3d( -50px, -20px, 0) scale(1.1)'}, "-=" + fadeInTime*2)
      .to(this.frame3, fadeInTime, {opacity: 0}, "-=" + fadeInTime)
      .to(this.frame4, fadeInTime, {opacity: 1}, "-=" + fadeInTime)
      .to(this.bg4, beatLength, {transform: 'translate3d( 0px, -20px, 0) scale(1.1)'}, "-=" + fadeInTime*2)
      .to(this.frame4, fadeInTime, {opacity: 0}, "-=" + fadeInTime)
      .to(this.frame5, fadeInTime, {opacity: 1}, "-=" + fadeInTime)
      .to(this.bg5, beatLength, {transform: 'translate3d( -50px, -20px, 0) scale(1.1)'}, "-=" + fadeInTime*2)
      .to(this.frame5, fadeInTime*2, {opacity: 0}, "-=" + fadeInTime*2)
      .to(this.frame6, fadeInTime*2, {opacity: 1}, "-=" + fadeInTime*2)
      .to(this.headerOff, 0.5, {opacity: 1}, "-=0.4")
      .to(this.leftSub, 1, { transform: 'translate3d( 0px, 0, 0)'}, "-=0.6")
      .to(this.rightSub, 1, { transform: 'translate3d( 0px, 0, 0)'}, "-=0.6")
      .to(this.lto, 1.2, { transform: 'rotate3d( 0, 0, 0, 0deg)', opacity: 1}, "-=0.5")
      .to(this.turkeyPrice, 0.5, { transform: 'translate3d( 0, 0px, 0)', opacity: 1}, "-=0.5")
      .to(this.priceTurkey6, 0.5, { transform: 'translate3d( 0, 0px, 0)', opacity: 1}, "-=0.5")
      .to(this.priceTurkey12, 0.5, { transform: 'translate3d( 0, 0px, 0)', opacity: 1}, "-=0.5")
      .to(this.beefPrice, 0.5, { transform: 'translate3d( 0, 0px, 0)', opacity: 1}, "-=0.5")
      .to(this.priceBeef6, 0.5, { transform: 'translate3d( 0, 0px, 0)', opacity: 1}, "-=0.5")
      .to(this.priceBeef12, 0.5, { transform: 'translate3d( 0, 0px, 0)', opacity: 1}, "-=0.5")
      .to(this.legal, 0.5, { transform: 'translate3d( 0, 0px, 0)', opacity: 1}, "-=0.5")
      .to(this.headerOn, 0.01, {opacity: 1}, "-=1")
      .to(this.headerOn, 0.01, {opacity: 0}, "-=0.9")
      .to(this.headerOn, 0.01, {opacity: 1}, "-=0.2")
      .to(this.headerOn, 0.01, {opacity: 0}, "-=0.15")
      .to(this.headerOn, 0.01, {opacity: 1}, "-=0.05")

    master
      .add(panel1)


  }

  render() {
    return (
      <div className='c-ReubenFeature'>

        <div className='frame frame1' ref={(node) => this.frame1 = node }>
          <img src={bg1} className='bg' ref={(node) => this.bg1 = node } />
          <img src={theBack} className='theBack' ref={(node) => this.theBack = node } />

          <img src={reubenOff} className='reubenOff' ref={(node) => this.reubenOff = node } />
          <img src={reubenOn} className='reubenOn' ref={(node) => this.reubenOn = node } />
        </div>

        <div className='frame frame2' ref={(node) => this.frame2 = node }>
          <img src={bg2} className='bg' ref={(node) => this.bg2 = node } />
          <img src={bg2text} className='textCaption bg2text' ref={(node) => this.bg2text = node } />
        </div>

        <div className='frame frame3' ref={(node) => this.frame3 = node }>
          <img src={bg3} className='bg' ref={(node) => this.bg3 = node } />
          <img src={bg3text} className='textCaption bg3text' ref={(node) => this.bg3text = node } />
        </div>

        <div className='frame frame4' ref={(node) => this.frame4 = node }>
          <img src={bg4} className='bg' ref={(node) => this.bg4 = node } />
          <img src={bg4text} className='textCaption bg4text' ref={(node) => this.bg4text = node } />
        </div>

        <div className='frame frame5' ref={(node) => this.frame5 = node }>
          <img src={bg5} className='bg' ref={(node) => this.bg5 = node } />
          <img src={bg5text} className='textCaption bg5text' ref={(node) => this.bg5text = node } />
        </div>

        <div className='frame frame6' ref={(node) => this.frame6 = node }>
          <img src={lto} className='lto' ref={(node) => this.lto = node } />

          <img src={leftSub} className='sub leftSub' ref={(node) => this.leftSub = node } />
          <img src={rightSub} className='sub rightSub' ref={(node) => this.rightSub = node } />

          <img src={turkeyPrice} className='price turkeyPrice' ref={(node) => this.turkeyPrice = node } />
          <img src={beefPrice} className='price beefPrice' ref={(node) => this.beefPrice = node } />

          <img src={headerOff} className='header headerOff' ref={(node) => this.headerOff = node } />
          <img src={headerOn} className='header headerOn' ref={(node) => this.headerOn = node } />

          <img src={legal} className='legal' ref={(node) => this.legal = node } />

          <div className='priceText price-six price-turkey' ref={(node) => this.priceTurkey6 = node }>${this.props.turkey_reuben_price_6in}</div>
          <div className='priceText price-twelve price-turkey' ref={(node) => this.priceTurkey12 = node }>${this.props.turkey_reuben_price_12in}</div>

          <div className='priceText price-six price-beef' ref={(node) => this.priceBeef6 = node }>${this.props.corned_beef_reuben_price_6in}</div>
          <div className='priceText price-twelve price-beef' ref={(node) => this.priceBeef12 = node }>${this.props.corned_beef_reuben_price_12in}</div>
        </div>

      </div>
    )
  }
}
