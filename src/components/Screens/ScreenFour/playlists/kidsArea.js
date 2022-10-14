import ChoppedSalads from '../components/ChoppedSalads'
import KidsMeal from '../components/KidsMeal'

import KidsMealEvergreen from '../components/KidsMealEvergreen'

import isNil from 'lodash/isNil'
import API from 'api'

let showKidsMeal =
  !isNil(API.loc('meal_deal_show_kids_meal')) &&
  API.loc('meal_deal_show_kids_meal')

let KidsComponent = KidsMeal;
let isEvergreen = false
let isPremium = false

if (isNil(API.loc('kids_meal_promo'))) showKidsMeal = false;
if (API.loc('kids_meal_promo') == 'kids_meal_promo_evergreen') isEvergreen = true

// Enable once you want premium
// if (!isEvergreen) isPremium = true
// if (isPremium) KidsComponent = KidsMeal;

export default () => [
  {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c9',
    frames: [
      {
        component: <ChoppedSalads />,
        duration: 20000
      },
      // {
      //   component: <KidsComponent />,
      //   duration: 30000,
      //   conditions: [
      //     {
      //       name: 'Show if enabled',
      //       predicate: () => showKidsMeal
      //     }
      //   ]
      // },
    ]
  }
]
