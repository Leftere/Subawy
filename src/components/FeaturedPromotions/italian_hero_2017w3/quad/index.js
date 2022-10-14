import { Component } from 'react'

import timeline from 'animations/timeline'

import ItemGroup from 'components/ItemGroup'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'


// Images
import headerIntro from './images/header-intro.png'
import headerRest from './images/header-rest.png'
import headerRestSodium from './images/header-rest-sodium.png'

import optionsHeader from './images/options-header.png'
import optionsHeaderSodium from './images/options-header-sodium.png'

import background from './images/bg.jpg'

import legal from './images/legal.png'

import slices1_1Title from './images/slices1_1-title.jpg'
import slices1_1Bg from './images/slices1_1-bg.png'
import slices1_2Title from './images/slices1_2-title.jpg'
import slices1_2Bg from './images/slices1_2-bg.png'
import slices1_3Title from './images/slices1_3-title.jpg'
import slices1_3Bg from './images/slices1_3-bg.png'
import slices2_1Title from './images/slices2_1-title.jpg'
import slices2_1Bg from './images/slices2_1-bg.png'
import slices2_2Title from './images/slices2_2-title.jpg'
import slices2_2Bg from './images/slices2_2-bg.png'

import sodiumIcon from './images/icon_sodium.png'


@neocastDataProvider([
	'store_plus_sodium',
	'italian_hero_price_6in',
	'italian_hero_price_12in'
])
export default class ItalianHero2017w3FeaturedPromotion extends Component {

	constructor(props) {
		super(props)

		const {
			store_plus_sodium
		} = this.props

		/**
		 * Conditional header if you have sodium
		 */
		this.headerRest = headerRest
		this.optionsHeader = optionsHeader
		if (store_plus_sodium) {
			this.headerRest = headerRestSodium
			this.optionsHeader = optionsHeaderSodium
		}

	}


	componentDidMount() {
		const {
			// CONTENT ELEMENTS
			content,
			introHeader,
			restHeader,
			// curtain,
			background,
			itemOptions,
			legal,

			// SLICES GROUP 1
			slices1_1Init,
			// slices1_1End,
			slices1_2Init,
			// slices1_2End,
			slices1_3Init,
			// slices1_3End,

			// SLICES GROUP 2
			slices2_1Init,
			// slices2_1End,
			slices2_2Init,
			// slices2_2End
		}  = this


		const preIntro = timeline([
			[
				// FRAME 1: background pans backwards, item options and legal text fade in
				{rootEl: restHeader,  state: 'transition:in' },
				{rootEl: itemOptions, state: 'transition:in' },
				{rootEl: legal,       state: 'transition:in' }
			],
			[
				// FRAME 2: background pans forward
				{rootEl: background,  state: 'transition:in'}
			]
		]),
		intro = timeline([
			[
				//{rootEl: background,  state: 'transition:out'},
				// FRAME 1: make sure item options and legal are hidden
				{rootEl: itemOptions, state: 'transition:out'},
				{rootEl: legal,       state: 'transition:out'},
				// slide the rest header out, the intro header in, and the content curtain down
				{rootEl: restHeader,  state: 'transition:reset' },
				{rootEl: introHeader, state: 'transition:in:delay:sm' }
			]
		]),
		slicesGroupOne = timeline([
			[
				// FRAME 1: slices slide in - images panning
				{rootEl: slices1_1Init, state: 'transition:in:delay:sm'},
				{rootEl: slices1_2Init, state: 'transition:in:delay:sm'},
				{rootEl: slices1_3Init, state: 'transition:in:delay:sm'}
			]
		]),
		slicesGroupTwo = timeline([
			[
				// FRAME 1: slices slide in - images panning
				{rootEl: slices2_1Init, state: 'transition:in:delay:lg'},
				{rootEl: slices2_2Init, state: 'transition:in:delay:lg'}
			],
			[
				// FRAME 2: switch headers in the background
				{rootEl: introHeader,   state: 'transition:out'},
				{rootEl: restHeader,    state: 'transition:in' },
				// slices slide out - images panning
				{rootEl: slices1_1Init, state: 'transition:out:delay:md'},
				{rootEl: slices1_2Init, state: 'transition:out:delay:md'},
				{rootEl: slices1_3Init, state: 'transition:out:delay:md'}
			],
			[
				// FRAME 3: slices slide out - images panning
				{rootEl: slices2_1Init, state: 'transition:out'},
				{rootEl: slices2_2Init, state: 'transition:out'}
			]
		]),
		outro = timeline([
			[
				// FRAME 1: background pans backwards, item options and legal text fade in
				{rootEl: background,  state: 'transition:out'},
				{rootEl: itemOptions, state: 'transition:in' },
				{rootEl: legal,       state: 'transition:in' }
			]
		])

		// only need this transition for the initial fade in, and we don't need to know when it finishes
		// use a request timeout to ensure the transition isn't pulled into the initial render
		window.requestTimeout(() => { 
			content.setAttribute('data-ui-state', 'transition:in') 
		}, 400)


		preIntro.play()
			.then(() => intro.play())
			.then(() => slicesGroupOne.play())
			.then(() => slicesGroupTwo.play())
			.then(() => outro.play())
			.then(() => {
				// reset the group of two slices to their initial position
				background.removeAttribute('data-ui-state')

				// reset initial group of slices
				slices1_1Init.removeAttribute('data-ui-state')
				slices1_2Init.removeAttribute('data-ui-state')
				slices1_3Init.removeAttribute('data-ui-state')

				slices2_1Init.removeAttribute('data-ui-state')
				slices2_2Init.removeAttribute('data-ui-state')
			})
	}


	render() {
		const {
			store_plus_sodium,
			italian_hero_price_6in,
			italian_hero_price_12in
		} = this.props

		return (
			<div className='quad-player c-FeatPromoItalianHero2017w3'>

				<div className='c-FeatPromoItalianHero2017w3_section'>

					<div
						className='c-FeatPromoItalianHero2017w3_content'
						ref={(node) => this.content = node}
					>

						<img
							className='c-FeatPromoItalianHero2017w3_content_header'
							src={headerIntro}
							ref={(node) => this.introHeader = node }
						/>

						<img
							className='c-FeatPromoItalianHero2017w3_content_header'
							src={this.headerRest}
							ref={(node) => this.restHeader = node }
						/>

						<div
							className='c-FeatPromoItalianHero2017w3_content_curtain'
							data-js='curtain'
							ref={(node) => this.curtain = node }
						/>

						<img
							className='c-FeatPromoItalianHero2017w3_content_background'
							src={background}
							ref={(node) => this.background = node }
						/>
						
						<div
							className='c-FeatPromoItalianHero2017w3_content_item'
							ref={(node) => this.itemOptions = node }
						>

							<img
								className='c-FeatPromoItalianHero2017w3_item_header'
								src={this.optionsHeader}
							/>

							<div
								className='c-FeatPromoItalianHero2017w3_item_options'
								ref={(node) => this.itemOptionsRegion = node }
							>

								{italian_hero_price_6in && italian_hero_price_12in &&
									<ItemGroup
										price6={italian_hero_price_6in}
										cal6={'550'}
										price12={italian_hero_price_12in}
										cal12={'1100'}
									/>
								}

								{store_plus_sodium &&
									<img
										className='sodium'
										src={sodiumIcon}
									/>
								}

							</div>
						</div>

						<div
							className='c-FeatPromoItalianHero2017w3_content_legal'
							ref={(node) => this.legal = node }
						>
							<img src={legal} />
						</div>

					</div>
				</div>


				<div className='c-FeatPromoItalianHero2017w3_section'>
					<div
						className='c-FeatPromoItalianHero2017w3_slice'
						ref={(node) => this.slices1_1Init = node }
					>
						<div className='c-FeatPromoItalianHero2017w3_slice_title'>

							<img
								className='c-FeatPromoItalianHero2017w3_slice_title_content'
								src={slices1_1Title}
							/>

						</div>

						<div
							className='c-FeatPromoItalianHero2017w3_slice_bg'
							ref={(node) => this.slices1_1End = node }
						>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_bg_img'
								src={slices1_1Bg}
							/>
						</div>
					</div>

					<div
						className='c-FeatPromoItalianHero2017w3_slice'
						ref={(node) => this.slices1_2Init = node }
					>
						<div className='c-FeatPromoItalianHero2017w3_slice_title'>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_title_content'
								src={slices1_2Title}
							/>
						</div>
						<div
							className='c-FeatPromoItalianHero2017w3_slice_bg'
							ref={(node) => this.slices1_2End = node }
						>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_bg_img'
								src={slices1_2Bg}
							/>
						</div>
					</div>
					<div
						className='c-FeatPromoItalianHero2017w3_slice'
						data-js='slices1_3Init'
						ref={(node) => this.slices1_3Init = node }
					>
						<div className='c-FeatPromoItalianHero2017w3_slice_title'>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_title_content'
								src={slices1_3Title}
							/>
						</div>
						<div
							className='c-FeatPromoItalianHero2017w3_slice_bg'
							ref={(node) => this.slices1_3End = node }
						>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_bg_img'
								src={slices1_3Bg}
							/>
						</div>
					</div>
				</div>


				<div className='c-FeatPromoItalianHero2017w3_section'>
					<div
						className='c-FeatPromoItalianHero2017w3_slice'
						ref={(node) => this.slices2_1Init = node }
					>
						<div className='c-FeatPromoItalianHero2017w3_slice_title'>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_title_content'
								src={slices2_1Title}
							/>
						</div>
						<div
							className='c-FeatPromoItalianHero2017w3_slice_bg'
							ref={(node) => this.slices2_1End = node }
						>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_bg_img'
								src={slices2_1Bg}
							/>
						</div>
					</div>
					<div
						className='c-FeatPromoItalianHero2017w3_slice'
						ref={(node) => this.slices2_2Init = node }
					>
						<div className='c-FeatPromoItalianHero2017w3_slice_title'>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_title_content'
								src={slices2_2Title}
							/>
						</div>
						<div
							className='c-FeatPromoItalianHero2017w3_slice_bg'
							ref={(node) => this.slices2_2End = node }
						>
							<img
								className='c-FeatPromoItalianHero2017w3_slice_bg_img'
								src={slices2_2Bg}
							/>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
