import FooterSides from '../components/FooterSides'
import FooterSprice from '../components/FooterSpice'
import FooterAddons from '../components/FooterAddons'

import API from 'api'

let hideSpices = API.loc('spice_panel_disable')

export default () => [
  {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c9',
    frames: [
      {
        component: <FooterAddons />,
        duration: 15000
      },
      {
        // component: <FooterSprice />,
        duration: 15000,
        conditions: [
          {
            name: 'Hide if disabled',
            predicate: () => !hideSpices
          }
        ]
      },
    ]
  }
]
