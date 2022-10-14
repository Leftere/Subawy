import { Component } from 'react'

import timeline from 'animations/timeline'
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

import contentBackground from './images/content-background.jpg'


@neocastDataProvider([
	'reuben_duo_price_6in',
	'reuben_duo_price_12in',
	'turkey_reuben_price_6in',
	'turkey_reuben_price_12in'
])
export default class ReubenDuo2016w8FeaturedPromotion extends Component {
	componentDidMount() {
		timeline([
			[{ rootEl: this.container, state: 'transition:in:frame1' }],
			[{ rootEl: this.container, state: 'transition:in:frame2' }],
			[{ rootEl: this.container, state: 'transition:in:frame3' }],
			[{ rootEl: this.container, state: 'transition:in:frame4' }],
			[{ rootEl: this.container, state: 'transition:in:frame5' }],
			[{ rootEl: this.container, state: 'transition:in:static' }]
		]).play()
	}

	render() {
		const {
			reuben_duo_price_6in,
			reuben_duo_price_12in,
			turkey_reuben_price_6in,
			turkey_reuben_price_12in
		} = this.props


		return (
			<div className='c-FeaturedPromotionReubenDuo2016w8' ref={(node) => this.container = node }>

				<div className='c-FeaturedPromotionReubenDuo2016w8_frame' data-js='frame1'>
					<div className='c-FeaturedPromotionReubenDuo2016w8_frame_content'>
						
						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_background'
							src={frame1}
						/>
						
						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_caption'
							src={frame1Txt}
						/>

					</div>
				</div>

				<div className='c-FeaturedPromotionReubenDuo2016w8_frame' data-js='frame2'>
					<div className='c-FeaturedPromotionReubenDuo2016w8_frame_content'>

						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_background'
							src={frame2}
						/>

						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_caption'
							src={frame2Txt}
						/>

					</div>
				</div>

				<div className='c-FeaturedPromotionReubenDuo2016w8_frame' data-js='frame3'>
					<div className='c-FeaturedPromotionReubenDuo2016w8_frame_content'>

						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_background'
							src={frame3}
						/>

						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_caption'
							src={frame3Txt}
						/>

					</div>
				</div>

				<div className='c-FeaturedPromotionReubenDuo2016w8_frame' data-js='frame4'>
					<div className='c-FeaturedPromotionReubenDuo2016w8_frame_content'>

						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_background'
							src={frame4}
						/>

						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_caption' 
							src={frame4Txt}
						/>

					</div>
				</div>

				<div className='c-FeaturedPromotionReubenDuo2016w8_frame' data-js='frame5'>
					<div className='c-FeaturedPromotionReubenDuo2016w8_frame_content'>

						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_background'
							src={frame5}
						/>

						<img
							className='c-FeaturedPromotionReubenDuo2016w8_frame_caption'
							src={frame5Txt}
						/>

					</div>
				</div>

				<div className='c-FeaturedPromotionReubenDuo2016w8_static' data-js='staticFrame'>
					<div className='c-FeaturedPromotionReubenDuo2016w8_static_inner'>
						
						<div
							className='c-FeaturedPromotionReubenDuo2016w8_static_background'
							style={{ background: `url(${contentBackground})`}}
						/>

						<div className='c-FeaturedPromotionReubenDuo2016w8_static_content'>

							<span className='c-FeaturedPromotionReubenDuo2016w8_callout'>CORNED BEEF REUBEN&nbsp;</span>
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

						<div className='c-FeaturedPromotionReubenDuo2016w8_urgency'>LIMITED TIME ONLY.</div>
					</div>
				</div>

			</div>
		)
	}
}
