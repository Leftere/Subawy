import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'

import CompleteYourMealStatic from './static'
import CompleteYourMealAnimated from './animated'


@neocastDataProvider([
  'serves_coca_cola',
  'serves_bottled_drinks'
])
export default class CompleteYourMealw4 extends Component {
  static propTypes = {
    player: PropTypes.oneOf(['dual', 'quad'])
  }

  render() {
    const {
      player,
      serves_coca_cola,
      serves_bottled_drinks
    } = this.props;


    //if (!serves_coca_cola || !serves_bottled_drinks) {
      return <CompleteYourMealStatic />
    //}

    //return <CompleteYourMealAnimated {...this.props} />
  }
}
