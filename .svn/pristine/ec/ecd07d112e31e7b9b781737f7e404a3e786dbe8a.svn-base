import { Component } from 'react'
import PropTypes from 'prop-types'
import PlaylistDJ from 'components/PlaylistDJ'

import playlists from './playlists/featured'

import './styles.css'


export default class ScreenFeatured extends Component {

  static propTypes = {
    player: PropTypes.oneOf(['quad', 'dual'])
  }

  render() {
    return (
      <div className={this.props.screenClass}>

        {/* Screen content */}
        <section className={`featured-promo-area ${this.props.screenClass}`}>

          <PlaylistDJ
            playlists={playlists}
            randomKeys
            {...this.props}
          />

        </section>

        {/* Full screen interruptive content */}
        <div className='l-screen-content l-screen-content-int' />

      </div>
    );
  }
}
