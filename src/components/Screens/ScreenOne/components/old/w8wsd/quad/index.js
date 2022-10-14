import { Component } from 'react'
import API from 'api'
import './styles.css'

import 'gsap'
import 'gsap-then'

import Text1 from '../images/text1.png'
import Text2 from '../images/text2.png'
import Text3 from '../images/text3.png'
import Text4 from '../images/text4.png'

import WSDLogo from '../images/wsdLogo.png'
import Drink from '../images/drink.png'
import Plate from '../images/plate.png'

import Sub1 from '../images/sub1.png'
import Sub2 from '../images/sub2.png'

import Frame4Image from '../images/frame4.jpg'

export default class WSDFeaturedPromotionQuad extends Component {

  componentDidMount() {

    var master = new TimelineMax()

    var panel1 = new TimelineLite()
    var panel2 = new TimelineLite()
    var panel3 = new TimelineLite()
    var panel4 = new TimelineLite()


    panel1
      .delay(3)
      .set(this.Text1, {transform: 'translate3d(0, 0, 0)'})
      .set(this.WSDLogo, {transform: 'rotate3d(0, 0, 0, 0deg'})
      .to(this.Text1, 1.2, {transform: 'translate3d(-1300px, -500px, 0)', ease:Sine.easeIn})
      .to(this.WSDLogo, 0.6, {transform: 'rotate3d(0, 1, 0, 90deg)', ease:Sine.easeIn}, "-=1")
      .to(this.WSDLogo, 0, {display: 'none'})

    panel2
      .delay(-0.2) // Holy crap this works
      .set(this.Sub1, {transform: 'translate3d(1000px, 0, 0)' })
      .set(this.Sub2, {transform: 'translate3d(-1100px, 0, 0)' })
      .set(this.Drink, {transform: 'translate3d(600px, 0, 0)' })
      .set(this.Text2, {transform: 'translate3d(-1300px, -500px, 0)'})
      .set(this.Text3, {transform: 'translate3d(-1300px, -500px, 0) scale(0.7)'})
      .set(this.Mask, {top: '-100%', left: '-100%'})
      .to(this.Sub1, 1.6, {transform: 'translate3d(0, 0, 0)'}, 0)
      .to(this.Drink, 1.3, {transform: 'translate3d(0, 0, 0)'}, 0)
      .to(this.Text2, 1.2, {transform: 'translate3d(0, 0, 0)'}, 0)
      .to(this.Text2, 1.2, {transform: 'translate3d(-1300px, -500px, 0)', ease:Sine.easeIn}, 2.5)
      .to(this.Text3, 1.6, {transform: 'translate3d(0, 0, 0) scale(0.7)', ease:Sine.easeIn}, 3)
      .to(this.Sub2, 1.2, {transform: 'translate3d(0, 0, 0)'}, 3.2)
      .to(this.Text3, 1.5, {transform: 'translate3d(0, 0, 0) scale(2.8)', ease:Sine.easeIn}, 6)
      .to(this.Mask, 2, {top: '0%', left: '0%', ease:Sine.easeIn}, 5.8)
      .to(this.Frame2, 0, {display: 'none'}, 8)

    panel3
      .delay(2.5)
      .set(this.Frame3, {width: '100%'})
      .set(this.Frame4, {opacity: 0})
      .to(this.Frame4, 0.1, {opacity: 1})
      .to(this.Plate, 1.5, {transform: 'scale(1)', ease:Sine.easeInOut})
      .to(this.Plate, 1.5, {transform: 'scale(1) translate3d(-2500px, 0, 0)', ease:Sine.easeInOut}, 1.5)
      .to(this.Text4, 1.5, {transform: 'translate3d(-2000px, 0, 0)', ease:Sine.easeInOut}, 1.5)
      .to(this.Frame3, 1.0, {width:'0', ease:Sine.easeInOut}, 1.5)


    master
      .add(panel1)
      .add(panel2)
      .add(panel3)

  }

	render() {
		return (
			<div className='c-WSDFeaturedPromotionQuad' ref={(node) => this.container = node }>

        <div className='frame1'>
          <img src={Text1} className='text1' ref={(node) => this.Text1 = node }/>
          <img src={WSDLogo} className='wsdLogo' ref={(node) => this.WSDLogo = node }/>
        </div>

        <div className='frame2' ref={(node) => this.Frame2 = node }>
          <img src={Text2} className='text2' ref={(node) => this.Text2 = node }/>
          <img src={Drink} className='drink' ref={(node) => this.Drink = node }/>
          <img src={Sub1} className='sub1' ref={(node) => this.Sub1 = node }/>
          <img src={Sub2} className='sub2' ref={(node) => this.Sub2 = node }/>
          <img src={Text3} className='text3' ref={(node) => this.Text3 = node }/>
        </div>

        <div className='frame4' ref={(node) => this.Frame4 = node }>
          <img src={Frame4Image} className='frameImage'/>
        </div>

        <div className='mask' ref={(node) => this.Mask = node }>
          <div className='frame3' ref={(node) => this.Frame3 = node }>
          <img src={Text4} className='text4' ref={(node) => this.Text4 = node }/>
          <img src={Plate} className='plate' ref={(node) => this.Plate = node }/>
          </div>
        </div>

			</div>
		)
	}
}
