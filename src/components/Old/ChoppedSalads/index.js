import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'


@neocastDataProvider([
	'chopped_salad_addon_price'
])
export default class ChoppedSalads extends Component {

	render() {
		const { chopped_salad_addon_price } = this.props;


		return (
			<div className='choppedSalad'>
				<div className='c-Addon_info'>
					<div className='c-Addon_heading'>
						Chopped Salads
					</div>

					{chopped_salad_addon_price &&
						<div className='c-Addon_subheading saladPrice'>+&nbsp;${chopped_salad_addon_price}</div>
					}

					<div className='c-Addon_subheading makeAny'>
						Make any 6" sub a salad.
					</div>

					<div className='c-Addon_content'>

						<div className='c-Addon_caption c-Addon_caption-lift'>
							Deduct 170 cal per 6" sub
						</div>

						<div className='saladAvailable'>
							Salad dressing is available<br/>
							upon request.
							<span className='c-Addon_caption nowrap'>
								0-220 added cal
							</span>
						</div>

					</div>

				</div>
			</div>
		);
	}
}
