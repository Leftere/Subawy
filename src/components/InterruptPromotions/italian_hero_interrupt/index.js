import { Component } from 'react'

import timeline from 'animations/timeline'

import './styles.css'

// Images
import heroImg from './images/hero.jpg'
import introImg from './images/intro.png'
import nameImg from './images/name.png'


export default class ItalianHero2017w3InterruptPromotion extends Component {
	componentDidMount() {
		const {
			rootEl,
			introCaption,
			nameCaption
		} = this


		setTimeout(() => {
			timeline([
				[
					{ rootEl, state: 'transition:in' }
				],
				[
					{ rootEl: introCaption, state: '' },
					{ rootEl: nameCaption, state: 'transition:in' }
				],
				[
					{ rootEl, state: 'transition:out' }
				]
			]).play()
		}, 1000)
	}


	render() {
		const { layout } = this.props

		return (
			<div
				className={(layout === 'L2R') ? 'c-InterruptItalianHero2017w3' : 'c-InterruptItalianHero2017w3 c-InterruptItalianHero2017w3-reverse'}
				ref={(node) => this.rootEl = node }
			>

				<img
					className='c-InterruptItalianHero2017w3_message'
					src={heroImg}
				/>

				<div className='c-InterruptItalianHero2017w3_caption'>
					<img
						className='c-InterruptItalianHero2017w3_caption_text'
						ref={(node) => this.introCaption = node}
						data-ui-state='transition:in'
						src={introImg}
					/>
				</div>

				<div className='c-InterruptItalianHero2017w3_caption'>
					<img
						className='c-InterruptItalianHero2017w3_caption_text'
						ref={(node) => this.nameCaption = node}
						src={nameImg}
					/>
				</div>

			</div>
		)
	}
}
