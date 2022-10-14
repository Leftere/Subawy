import API from 'api'
import { Component } from 'react'
import 'gsap'
import 'gsap-then'

import bg from './images/bg.png'
import chicken from './images/chicken.png'
import steak from './images/steak.png'
import chickenR from './images/chicken-r.png'
import steakR from './images/steak-r.png'
import text1 from './images/text-1.png'
import text2 from './images/text-2.png'
import text3 from './images/text-3.png'
import text4 from './images/text-4.png'

let sub1price6 = API.loc('sesame_ginger_glazed_chicken_wrap_price')
let sub2price6 = API.loc('sweet_n_smoky_steak_and_guac_wrap_price')


import './styles.css'

export default class SignatureWrapInterrupt extends Component {

  constructor(props) {
    super(props);
    if (props.layout == "R2L") isL2R = false;
  }

  componentDidMount() 
  {
    new TimelineMax({ delay: 0.5 })
      .set([this.text1wrapper,this.text3wrapper], {height: 0})

      .set([this.text2,this.text4, this.sub_1, this.sub_2], {autoAlpha: 0})

      .set([
        this.chicken,this.steak,this.chickenR,this.steakR], {top: -500})

      .set(this.bgwrapper, {height: 0})

      .to(this.bgwrapper, 2, {height: 1080}, 1.6)
      .to(this.text1wrapper, 2.5, {height: 1080}, 1.5)

      .to(this.steak, 2.5, {top: 650}, 1)
      .to(this.steakR, 2.5, {top: 650}, 1)

      .to(this.text1wrapper, 0.3, {autoAlpha: 0}, 4.0)
      .to(this.text2, 0.3, {autoAlpha: 1}, 4.5)

      .to(this.chicken, 2, {top: 350}, 5.5)
      .to(this.chickenR, 2, {top: 350}, 5.5)
      .to(this.text3wrapper, 2, {height: 350}, 5.5)

      .to(this.text2, 0.1, {autoAlpha: 0}, 7)
      
      .to(this.text3wrapper, 0.1, {autoAlpha: 0}, 8.5)
      .to([this.text4, this.sub_1, this.sub_2], 1, {autoAlpha: 1}, 8.5)

      .to(this.chickenR, 1, {
        left: 50, top: 290, width: 550}, 8.5)
      .to(this.steakR, 1, {
          left: 50, top: 650, width: 550}, 8.5)

      .to(this.chicken, 1, {
        right: 50, top: 290, width: 550}, 8.5)
      .to(this.steak, 1, {
          right: 50, top: 650, width: 550}, 8.5)

      TweenLite.defaultEase = Linear.easeNone;
  }
  render() {
    return (
      <div className='c-SignatureWrapInterruptW2'>
        <div className='innerWrap'>
          
          <div className='bg-wrapper' ref={(node) => this.bgwrapper= node}>
            <img src={bg} className='dn-bg' ref={(node) => this.bg = node}  />
          </div>

          <div className='text1-wrapper' ref={(node) => this.text1wrapper= node}>
            <img src={text1} className='dn-text1' ref={(node) => this.text1 = node}/>
          </div>

          <img src={text2} className='dn-text2' ref={(node) => this.text2 = node}  />

          <div className='text3-wrapper' ref={(node) => this.text3wrapper= node}>
            <img src={text3} className='dn-text3' ref={(node) => this.text3 = node}  />
          </div>

          <img src={text4} className='dn-text4' ref={(node) => this.text4 = node}  />

          <div className="d-text dn-sub_1" ref={(node) => this.sub_1 = node}></div>
          <div className="d-text dn-sub_2" ref={(node) => this.sub_2 = node}></div>

          <img src={steak} className='dn-steak' ref={(node) => this.steak = node}  />
          <img src={steakR} className='dn-steakR' ref={(node) => this.steakR = node}  />
          <img src={chicken} className='dn-chicken ' ref={(node) => this.chicken = node}  />
          <img src={chickenR} className='dn-chickenR' ref={(node) => this.chickenR = node}  />

        </div>
      </div>
    )
  }
}
