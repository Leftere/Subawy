import API from 'api'
import { Component } from 'react'
import 'gsap'
import 'gsap-then'

import main from './images/main.png'
import text from './images/text.png'


import './styles.css'

export default class CiabattaInterruptSteak extends Component {

  constructor(props) {
    super(props);
    if (props.layout == "R2L") isL2R = false;
  }

  componentDidMount()
  {
    new TimelineMax({ delay: 0.1 })
      // .set([this.text1wrapper,this.text3wrapper], {height: 0})

      .set([this.main,this.text], {autoAlpha: 0})

      .to(this.text, 1, {autoAlpha: 1}, 0)
      .to(this.text, 1, {autoAlpha: 0}, 4)
      .to(this.main, 1, {autoAlpha: 1}, 4)

      TweenLite.defaultEase = Linear.easeNone;
  }
  render() {
    return (
      <div className='c-CiabattaInterruptSteak'>

        <div className='extra-dark'></div>
        <img src={main} className='dn-main' ref={(node) => this.main = node}  />
        <img src={text} className='dn-text' ref={(node) => this.text = node}  />

      </div>
    )
  }
}
