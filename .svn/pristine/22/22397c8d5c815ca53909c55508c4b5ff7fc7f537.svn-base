import { Component } from 'react'

import PlaylistDJ from '../PlaylistDJ'

// Menu
import FreshFitMenu from '../FreshFitMenu'

import './styles.css'

// Playlists
import footerPlaylists from './playlists/footer'
import valuePlaylists from './playlists/valuePromo'


export default class ScreenFreshFit extends Component {
  render() {

    return (
      <div className={this.props.screenClass}>

        {/* Screen content */}
        <div className={this.props.screenClass}>

          {/*  Side content */}
          <div className='freshfitSideContent'>
            <section style={{ height: 1080 }}>
              <PlaylistDJ playlists={valuePlaylists} {...this.props} />
            </section>
          </div>

          {/* Main content */}
          <div className='freshFitMainContent'>

            {/* Menu */}
            <section style={{ height: 830 }}>
              <FreshFitMenu {...this.props} />
            </section>

            {/* Footer */}
            <section style={{ height: 250 }}>
              <PlaylistDJ playlists={footerPlaylists} {...this.props} />
            </section>

          </div>

        </div>
      </div>
    );
  }
}
