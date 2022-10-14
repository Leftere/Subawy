import { Component } from 'react'

import './style.pcss'

import Phone1 from '../images/phone1.png';
import Phone2 from '../images/phone2.png';

import Text1 from '../images/customize.png';
import Text2 from '../images/order.png';
import Text3 from '../images/express.png';
import Text4 from '../images/orderFinal.png';

import Sub from '../images/sub.png';

import Icons from '../images/orderIcons.png';
import Laptop from '../images/laptop.png';
import SubFinal from '../images/subFinal.png';
import PhoneFinal from '../images/phoneFinal.png';
import Footer from '../images/footer.png';

export default class AppRemoteOrderQuad extends Component {


  constructor(props) {
    super(props)
  }

  componentDidMount() {

    // TweenLite.defaultEase = Linear.easeNone;

    let master = new TimelineMax({repeat: false});
    let panel1 = new TimelineLite();

    let fadeLength = 0.5;
    let fadeLengthLong = 1;

    let beat1 = 2;
    let beat2 = 4;
    let beat3 = 6;

    panel1
      .set(this.bgBar, { top: 45, height: 200 })
      .set(this.text1, { opacity: 0, transform: 'translate3d(-100px, 0, 0)'})
      .set(this.text2, { opacity: 0, transform: 'translate3d(-100px, 0, 0)'})
      .set(this.text3, { opacity: 0, transform: 'translate3d(-100px, 0, 0)'})
      .set(this.text4, { opacity: 0, transform: 'translate3d(-100px, 0, 0)'})
      .set(this.phoneWrapper, { opacity: 0, transform: 'translate3d(100px, 0, 0) rotate3d(0,0,1,-10deg)'})

      .set(this.phone1, { opacity: 1})
      .set(this.phone2, { opacity: 0})

      .set(this.sub, { opacity: 0, transform: 'translate3d(900px, 0, 0)'})

      .set(this.whiteBar, { transform: 'translate3d(0, 170px, 0)'})
      .set(this.icons, { transform: 'translate3d(-400px, 0, 0)'})
      .set(this.laptop, { transform: 'translate3d(700px, 0, 0)'})
      .set(this.subFinal, { transform: 'translate3d(-900px, 0, 0)'})
      .set(this.phoneFinal, { transform: 'translate3d(340px, 0, 0)'})
      .set(this.footer, { transform: 'translate3d(0, 140px, 0)'})

      .to(this.text1, fadeLengthLong, { opacity: 1, transform: 'translate3d(0, 0, 0)'}, 0)
      .to(this.phoneWrapper, fadeLengthLong, { opacity: 1, transform: 'translate3d(0, 0, 0) rotate3d(0,0,1,-10deg)'}, 0)

      .to(this.phoneWrapper, fadeLengthLong, { opacity: 1, transform: 'translate3d(0, 0, 0) rotate3d(0,0,1,10deg)'}, beat1)
      .to(this.text1, fadeLength, { opacity: 0, transform: 'translate3d(50px, 0, 0)'}, beat1)

      .to(this.text2, fadeLengthLong, { opacity: 1, transform: 'translate3d(0, 0, 0)'}, beat1)
      .to(this.phone2, fadeLength, { opacity: 1}, beat1)

      .to(this.phoneWrapper, fadeLength, { opacity: 0, transform: 'translate3d(-50px, 0, 0) rotate3d(0,0,1,10deg)'}, beat2)

      .to(this.text2, fadeLength, { opacity: 0, transform: 'translate3d(0, 0, 0)'}, beat2)
      .to(this.sub, fadeLengthLong, { opacity: 1, transform: 'translate3d(0, 0, 0)'}, beat2)
      .to(this.text3, fadeLengthLong, { opacity: 1, transform: 'translate3d(0, 0, 0)'}, beat2)

      .to(this.sub, fadeLength, { opacity: 0, transform: 'translate3d(900px, 0, 0)'}, beat3)
      .to(this.text3, fadeLength, { opacity: 0, transform: 'translate3d(50px, 0, 0)'}, beat3)

      .to(this.bgBar, fadeLengthLong, { top: 318, height: 588 }, beat3)
      .to(this.whiteBar, fadeLengthLong, {transform: 'translate3d(0, 0, 0)'}, beat3)

      .to(this.text4, fadeLengthLong, { opacity: 1, transform: 'translate3d(0, 0, 0)'}, beat3)
      .to(this.icons, fadeLengthLong, {transform: 'translate3d(0, 0, 0)'}, beat3 + 0.2)
      .to(this.laptop, fadeLengthLong, {transform: 'translate3d(0, 0, 0)'}, beat3 + 0.2)
      .to(this.subFinal, fadeLengthLong, {transform: 'translate3d(0, 0, 0)'}, beat3 + 0.1)
      .to(this.phoneFinal, fadeLengthLong, {transform: 'translate3d(0, 0, 0)'}, beat3 + 0.4)
      .to(this.footer, fadeLengthLong, {transform: 'translate3d(0, 0, 0)'}, beat3 + 0.5)

    master
    .add(panel1)


  }

  render() {
    return (
      <div className='c-AppRemoteOrder'>
        <div className='backgroundBar' ref={(node) => this.bgBar = node}></div>


        <div className='frame3'>
          <img className='text3' src={Text3} ref={(node) => this.text3 = node}/>
          <img className='sub' src={Sub} ref={(node) => this.sub = node}/>
        </div>


        <div className='frame1'>
          <div className='phoneWrapper' ref={(node) => this.phoneWrapper = node}>
            <img className='phone1' src={Phone1} ref={(node) => this.phone1 = node}/>
            <img className='phone2' src={Phone2} ref={(node) => this.phone2 = node}/>
          </div>

          <img className='text1' src={Text1} ref={(node) => this.text1 = node}/>
        </div>

        <div className='frame2'>
          <img className='text2' src={Text2} ref={(node) => this.text2 = node}/>
        </div>

        <div className='frame4'>
          <div className='whiteBar' ref={(node) => this.whiteBar = node}></div>
          <img className='text4' src={Text4} ref={(node) => this.text4 = node}/>
          <img className='icons' src={Icons} ref={(node) => this.icons = node}/>
          <img className='laptop' src={Laptop} ref={(node) => this.laptop = node}/>
          <img className='subFinal' src={SubFinal} ref={(node) => this.subFinal = node}/>
          <img className='phoneFinal' src={PhoneFinal} ref={(node) => this.phoneFinal = node}/>
          <img className='footer' src={Footer} ref={(node) => this.footer = node}/>
        </div>

      </div>
    )
  }
}
