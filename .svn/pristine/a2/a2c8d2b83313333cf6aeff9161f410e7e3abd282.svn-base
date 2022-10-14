import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'


// Images
import frame1 from './images/frame1.jpg'
import frame1Txt from './images/frame1-text.png'

import frame2 from './images/frame2.jpg'
import frame2Txt from './images/frame2-text.png'

import frame3 from './images/frame3.jpg'
import frame3Txt from './images/frame3-text.png'

import frame4 from './images/frame4.jpg'
import frame4Txt from './images/frame4-text.png'

import frame5 from './images/frame5.jpg'
import frame5Txt from './images/frame5-text.png'

import frame6 from './images/frame6.jpg'
import frame6Txt from './images/frame6-text.png'

import frame7 from './images/frame7.jpg'


@neocastDataProvider([
	'reuben_duo_price_6in',
	'reuben_duo_price_12in',
	'turkey_reuben_price_6in',
	'turkey_reuben_price_12in'
])
export default class ReubenDuo2016w8FeaturedPromotion extends Component {

	componentDidMount() {
		const fadeInTime  = 0.4
		const frameLength = 0.3
		const textInTime = 0.5
		const delayTime = 0.4

		new TimelineMax({ delay: 1.5 })
			.set(this.frame2, {opacity : 0 })
			.set(this.frame3, {opacity : 0 })
			.set(this.frame4, {opacity : 0 })
			.set(this.frame5, {opacity : 0 })
			.set(this.frame6, {opacity : 0 })
			.set(this.frame7, {opacity : 0 })

			.to(this.frame1, fadeInTime, {opacity : 1})
			.from(this.frame1Text, textInTime, {opacity : 1, top:'2000px', delay: delayTime})

			.to(this.frame2, fadeInTime, {opacity : 1, delay: 2.5})
			.from(this.frame2Text, textInTime, {opacity : 1, left:'2000px', delay: delayTime})
			.to(this.frame1, frameLength, {opacity : 0, delay : 1})

			.to(this.frame3, fadeInTime, {opacity : 1, delay : 0.5})
			.from(this.frame3Text, textInTime,  {opacity : 1, top:'-500px', delay: delayTime})
			.to(this.frame2, frameLength, {opacity : 0, delay : 0.5})
			
			.to(this.frame4, fadeInTime, {opacity : 1, delay : 0.5})
			.from(this.frame4Text, textInTime,  {opacity : 1, top:'2000px', delay: delayTime})
			.to(this.frame3, frameLength, {opacity : 0, delay : 0.5})
			
			.to(this.frame5, fadeInTime, {opacity : 1, delay : 0.5})
			.from(this.frame5Text, textInTime,  {opacity : 1, left:'2000px', delay: delayTime})
			.to(this.frame4, frameLength, {opacity : 0, delay : 0.5})
			
			//.to(ui.frame6, fadeInTime, {opacity : 1, delay : 0.5})
			//.from(ui.frame6Text, textInTime,  {opacity : 1, top:'-500px', delay:0.5})
			//.to(ui.frame5, frameLength, {opacity : 0, delay : 0.5})
			
			.to(this.frame7, 2.8, {opacity : 1})
			.to(this.frame5, 2.8, {opacity : 0})
	}


	render() {
		const {
			reuben_duo_price_6in,
			reuben_duo_price_12in,
			turkey_reuben_price_6in,
			turkey_reuben_price_12in
		} = this.props


		return (
			<div className='dual-player-promo c-FeaturedPromotionReubenDuo2016w8'>


				<div className="c-FeaturedPromotionReubenDuo2016w8_frame c-FeaturedPromotionReubenDuo2016w8_frame-1" data-js="frame1" style={{ background: `url(${frame1}` }} ref={(node) => this.frame1 = node }>
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame_background" data-js="frame1Background" src={frame1} />
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame1_text"      data-js="frame1Text"       src={frame1Txt} ref={(node) => this.frame1Text = node } />
				</div>

				<div className="c-FeaturedPromotionReubenDuo2016w8_frame c-FeaturedPromotionReubenDuo2016w8_frame-2" data-js="frame2" style={{ background: `url(${frame2}` }} ref={(node) => this.frame2 = node }>
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame_background" data-js="frame2Background" src={frame2} />
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame2_text"      data-js="frame2Text"       src={frame2Txt} ref={(node) => this.frame2Text = node } />
				</div>

				<div className="c-FeaturedPromotionReubenDuo2016w8_frame c-FeaturedPromotionReubenDuo2016w8_frame-3" data-js="frame3"  style={{ background: `url(${frame3}` }} ref={(node) => this.frame3 = node }>
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame_background" data-js="frame3Background" src={frame3} />
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame3_text"      data-js="frame3Text"       src={frame3Txt} ref={(node) => this.frame3Text = node } />
				</div>

				<div className="c-FeaturedPromotionReubenDuo2016w8_frame c-FeaturedPromotionReubenDuo2016w8_frame-4" data-js="frame4" style={{ background: `url(${frame4}` }} ref={(node) => this.frame4 = node }>
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame_background" data-js="frame4Background" src={frame4} />
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame4_text"      data-js="frame4Text"       src={frame4Txt} ref={(node) => this.frame4Text = node } />
				</div>

				<div className="c-FeaturedPromotionReubenDuo2016w8_frame c-FeaturedPromotionReubenDuo2016w8_frame-5" data-js="frame5"  style={{ background: `url(${frame5}` }} ref={(node) => this.frame5 = node }>
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame_background" data-js="frame5Background" src={frame5} />
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame5_text"      data-js="frame5Text"       src={frame5Txt} ref={(node) => this.frame5Text = node } />
				</div>

				<div className="c-FeaturedPromotionReubenDuo2016w8_frame c-FeaturedPromotionReubenDuo2016w8_frame-6" data-js="frame6" style={{ background: `url(${frame6}` }} ref={(node) => this.frame6 = node }>
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame_background" data-js="frame6Background" src={frame6} />
					<img className="c-FeaturedPromotionReubenDuo2016w8_frame6_text"      data-js="frame6Text"       src={frame6Txt} ref={(node) => this.frame6Text = node } />
				</div>


				<div
					className="c-FeaturedPromotionReubenDuo2016w8_frame c-FeaturedPromotionReubenDuo2016w8_frame-7"
					data-js="frame7"
					ref={(node) => this.frame7 = node }
					style={{ background: `url(${frame7})`}}
				>
					<div className="c-FeaturedPromotionReubenDuo2016w8_content" data-js="frame7Pricing">
						
						<div className="c-FeaturedPromotionReubenDuo2016w8_resting_content">

							<span className="c-FeaturedPromotionReubenDuo2016w8_callout">CORNED BEEF REUBEN&nbsp;</span>
							<span className='c-FeaturedPromotionReubenDuo2016w8_calories'>470/940 cal</span><br />

							<span style={{ display: 'inline', marginRight: 7 }}>A hearty portion of </span>
							<span className='c-FeaturedPromotionReubenDuo2016w8_value' style={{ display: 'inline' }}> CORNED BEEF</span><br />
							<span className='c-FeaturedPromotionReubenDuo2016w8_sizes'>6" ${reuben_duo_price_6in} &nbsp;&nbsp;&nbsp;&nbsp; FOOTLONG ${reuben_duo_price_12in}</span><br />

							<span className='c-FeaturedPromotionReubenDuo2016w8_callout'>TURKEY REUBEN&nbsp;</span>
							<span className='c-FeaturedPromotionReubenDuo2016w8_calories'>430/860 cal </span><br />

							<span style={{ display: 'inline', marginRight: 7 }}>Double meat </span>
							<span style={{ display: 'inline' }} className='c-FeaturedPromotionReubenDuo2016w8_value'>TURKEY</span><br />
							<span style={{ display: 'inline' }} className='c-FeaturedPromotionReubenDuo2016w8_sizes'>6" ${turkey_reuben_price_6in} &nbsp;&nbsp;&nbsp;&nbsp; FOOTLONG ${turkey_reuben_price_12in}</span><br />
						</div>
					</div>

					<div className="c-FeaturedPromotionReubenDuo2016w8_urgency">LIMITED TIME ONLY.</div>
				</div>

			</div>
		)
	}
}
