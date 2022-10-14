import { Component } from 'react'
import PropTypes from 'prop-types'
import API from 'api'

import PlaylistDJ from 'components/Common/PlaylistDJ'
import footerPlaylists from './playlists/footer'

import './styles.css'


const allDay = API.loc('serves_bfast_all_day', false);

export default class SignatureFooter extends Component {


  render() {
    return (
      <div className={`c-signatureFooter`}>

        <PlaylistDJ playlists={footerPlaylists} {...this.props} />

      </div>
    );
  }
}
