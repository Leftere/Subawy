import { Component } from 'react'
import PropTypes from 'prop-types'
import PlaylistDJ from '../PlaylistDJ'

import SignatureMenu from '../SignatureMenu'
import ExtrasMenu from '../ExtrasMenu'

// Playlists
import kidsAreaPlaylists from './playlists/kidsArea'
import interruptives from './playlists/interrupts'


export default class ScreenSignature extends Component {

  static propTypes = {
    player: PropTypes.oneOf(['dual', 'quad'])
  }


  render() {
    return (
      <div className={this.props.screenClass}>

        {/* Screen content */}
        <div className={this.props.screenClass}>

          <section style={{ width: `50%` }}>
            <SignatureMenu {...this.props} />
          </section>

          <div style={{ width: `50%` }}>

            {/* Extras */}
            <section style={{ height: '56%' }}>
              <ExtrasMenu {...this.props} />
            </section>

            {/* Kids Menu / Chopped Salad */}
            <section className='kidsArea' style={{ height: '44%' }}>

              <PlaylistDJ
                playlists={kidsAreaPlaylists(this.props.player, this.props.layout)}
                {...this.props}
              />

            </section>

          </div>
        </div>

        {/* Full screen interruptive content */}
        {this.props.player === 'quad' &&
          <div className='l-screen-content l-interrupt l-screen-content-int'>

            <PlaylistDJ
              playlists={interruptives}
              {...this.props}
            />

          </div>
        }

      </div>
    );
  }
}
