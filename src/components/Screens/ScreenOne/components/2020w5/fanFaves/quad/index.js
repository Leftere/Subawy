import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Badge from '../images/badge.png';

import Frame1Bottom from '../images/frame1_bottom.png';
import Frame1Middle from '../images/frame1_middle.png';
import Frame1Top from '../images/frame1_top.png';
import Frame1Text1 from '../images/frame1_text1.png';
import Frame1Text2 from '../images/frame1_text2.png';

import Frame2Bottom from '../images/frame2_bottom.png';
import Frame2Sub from '../images/frame2_sub.jpg';
import Frame2Text from '../images/frame2_text.png';

import Frame3Bottom from '../images/frame3_bottom.png';
import Frame3Sub from '../images/frame3_sub.jpg';
import Frame3Text from '../images/frame3_text.png';

import Frame4Bottom from '../images/frame4_bottom.png';
import Frame4Middle from '../images/frame4_middle.png';
import Frame4Top from '../images/frame4_top.png';
import Frame4Text1 from '../images/frame4_text1.png';
import Frame4Text2 from '../images/frame4_text2.png';
import Frame4Text3 from '../images/frame4_text3.png';

import Frame6Coke from '../images/frame6_bg_coke.jpg';
import Frame6NoCoke from '../images/frame6_bg_no_coke.jpg';
import Frame6Text from '../images/frame6_text.png';

import Frame7Text from '../images/frame7_text.png';

import Frame8Coke from '../images/frame8_coke.png';
import Frame8NoCoke from '../images/frame8_no_coke.png';
import Frame8Text from '../images/frame8_text.png';

import Frame9BG from '../images/frame9_bg.png';
import Frame9Text1A from '../images/frame9_text1A.png';
import Frame9Text1B from '../images/frame9_text1B.png';
import Frame9Text2A from '../images/frame9_text2A.png';
import Frame9Text2B from '../images/frame9_text2B.png';
import Frame9Text3A from '../images/frame9_text3A.png';
import Frame9Text3B from '../images/frame9_text3B.png';

import Frame10Coke from '../images/frame10_base_coke.png';
import Frame10NoCoke from '../images/frame10_base_no_coke.png';
import Frame10BG from '../images/frame10_green.png';

@neocastDataProvider([
    'serves_coca_cola',
    'bbq_chicken_price_6in',
    'bbq_chicken_price_12in',
    'buffalo_chicken_price_6in',
    'buffalo_chicken_price_12in'
  ])

export default class FanFaves extends Component {

    componentDidMount() {
        let timeline = new TimelineMax();

        timeline
        .set(this.Frame1Top, {x: 0})
        .set(this.Frame1Bottom, {x: 0})
        .set(this.Frame1Text1, {autoAlpha: 0, y: 50})

        .set([this.Frame2Sub,this.Frame2Bottom, this.Frame2Text], {x: 0, autoAlpha: 0})
        .set(this.Frame2Text, {autoAlpha: 0, y: 50})

        .set([this.Frame3Sub,this.Frame3Bottom, this.Frame3Text], {x: 0, autoAlpha: 0})
        .set(this.Frame3Text, {autoAlpha: 0, y: 50})

        .set(this.Frame4Top, {x: 0, autoAlpha: 0})
        .set(this.Frame4Bottom, {x: 150, autoAlpha: 0})
        .set([this.Frame4Middle,this.Frame4Text1,this.Frame4Text2,this.Frame4Text3], {autoAlpha: 0})
        .set(this.Frame4Text1, {x: -50})
        .set(this.Frame4Text2, {y: 50})
        .set(this.Frame4Text3, {x: 50})

        .set(this.Frame6BG, {x: -1300})
        .set([this.Frame6Text,this.BuffaloPrice,this.BBQPrice], {autoAlpha: 0})

        .set(this.whiteOverlay, {y: -1080})
        .set(this.Badge, {x: 390, y: 315, autoAlpha: 0})
        .set(this.Frame7Text, {autoAlpha: 0, y: 200})

        .set(this.whiteOverlay2, {autoAlpha: 0})
        .set(this.Frame8Text, {autoAlpha: 0})
        .set(this.Frame8BG, {autoAlpha: 0, y: 250})

        .set(this.Badge2, {width: "300px", x: 490, y: -350 })
        .set(this.greenBG, {bottom: -800})

        .set(this.Buy, {x: 550, y: 400, autoAlpha: 0})
        .set(this.BuyText, {x: 563, y: 500, autoAlpha: 0})
        .set(this.Snap, {x: 514, y: 600, autoAlpha: 0})
        .set(this.SnapText, {x: 366.5, y: 700, autoAlpha: 0})
        .set(this.Upload, {x: 459.5, y: 800, autoAlpha: 0})
        .set(this.UploadText, {x: 269.5, y: 900, autoAlpha: 0})

        .set(this.Frame10BG, {autoAlpha: 0})

        //--------------------------------------------//

        .to(this.Frame1Top, 2.5, {x: -150}, 0)
        .to(this.Frame1Bottom, 2.5, {x: 150}, 0)
        .to(this.Frame1Text1, 0.15, {autoAlpha: 1, y: 0}, 0.5)

        .to([this.Frame2Sub,this.Frame2Bottom], 0, {autoAlpha: 1}, 2)
        .to(this.Frame2Sub, 2.5, {x: -150}, 1.9)
        .to(this.Frame2Text, 0.15, {y: 0, autoAlpha: 1}, 2.5)

        .to([this.Frame3Sub,this.Frame3Bottom], 0, {autoAlpha: 1}, 4)
        .to(this.Frame3Sub, 2.5, {x: -150}, 3.9)
        .to(this.Frame3Text, 0.15, {y: 0, autoAlpha: 1}, 4.5)

        .to([this.Frame4Top,this.Frame4Bottom,this.Frame4Middle], 0, {autoAlpha: 1}, 6)
        .to(this.Frame4Top, 4, {x: -250}, 5.9)
        .to(this.Frame4Bottom, 4, {x: 400}, 5.9)
        .to(this.Frame4Text1, 0.15, {autoAlpha: 1, x: 0}, 6.5)
        .to(this.Frame4Text2, 0.15, {autoAlpha: 1, y: 0}, 6.75)
        .to(this.Frame4Text3, 0.15, {autoAlpha: 1, x: 0}, 7)

        .to(this.Frame6BG, .5, {x: 0}, 9)
        .to([this.Frame6Text,this.BuffaloPrice,this.BBQPrice], 1, {autoAlpha: 1}, 10)

        .to(this.whiteOverlay, .5, {y: 0}, 13)
        .to(this.Badge, 0.5, {autoAlpha: 1}, 13.5)
        .to(this.Badge, 0.5, {width: "300px", x: 490, y: 50 }, 14)
        .to(this.Frame7Text, 0.25, {autoAlpha: 1, y: 0}, 14.25)

        .to(this.whiteOverlay2, 0.5, {autoAlpha: 1}, 16.5)
        .to(this.Frame8Text, 0.5, {autoAlpha: 1}, 16.5)
        .to(this.Frame8BG, 0.25, {autoAlpha: 1, y: 0}, 17)

        .to([this.Frame8Text,this.Frame8BG], 0.5, {autoAlpha: 0}, 19)
        .to(this.Badge2, 0.5, {width: "300px", x: 490, y: 50 }, 19)
        .to(this.greenBG, 0.5, {bottom: 0}, 19)

        .to(this.Buy, 0.25, {autoAlpha: 1, y: 450}, 19.5)
        .to(this.BuyText, 0.25, {autoAlpha: 1, y: 550}, 19.5)

        .to(this.Snap, 0.25, {autoAlpha: 1, y: 650}, 20)
        .to(this.SnapText, 0.25, {autoAlpha: 1, y: 750}, 20)

        .to(this.Upload, 0.25, {autoAlpha: 1, y: 850}, 20.5)
        .to(this.UploadText, 0.25, {autoAlpha: 1, y: 950}, 20.5)


        .to(this.Buy, 0.4, {x: 35, y: 437, width: "100px"}, 22)
        .to(this.BuyText, 0.4, {x: 35, y: 488, width: "78px"}, 22)

        .to(this.Snap, 0.4, {x: 35, y: 531, width: "138px"}, 22)
        .to(this.SnapText, 0.4, {x: 35, y: 584, width: "279px"}, 22)

        .to(this.Upload, 0.4, {x: 35, y: 627, width: "199px"}, 22)
        .to(this.UploadText, 0.4, {x: 35, y: 682, width: "377px"}, 22)

        .to(this.Badge2, 0.4, {width: "300px", x: 291, y: 338 }, 22)

        .to(this.greenBG, 0.55, {bottom: 352, height: "365px", width: "625px", ease:Linear.easeNone}, 22)

        .to(this.Frame10BG, 0.5, {autoAlpha: 1}, 22.75)

    }

    render() {

    let servesCoke = `${API.loc('serves_coca_cola')}`

    let frame6 = Frame6NoCoke;
    let frame8 = Frame8NoCoke;
    let frame10 = Frame10NoCoke;

    if (servesCoke == true || servesCoke == 'true') {
        frame6 = Frame6Coke;
        frame8 = Frame8Coke;
        frame10 = Frame10Coke;
    }

    let bbq6inch = `$${API.loc('bbq_chicken_price_6in')}`
    let bbq12inch = `$${API.loc('bbq_chicken_price_12in')}`
    let buffalo6inch = `$${API.loc('buffalo_chicken_price_6in')}`
    let buffalo12inch = `$${API.loc('buffalo_chicken_price_12in')}`

    return (
        <div className="fan-faves-quad">
            <img src={Frame1Bottom} ref={(node) => this.Frame1Bottom = node } className="bottomSub" />
            <img src={Frame1Top} ref={(node) => this.Frame1Top = node } className="topSub" />
            <img src={Frame1Middle} ref={(node) => this.Frame1Middle = node } />
            <img src={Frame1Text1} ref={(node) => this.Frame1Text1 = node } />
            <img src={Frame1Text2} ref={(node) => this.Frame1Text2 = node } />

            <img src={Frame2Sub} ref={(node) => this.Frame2Sub = node } />
            <img src={Frame2Bottom} ref={(node) => this.Frame2Bottom = node } />
            <img src={Frame2Text} ref={(node) => this.Frame2Text = node } />

            <img src={Frame3Sub} ref={(node) => this.Frame3Sub = node } />
            <img src={Frame3Bottom} ref={(node) => this.Frame3Bottom = node } />
            <img src={Frame3Text} ref={(node) => this.Frame3Text = node } />

            <img src={Frame4Bottom} ref={(node) => this.Frame4Bottom = node } className="bottomSub" />
            <img src={Frame4Top} ref={(node) => this.Frame4Top = node } className="topSub" />
            <img src={Frame4Middle} ref={(node) => this.Frame4Middle = node } />
            <img src={Frame4Text1} ref={(node) => this.Frame4Text1 = node } />
            <img src={Frame4Text2} ref={(node) => this.Frame4Text2 = node } />
            <img src={Frame4Text3} ref={(node) => this.Frame4Text3 = node } />

            <img src={frame6} ref={(node) => this.Frame6BG = node } />
            <img src={Frame6Text} ref={(node) => this.Frame6Text = node } />
            <span className="buffaloPrice" ref={(node) => this.BuffaloPrice = node }>{buffalo6inch}/{buffalo12inch}</span>
            <span className="bbqPrice" ref={(node) => this.BBQPrice = node }>{bbq6inch}/{bbq12inch}</span>

            <div className="whiteFrame" ref={(node) => this.whiteOverlay = node }></div>
            <img src={Badge} ref={(node) => this.Badge = node } />
            <img src={Frame7Text} ref={(node) => this.Frame7Text = node } />

            <div className="whiteFrame" ref={(node) => this.whiteOverlay2 = node }></div>
            <img src={Frame8Text} ref={(node) => this.Frame8Text = node } />
            <img src={frame8} ref={(node) => this.Frame8BG = node} />

            <div className="greenBG" ref={(node) => this.greenBG = node} />
            <img src={Badge} ref={(node) => this.Badge2 = node } />

            <img src={Frame9Text1A} ref={(node) => this.Buy = node } />
            <img src={Frame9Text1B} ref={(node) => this.BuyText = node } />
            <img src={Frame9Text2A} ref={(node) => this.Snap = node } />
            <img src={Frame9Text2B} ref={(node) => this.SnapText = node } />
            <img src={Frame9Text3A} ref={(node) => this.Upload = node } />
            <img src={Frame9Text3B} ref={(node) => this.UploadText = node } />

            <img src={frame10} ref={(node) => this.Frame10BG = node } />
            

        </div>
    )
    }
}
