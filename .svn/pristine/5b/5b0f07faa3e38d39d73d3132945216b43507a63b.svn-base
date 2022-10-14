import { Component } from 'react'
import API from 'api'

import PlaylistDJ from 'components/Common/PlaylistDJ'
import interrupts from './playlists/interrupts'

import ScreenOne   from '../Screens/ScreenOne'
import ScreenTwo   from '../Screens/ScreenTwo'
import ScreenThree from '../Screens/ScreenThree'
import ScreenFour  from '../Screens/ScreenFour'

let screens = [ScreenOne, ScreenTwo, ScreenThree, ScreenFour]

const layoutDirection =
  API.player('layout_direction') || API.loc('layout_direction') || 'L2R'

const isReversed = layoutDirection === 'R2L'

if (isReversed) {
  screens = screens.reverse()
}

const screenOrdering = API.player('monitors', '1_2_3_4').split('_')
const player = screenOrdering.length === 2 ? 'dual' : 'quad'

const screenInfo = {
  player,
  layout: layoutDirection,
  screenClass: isReversed ? 'l-screen l-screen-reverse' : 'l-screen'
}

const screenLayout = screenOrdering
  .map(i => screens[i - 1])
  .map((C, i) => <C {...screenInfo} key={i} />)

export default class MenuBoard extends Component
{ render() { return (
  <div className={`l-player l-player-${player} l-player-direction-${layoutDirection}`}>
    {/* The Screens */}
    {screenLayout}

    {/* Full menu interruptives  */}
    {player === 'quad' && (
      <div className={`l-interrupt`}>
        <PlaylistDJ playlists={interrupts} />
      </div>
    )}
  </div>
)}}
