import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'

import PlaylistDJ from '../PlaylistDJ'

// Components
import MakeItAMeal from '../MakeItAMeal'
import SidesMenu from '../SidesMenu'
import DrinksMenu from '../DrinksMenu'

import './styles.css'

// Playlists
import rotatingPromo from './playlists/rotatingPromo'
import interruptives from './playlists/interrupts'


@neocastDataProvider([
  'serves_coca_cola'
])
export default class ScreenMakeAMeal extends Component {

  static propTypes = {
    player: PropTypes.oneOf(['dual', 'quad'])
  }


  render() {
    return (
      <div className={this.props.screenClass}>

        {/* Screen content */}
        <div className={this.props.screenClass}>

          <div className='makeAMealMain'>

            {/* Make a Meal */}
            <section className='make-a-meal-screen-main-row'>
              <MakeItAMeal />
            </section>

            {/* Drinks */}
            <section className='make-a-meal-screen-main-row'>
              <DrinksMenu />
            </section>

            {/* Sides */}
            <section className='make-a-meal-screen-main-row'>
              <SidesMenu />
            </section>

            {/* Legal footer */}
            <div className='c-Menus_footer'>

              <div className='c-Promotion_item-tax'>
                Prices do not include any applicable taxes.
              </div>

              <div className='txt-copyright txt-default'>
                Subway<sup>&reg;</sup> is a Registered Trademark of Subway IP Inc. Menu Panels ©2017 Subway IP Inc.
              </div>
            </div>

          </div>

          <section className='make-a-meal-screen-secondary'>

            <PlaylistDJ
              {...this.props}
              playlists={rotatingPromo}
              queued={false}
            />

          </section>
        </div>

        {/* Full screen interruptive content */}
        {this.props.player === 'quad' &&
          <div className='l-screen-content l-interrupt l-screen-content-int'>

            <PlaylistDJ
              playlists={interruptives}
            />

          </div>
        }

      </div>
    );
  }
}
