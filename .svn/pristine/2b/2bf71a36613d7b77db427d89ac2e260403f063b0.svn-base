import { Component } from 'react'

import transition from 'animations/transition'

import './styles.css'

// Images
import field from './images/field.svg'
import ball from './images/cater-ball.png'
import sub from './images/cater-sub.png'


export default class Catering2016w8InterruptPromotion extends Component {

	componentDidMount() {
		const {
			rootEl,
			frame1End,
			frame2End,
			transitionOutEnd
		} = this


		setTimeout(() => {
			transition({ rootEl, listenEl: frame1End, state:'transition:in:frame1' }).then(() => {
				transition({ rootEl, listenEl: frame2End, state:'transition:in:frame2' }).then(() => {
					window.requestTimeout(() => {
						transition({ rootEl, listenEl: transitionOutEnd, state:'transition:out' })
					}, 4000)
				})
			})
		}, 1000)

	}


	render() {
		const { layout } = this.props

		return (
			<div
				className={(layout === 'L2R') ? 'c-InterruptCatering2016w8' : 'c-InterruptCatering2016w8 c-InterruptCatering2016w8-reverse'}
				ref={(node) => this.rootEl = node }
			>

				<div className='c-InterruptCatering2016w8_field'>
					<div className='c-InterruptCatering2016w8_field_intro'>GO LOOONG!</div>
					<div className='c-InterruptCatering2016w8_field_deal'>PERFECT FOR GAME DAY</div>
					<img className='c-InterruptCatering2016w8_field_grass' src={field} />
				</div>

				<div className='c-InterruptCatering2016w8_field'>
					<div className='c-InterruptCatering2016w8_field_intro'>WITH A GIANT SUB!</div>
					<div className='c-InterruptCatering2016w8_field_details'>ASK YOUR SANDWICH ARTIST<br />OR VISIT SUBWAY.COM<br />TO LEARN MORE</div>
					<img className='c-InterruptCatering2016w8_field_grass' src={field} />
				</div>

				<img className='c-InterruptCatering2016w8_ball' ref={(node) => this.frame1End = node } src={ball} />
				<img className='c-InterruptCatering2016w8_sub'  ref={(node) => this.frame2End = node } src={sub} />

			</div>
		)
	}
}
