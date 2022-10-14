import { Component } from 'react'

import DeluxeInterruptive from 'components/InterruptPromotions/deluxe_interruptive'

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
    id: '012129f0-11c3-45fd-81cf-9761b2324532',
    conditions: [
      keyIsValue('menu_interrupt_back', 'deluxe_interruptive')
    ],
    frames: [
      {
        component: <EmptyPlaceholder />,
        duration: 60000,
        animationDuration: 10000
      },
      {
        component: <DeluxeInterruptive />,
        // duration: 10000
      }
    ]
  }
]
