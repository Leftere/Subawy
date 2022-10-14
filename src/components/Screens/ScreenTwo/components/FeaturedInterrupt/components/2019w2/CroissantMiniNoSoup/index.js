import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'
import 'gsap/EndArrayPlugin'


import './styles.css'

import bg from './images/bg.png'
import frame1 from './images/frame1.png'
import frame2 from './images/frame2.png'
import frame3 from './images/frame3.png'
import p249 from './images/249.png'
import p499 from './images/499.png'
import p599 from './images/599.png'

let R = React.createElement // Render Element

// Build DOM
let domClass = 'c-CroissantMini_13_NoSoup'
let elements = {
  bg: ['img', bg],
  frame1: ['img', frame1],
  frame2: ['img', frame2],
  frame3: ['img', frame3],
  p249: ['img', p249],
  p499: ['img', p499],
  p599: ['img', p599],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

// let clipVal = [0,0,0,0];
// let clipValEnd = [100,100,100,100];

// let updateClip = (target) =>
// {
//   let val = `inset(${clipVal[0]}% ${clipVal[1]}% ${clipVal[2]}% ${clipVal[3]}%)`;
//   new TimelineMax().set(target, {webkitClipPath: val})
// }

export default class CroissantMini_13 extends Component {

	componentDidMount() {

    let timeline = new TimelineMax()
        .set([
          C.p499, C.p599,
          C.frame2, C.frame3], {autoAlpha: 0})

    let beat = 0;
    let beatLength = 3;
    let ln = 0.4;

    beat += beatLength;

    // timeline.to(
    //   clipVal, 5,{
    //   endArray: clipValEnd,
    //   onUpdate: updateClip,
    //   onUpdateParams: [C.bg]}, beat);

    timeline.to(C.frame1, ln, {autoAlpha: 0}, beat);
    timeline.to(C.frame2, ln, {autoAlpha: 1}, beat);
    timeline.to(C.p249, ln, {autoAlpha: 0}, beat);
    timeline.to(C.p499, ln, {autoAlpha: 1}, beat);

    beat += beatLength;

    timeline.to(C.frame2, ln, {autoAlpha: 0}, beat);
    timeline.to(C.frame3, ln, {autoAlpha: 1}, beat);
    timeline.to(C.p499, ln, {autoAlpha: 0}, beat);
    timeline.to(C.p599, ln, {autoAlpha: 1}, beat);

  }

  render() {
    return dom
  }
}
