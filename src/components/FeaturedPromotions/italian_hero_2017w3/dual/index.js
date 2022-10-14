import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import neocastDataProvider from 'api/neocastDataProvider'

import ItemGroup from 'components/ItemGroup'

import './styles.css'

// Images
import frame1HeaderIntro from './images/frame1-header-intro.jpg'
import frame1Background from './images/frame1-background.jpg'

import optionsHeader from './images/options-header.png'
import optionsHeaderSodium from './images/options-header-sodium.png'

import capicola from './images/capicola.jpg'
import capicolaMeat from './images/capicola_meat.jpg'

import mortedella from './images/mortedella.jpg'
import mortedellaMeat from './images/mortedella_meat.jpg'

import genoa from './images/genoa.jpg'
import genoaMeat from './images/genoa_meat.jpg'

import oilVinegar from './images/oil_vinegar.jpg'
import oilVinegarMeat from './images/oil_vinegar_meat.jpg'

import oregano from './images/oregano.jpg'
import oreganoMeat from './images/oregano_meat.jpg'

import endFrameTop from './images/endframe_top.jpg'
import endFrameTopSodium from './images/endframe_top_sodium.jpg'
import endFramebody from './images/endframe_body.jpg'

import legalImage from './images/legal.png'
import sodiumIcon from './images/icon_sodium.png'


@neocastDataProvider([
	'store_plus_sodium',
	'italian_hero_price_6in',
	'italian_hero_price_12in'
])
export default class ItalianHero2017w3DualPlayer extends Component {

	constructor(props) {
		super(props)

		/**
		 * Set images based on sodium
		 */
		this.frame4Options = optionsHeader
		this.endFrameTop = endFrameTop

		if (this.props.store_plus_sodium) {
			this.frame4Options = optionsHeaderSodium
			this.endFrameTop = endFrameTopSodium
		}
	}


	componentDidMount() {
		const {
			tl1,
			tl1_frame1,
			tl1_frame2,
			tl2,
			tl2_frame1,
			tl2_frame2,
			tl2_frame3,
			tl2_frame4,
			tl2_frame5,
			tl2_frame6,
			tl3,
			tl3_frame1,
			tl3_frame2,
			tl3_frame3,
			tl3_frame4,
			tl4,
			tl4_frame1,
			tl4_frame2,
			tl4_frame3,
			tl4_frame4
		} = this


		new TimelineMax()
			// reset all elements on the resting frame so we can start over from scratch
			
			//.set(tl1,        { opacity : 0})
			//.set(tl1_frame1, { opacity : 0})
			//.set(tl1_frame2, { opacity : 0})
			.set(tl2,        { opacity : 0 })
			.set(tl2_frame1, { opacity : 0, left:'-50' })
			//.set(tl2_frame2, { opacity : 0, right:'-1301' })
			.set(tl2_frame2, { opacity : 1})
			//.set(tl2_frame3, { opacity : 0, left: '-1224' })
			.set(tl2_frame3, { opacity : 1})
			.set(tl2_frame4, { opacity : 0, right:'-50' })
			.set(tl2_frame5, { opacity : 0, left:'-50'})
			//.set(tl2_frame6, { opacity : 0, right:'-1301'})
			.set(tl2_frame6, { opacity : 1})
			.set(tl3,        { opacity : 0 })
			.set(tl3_frame1, { opacity : 0, left:'-50' })
			//.set(tl3_frame2, { opacity : 0, right:'-1242' })
			.set(tl3_frame2, { opacity : 1 })
			.set(tl3_frame3, { opacity : 1})
			//.set(tl3_frame4, { opacity : 0, right:'-1079' })
			.set(tl3_frame4, { opacity : 0, right: '-50'})
			.set(tl4,        { opacity : 0 })
			.set(tl4_frame1, { opacity : 0 })
			.set(tl4_frame2, { opacity : 0, top:50})
			.set(tl4_frame3, { opacity : 0,})
			.set(tl4_frame4, { opacity : 0,})			

			// Frame 1 timeline
			.to(tl1, .5, { opacity: 1 })
			
			.to(tl1_frame1, 2, { opacity: 1 }, 0.5)
			
			.to(tl1_frame2, 1, { opacity: 1}, 0.5)
			
			.to(tl1, .5, { opacity: 0, top:'1'}, 5)
			
			// Frame 2 timeline
			.to(tl2, .5, { opacity: 1 , top:1}, 5.2)
			
			
			.to(tl2_frame2, 1, { opacity: 1, right:0, ease:Power2.easeOut }, 5.5)
			.to(tl2_frame1, 1, { opacity: 1, left:0 }, 7.5)
			
			
			.to(tl2_frame3, 1, { opacity: 1, left:0, ease:Power2.easeOut }, 8.5)	
			.to(tl2_frame4, 1, { opacity: 1, right:0, ease:Power2.easeOut }, 9.5)
			
						
			.to(tl2_frame6, 1, { opacity: 1, right:0, ease:Power2.easeOut }, 10.5)
			.to(tl2_frame5, 1, { opacity: 1, left:0, ease:Power2.easeOut }, 11.5)
			
			
			.to(tl2, 1, { opacity: 1 }, 13.5)
			
			
			// Frame 3 timeline
			.to(tl3, .5, { opacity: 1 }, 13.5)
			
			.to(tl3_frame2, 1, { opacity: 1, right:0, ease:Power2.easeOut }, 14.5)
			.to(tl3_frame1, 1, { opacity: 1, left:0, ease:Power2.easeOut }, 15.5)
			
			.to(tl3_frame3, 1, { opacity: 1, left:0, ease:Power2.easeOut }, 16.5)
			.to(tl3_frame4, 1, { opacity: 1, right:0, ease:Power2.easeOut }, 17.5)
			

			.to(tl3_frame4, .5, { opacity: 1 }, 19.5)				
			
			// Frame 4 timeline
			.to(tl4, .5, { opacity: 1 }, 19.5)
			.to(tl3, .1, { opacity: 0 }, 1)
			.to(tl4_frame1, 1, { opacity: 1, ease:Power2.easeOut }, 20.5)
			
			.to(tl4_frame2, .5, { opacity: 1 , top:1, ease:Power2.easeOut}, 21.5)	
			.to(tl4_frame3, .5, { opacity: 1, ease:Power2.easeOut }, 21.5)	
			.to(tl4_frame4, .5, { opacity: 1, ease:Power2.easeOut }, 21.5)
	}


	render() {
		const {
			store_plus_sodium,
			italian_hero_price_6in,
			italian_hero_price_12in
		} = this.props


		return (
			<div className='dual-player-promo c-ItalianHero2017w3FeaturedPromotion'>

				<div className='c-FeatPromoItalianHero2017w3_frame'>

					<div data-js='tl1' ref={(node) => this.tl1 = node} style={{ position: 'absolute', width: 1920, height: 1080 }}>
						<div style={{ display: 'block' }}>

							<div data-js='tl1_frame1' ref={(node) => this.tl1_frame1 = node} style={{ position: 'relative', left: 0, opacity: 1 }}>
								<img src={frame1HeaderIntro} />
							</div>
							
							<div data-js='tl1_frame2' ref={(node) => this.tl1_frame2 = node} style={{ position: 'relative', opacity: 0 }}>
								<img src={frame1Background} />
							</div>

						</div>
					</div>


					<div data-js='tl2' ref={(node) => this.tl2 = node} style={{ position: 'absolute', width: 1920, height: 1080 }}>
						<div style={{ height: 335, display: 'block', backgroundColor: '#4c006a' }}>
							<div data-js='tl2_frame1' ref={(node) => this.tl2_frame1 = node} style={{ position: 'absolute', left: 0, opacity: 0 }}>
								<img src={capicola} />
							</div>

							<div data-js='tl2_frame2' ref={(node) => this.tl2_frame2 = node} style={{ position: 'absolute', right: 0, borderLeft: '10px solid #fff', opacity: 0, backgroundColor: '#4c006a' }}>
								<img src={capicolaMeat} />
							</div>
						</div>
						
						<div style={{ borderTop: '10px solid #fff', height: 398, display: 'block', backgroundColor: '#4c006a' }}>
							<div data-js='tl2_frame3' ref={(node) => this.tl2_frame3 = node} style={{ position: 'absolute', left: 0, backgroundColor: '#4c006a', borderRight: '10px solid #fff' }}>
								<img src={mortedellaMeat} />
							</div>

							<div data-js='tl2_frame4' ref={(node) => this.tl2_frame4 = node} style={{ position: 'absolute', right: 0, backgroundColor: '#4c006a' }}>
								<img src={mortedella} />
							</div>			
						</div>
						
						<div style={{ borderTop: '10px solid #fff', height: 348, display: 'block', backgroundColor: '#4c006a' }}>
							<div data-js='tl2_frame5' ref={(node) => this.tl2_frame5 = node} style={{ position: 'absolute', left: 0 }}>
								<img src={genoa} />
							</div>

							<div data-js='tl2_frame6' ref={(node) => this.tl2_frame6 = node} style={{ position: 'absolute', right: 0, borderLeft: '10px solid #fff' }}>
								<img src={genoaMeat} />
							</div>
						</div>		
					</div>
					
					
					<div data-js='tl3' ref={(node) => this.tl3 = node} style={{ position: 'absolute', width: 1920, height: 1080 }}>
						<div style={{ borderBottom: '10px solid #fff', height: 530, backgroundColor: '#4c006a' }}>
							<div data-js='tl3_frame1' ref={(node) => this.tl3_frame1 = node} style={{ position: 'absolute', left: 0, opacity: 0, backgroundColor: '#4c006a' }}>
								<img src={oilVinegar} />
							</div>
							
							<div data-js='tl3_frame2' ref={(node) => this.tl3_frame2 = node} style={{ position: 'absolute', right: 0, opacity: 0, backgroundColor: '#4c006a' }}>
								<img src={oilVinegarMeat} />
							</div>
						</div>

						<div style={{ height: 540, display: 'block', backgroundColor: '#4c006a' }}>
							<div data-js='tl3_frame3' ref={(node) => this.tl3_frame3 = node} style={{ position: 'absolute', left: 0, opacity: 0, backgroundColor: '#4c006a' }}>
								<img src={oregano} />
							</div>
							
							<div data-js='tl3_frame4' ref={(node) => this.tl3_frame4 = node} style={{ position: 'absolute', right: 0, opacity: 0, backgroundColor: '#4c006a' }}>
								<img src={oreganoMeat} />
							</div>
						</div>
					</div>


					<div data-js='tl4' ref={(node) => this.tl4 = node} style={{ position: 'absolute', width: 1920, height: 1080 }}>
						<div data-js='tl4_frame1' ref={(node) => this.tl4_frame1 = node} style={{ backgroundColor: '#4c006a' }}>
							<img src={this.endFrameTop} />
						</div>
						
						<div data-js='tl4_frame2' ref={(node) => this.tl4_frame2 = node} style={{ backgroundColor: '#4c006a' }}>
							<img src={endFramebody} style={{ marginTop: -15 }} />
						</div>

						<div data-js='tl4_frame3' ref={(node) => this.tl4_frame3 = node} style={{ position: 'absolute', bottom: 20, right: -70 }}>
							
							<img className='c-FeatPromoItalianHero2017w3_item_header' src={this.frame4Options} />

							<div style={{ fontSize: '2rem', width: 700 }}>

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
										style={{ position: 'absolute', right: 95, top: 200 }}
										src={sodiumIcon}
									/>
								}
							</div>

						</div>
						
						<div data-js='tl4_frame4' ref={(node) => this.tl4_frame4 = node}>
							<div style={{ position: 'absolute', bottom: 35, left: 60, zIndex: 50 }}>
								<img src={legalImage} />
							</div>
						</div>

					</div>
					
				</div>


			</div>
		)
	}
}