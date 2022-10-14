import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import isNil from 'lodash/isNil'
import API from 'api'

import imgSalad from './images/salad.png'

import './styles.css'

@neocastDataProvider([
  'chopped_salad_addon_price',
  'chopped_salad_price',
  'chopped_salad_type'
])
export default class ChoppedSalads extends Component {

	render() {
    const {
      chopped_salad_addon_price,
      chopped_salad_price,
      chopped_salad_type } = this.props;

    // Default values
    let saladPriceType = "addon"
    let saladPrice = chopped_salad_addon_price // Old key by default
    let saladPriceFormatted = "$"

    let hasNewSaladPriceType = !isNil(API.loc('chopped_salad_type'))

    // We added the "addon" and "full" salad price types
    // addon : Put a "+" at the beginning to show the value is added
    // full : The full set price, useful for fixed-price promotions
    if (hasNewSaladPriceType)
    {
      saladPriceType = chopped_salad_type
      saladPrice = chopped_salad_price
    }

    // Prepend the needed prefixes
    saladPriceFormatted += saladPrice
    if (saladPriceType == "addon") saladPriceFormatted = "+ " + saladPriceFormatted

    return (
			<div className='choppedSalad'>
				<div className='c-Addon_info'>
					<div className='c-Addon_heading'>
						GET IT <br/>CHOPPED.
					</div>

					{chopped_salad_addon_price &&
						<div className='saladType'>{saladPriceFormatted}</div>
					}

					<div className='c-Addon_subheading makeAny'>
						Make any 6" sub a salad.
					</div>

					<div className='c-Addon_content'>

						<div className='c-Addon_caption c-Addon_caption-lift'>
							Deduct 170 cal per 6" sub
						</div>

						<div className='saladAvailable'>
							Salad dressing is <br/>available
							upon request.
							<span className='c-Addon_caption nowrap'>
								0-220 added cal
							</span>
						</div>
					</div>
				</div>
        <img className='salad' src={imgSalad} />
			</div>
		);
	}
}
