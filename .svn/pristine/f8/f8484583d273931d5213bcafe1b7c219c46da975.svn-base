import { Component } from 'react'

import API from 'api'

// Interruptive playlists
import PlaylistDJ from 'components/Common/PlaylistDJ'
import interrupts from './playlists/interrupts'

export default class FeaturedInterrupt extends Component {

  render() {

    return (


      <div className={`featuredInterrupt`}>

          <div className='l-f-interrupt'>
            <PlaylistDJ
            	transitionType='cross-fade'
            	playlists={interrupts}
              ref={(node) => this.playlist = node}
              onPlaylistChange={this.playlistChange}
              {...this.props}
            	/>
          </div>
      </div>
    );
  }
}





