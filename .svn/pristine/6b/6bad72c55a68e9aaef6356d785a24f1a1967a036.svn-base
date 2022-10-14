import ChoppedSalads from 'components/ChoppedSalads'
import KidsMeal from 'components/KidsMeal'

import {
  keyIsValue
} from 'components/PlaylistDJ/conditions'

import isNil from 'lodash/isNil'
import API from 'api'

const showKidsMeal = !isNil(API.loc('kids_meal_promo')) &&
                     !isNil(API.loc('meal_deal_show_kids_meal')) &&
                      API.loc('meal_deal_show_kids_meal')


export default (player, layout) => [
  {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c9',
    frames: [

      {
        component: <ChoppedSalads />,
        duration: 17000
      },

      {
        component: <KidsMeal />,
        duration: 24000,
        conditions: [
          {
            name: 'Only show kids meal if Neocast keys `kids_meal_promo`, `meal_deal_show_kids_meal`, `meal_deal_show_kids_meal`, are set.',
            predicate: () => showKidsMeal
          }
        ]
      }

    ]
  }
]
