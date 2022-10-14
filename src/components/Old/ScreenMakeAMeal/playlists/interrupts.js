import { Component } from 'react'

import MealDealInterruptive from 'components/InterruptPromotions/meal_deal_interrupt'


class EmptyPlaceholder extends Component {
  render = () => <div />
}


/**
 * Playlist conditions
 */
import {
  keyIsValue
} from 'components/PlaylistDJ/conditions'


export default [
  {
    id: '0f81e3a6-a469-49de-a6d9-ba1d8a1666ca',
    conditions: [
      keyIsValue('menu_interrupt_back', 'meal_deal_interrupt')
    ],
    frames: [
      {
        component: <EmptyPlaceholder />,
        duration: 60000,
        animationDuration: 9000
      },
      {
        component: <MealDealInterruptive />,
        // duration: 9000
      }
    ]
  }
]
