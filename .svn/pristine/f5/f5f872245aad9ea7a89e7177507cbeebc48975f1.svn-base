import { Component } from 'react'

import transition from 'animations/transition'

import subImage from './images/sub.png'
import './styles.css'


export default class Deluxe2016w8InterruptPromotion extends Component {

	componentDidMount() {
		const {
			rootEl,
			listenEl
		} = this

		setTimeout(() => {
			transition({ rootEl, listenEl, state: 'transition:in' }).then(() => {
				window.requestTimeout(() => {
					transition({ rootEl, state: 'transition:out' })
				}, 6500)
			})
		}, 1000)
	}

	render() {
		return (
			<div className='c-InterruptDeluxe2016w8' ref={(node) => this.rootEl = node}>

				<img className='c-InterruptDeluxe2016w8_sub' src={subImage} />

				<div className='c-InterruptDeluxe2016w8_proposition'>
					MAKE YOUR SUB <br /> 
					<span>DELUXE</span>
				</div>

				<div className='c-InterruptDeluxe2016w8_deal' data-js='listenToOnIn' ref={(node) => this.listenEl = node}>
					GET 50% <br />
					<span>MORE MEAT</span>
				</div>

				<div className='c-InterruptDeluxe2016w8_legal'>
					*Can not be combined with double meat. Excludes breakfast sandwiches.
				</div>

			</div>
		)
	}
}
