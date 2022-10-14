import { Component } from 'react'
import PropTypes from 'prop-types'

import PlaylistDJ from 'components/Common/PlaylistDJ'
import playlists from './playlists/featured'

import WrapsMenu from './components/WrapsMenu'

import './styles.css'

export default class PanelOne extends Component {
  static propTypes = {
    player: PropTypes.oneOf(['quad', 'dual'])
  }

  render() {
    return (
      <div className={this.props.screenClass}>

        {/* Promo area */}
        <section className="featured-promo-area" id="featured-promo-area">
          <PlaylistDJ playlists={playlists} randomKeys {...this.props} />
        </section>

        {/* Wraps */}
        <section className="signature-wraps-area">
          <WrapsMenu {...this.props} />
        </section>

        {/* Full screen interruptive content */}
        <div className="l-screen-content l-screen-content-int" />

      </div>
    )
  }
}
