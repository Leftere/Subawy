import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Frame1Cookie from '../images/Frame1Cookie.jpg'
import Frame1Text1 from '../images/Frame1Text1.png'
import Frame1Text2 from '../images/Frame1Text2.png'
import Frame1Text3 from '../images/Frame1Text3.png'
import Frame1Text4 from '../images/Frame1Text4.png'
import TallCookieFrame from '../images/TallCookieFrame.jpg'
import Frame2Text1 from '../images/Frame2Text1.png'
import Frame2Text2 from '../images/Frame2Text2.png'
import Frame3Text5 from '../images/Frame3Subhead.png'
import Legal from '../images/legal.png'


export default class CaramelAppleCookie extends Component {
	componentDidMount() {

    let timeline = new TimelineMax()
    
    timeline
    .set(this.Frame1Cookie, {top: -100})
    .set(this.Frame1Text1, {autoAlpha: 0, top: -30})
    .set(this.Frame1Text2, {autoAlpha: 0, top: -30})
    .set(this.Frame1Text3, {autoAlpha: 0, top: -30})
    .set(this.Frame1Text4, {autoAlpha: 0, top: -30})

    .set(this.Frame2, {top: -500})
    .set(this.Frame2Text1, {top: 630, left: 215, rotation: -60, autoAlpha: 0})
    .set(this.Frame2Text2, {top: 2400, left: -50, rotation: 0, autoAlpha: 0})

    .set(this.Frame3Text1, {autoAlpha: 0, top: -30})
    .set(this.Frame3Text2, {autoAlpha: 0, top: -30})
    .set(this.Frame3Text3, {autoAlpha: 0, top: -30})
    .set(this.Frame3Text4, {autoAlpha: 0, top: -30})
    .set(this.Frame3Text5, {autoAlpha: 0, top: -30})

    .set(this.Legal, {autoAlpha: 0, top: -10})

    //-----------------------------------------------------------//
    	
    .to(this.Frame1Cookie, 2, {top: 0})
    .to(this.Frame1Text1, 0.5, {autoAlpha: 1, top: 0}, "=-1.5")
    .to(this.Frame1Text2, 0.5, {autoAlpha: 1, top: 0}, "=-1.25")
    .to(this.Frame1Text3, 0.5, {autoAlpha: 1, top: 0}, "=-1")
    .to(this.Frame1Text4, 0.5, {autoAlpha: 1, top: 0}, "=-0.75")
    
    .to(this.Frame1Cookie, 0.25, {autoAlpha: 0}, "+=1")
    .to(this.Frame1Text1, 0.25, {autoAlpha: 0}, "-=0.25")
    .to(this.Frame1Text2, 0.25, {autoAlpha: 0}, "-=0.25")
    .to(this.Frame1Text3, 0.25, {autoAlpha: 0}, "-=0.25")
    .to(this.Frame1Text4, 0.25, {autoAlpha: 0}, "-=0.25")

    .to(this.Frame2, 4, {top: -600})
    .to(this.Frame2, 2, {top: -1700}, "-=1")
    .to(this.Frame2, 4, {top: -1800})
    .to(this.Frame2, 2, {top: -3330, ease: Power1.easeOut}, "-=1")

    .to(this.Frame2Text1, 0.5, {top: 610, left: 170, autoAlpha: 1}, "-=10")
    .to(this.Frame2Text1, 6, {rotation: -40}, "-=10")
    .to(this.Frame2Text2, 0.5, {top: 2300, left: -50, autoAlpha: 1}, "-=6")
    .to(this.Frame2Text2, 6, {rotation: -30}, "-=6")

    .to(this.Frame3Text1, 0.5, {autoAlpha: 1, top: 0})
    .to(this.Frame3Text2, 0.5, {autoAlpha: 1, top: 0})
    .to(this.Frame3Text3, 0.5, {autoAlpha: 1, top: 0})
    .to(this.Frame3Text4, 0.5, {autoAlpha: 1, top: 0})
    .to(this.Frame3Text5, 0.5, {autoAlpha: 1, top: 0})
    .to(this.Legal, 0.5, {autoAlpha: 1}, "-=0.5")
    }

	render() {
		return (
            <div className="c-CaramelAppleCookie">

                <div className="frame2" ref={(node) => this.Frame2 = node}>
                    <img src={TallCookieFrame} alt="caramel apple cookies" ref={(node) => this.TallCookieFrame = node} />
                    <img src={Frame2Text1} alt="chewy caramel" ref={(node) => this.Frame2Text1 = node} />
                    <img src={Frame2Text2} alt="sweet apple" ref={(node) => this.Frame2Text2 = node} />
                </div>

                <div className="frame1">
                    <img src={Frame1Cookie} ref={(node) => this.Frame1Cookie = node} />
                    <img src={Frame1Text1} ref={(node) => this.Frame1Text1 = node} alt="NEW" />
                    <img src={Frame1Text2} ref={(node) => this.Frame1Text2 = node} alt="CARAMEL" />
                    <img src={Frame1Text3} ref={(node) => this.Frame1Text3 = node} alt="APPLE" />
                    <img src={Frame1Text4} ref={(node) => this.Frame1Text4 = node} alt="COOKIE" />
                </div>

                <div className="frame3">
                    <img src={Frame1Text1} ref={(node) => this.Frame3Text1 = node} alt="NEW" />
                    <img src={Frame1Text2} ref={(node) => this.Frame3Text2 = node} alt="CARAMEL" />
                    <img src={Frame1Text3} ref={(node) => this.Frame3Text3 = node} alt="APPLE" />
                    <img src={Frame1Text4} ref={(node) => this.Frame3Text4 = node} alt="COOKIE" />
                    <img src={Frame3Text5} ref={(node) => this.Frame3Text5 = node} alt="Try it while it lasts" />  
                    <img src={Legal} ref={(node) => this.Legal = node} />    
                </div>

            </div>
        )
	}
}