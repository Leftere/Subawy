import API from 'api'
import isNil from 'lodash/isNil'


import SubwayHeroes from '../components/SubwayHeroes'

let showSKU = API.loc('test_sku_reduction');
if (isNil(showSKU)) showSKU = false;

let playlist = {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c9',
    frames: [
      // {
      //   component: <MenuFreshFit2020New />,
      //   duration: 15000
      // },
      {
        component: <SubwayHeroes />,
        duration: 15000
      }

    ]
  };

let playlistSKU = {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c0',
    frames: [
      /*{
        // component: <MenuFreshFit2020New />,
        duration: 15000
      },*/
      {
        component: <SubwayHeroes />,
        duration: 15000
      }
    ]
  };

if (showSKU) playlist = playlistSKU;

export default () => [playlist]
