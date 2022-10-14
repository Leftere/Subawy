/**
 * Neocast API
 */
import API from 'api'


// Because some reason the Breakfast menu rotates as part of this playlist group...
import BreakfastMenu from 'components/BreakfastMenu'


import {
  keyIsValue
} from 'components/PlaylistDJ/conditions'


// Value promotions
import DealOfTheDayw2b2017 from 'components/ValuePromotions/6_dotd_w2b2017'
import MakeMealEvergreen from 'components/ValuePromotions/make_meal_evergreen'
import SixLessSotd from 'components/ValuePromotions/6_less_sotd'
import SixMonthlyFlAprilItalBmt from 'components/ValuePromotions/6_monthly_fl_april_ital_bmt'
import SixMonthlyFlSteakCheese from 'components/ValuePromotions/6_monthly_fl_steak_cheese'
import SimpleSix from 'components/ValuePromotions/simple_six'
import SimpleSixRefreshSubwayCup from 'components/ValuePromotions/simple_6_refresh_subway_cup'
import SimpleSixRefreshCoke from 'components/ValuePromotions/simple_6_refresh_coke'
import FootlongDaySixDollars from 'components/ValuePromotions/6_fl_day'
import SixInchDaySixDollars from 'components/ValuePromotions/6_6inch_day'
import SixInchDayThreeDollars from 'components/ValuePromotions/3_6inch_day'
import SixInchDayThreeDollarsFiftyCents from 'components/ValuePromotions/3_50_6inch_day'
import FiveMealOfTheDay from 'components/ValuePromotions/5_motd'
import SixMOTD from 'components/ValuePromotions/6_motd'
import Deluxe2017w2ValuePromotion from 'components/ValuePromotions/deluxe_value_promo_2017w2'
import SOTD2017w2ValuePromotion from 'components/ValuePromotions/6_sotd_w2b2017'
import ExtrasUpsell from 'components/ValuePromotions/ExtrasUpsell'

import FreshValue2017w7 from 'components/ValuePromotions/fresh_value_2017w7'


// Sideloaders
import SideLoaded from 'components/ValuePromotions/SideLoaded'
import SideLoadedOld from 'components/ValuePromotions/SideLoadedOld'


/**
 * This is pretty goofy, but if you select '6_sotd', then both of these
 * components will show up (in alternatiting order with the 'primary'). The playlists
 * below should conditionally check to show these.
 */
import SOTD2016w8 from 'components/ValuePromotions/SOTD2016w8'
import SOTW2016w8 from 'components/ValuePromotions/SOTW2016w8'


/**
 * Playlist conditions
 */
import {
  isBreakfastTime,
  isLunchTime,
  isDinnerTime,
  servesBreakfast,
  servesBreakfastAllDay
} from 'components/PlaylistDJ/conditions'


/**
 * Available components to show
 */
const components = {
  '6_dotd_w2b2017': <DealOfTheDayw2b2017 />,
  /**
   * '6_sotd' has special rules. Read the above comment and see the playlists conditions below.
   */
  '6_sotd': <SOTW2016w8 />,
  'make_meal_evergreen': <MakeMealEvergreen />,
  '6_less_sotd': <SixLessSotd />,
  '6_monthly_fl_april_ital_bmt': <SixMonthlyFlAprilItalBmt />,
  '6_monthly_fl_steak_cheese': <SixMonthlyFlSteakCheese />,
  'simple_six': <SimpleSix />,
  'simple_6_refresh_subway_cup': <SimpleSixRefreshSubwayCup />,
  'simple_6_refresh_coke': <SimpleSixRefreshCoke />,
  '6_fl_day': <FootlongDaySixDollars />,
  '6_6inch_day': <SixInchDaySixDollars />,
  '3_6inch_day': <SixInchDayThreeDollars />,
  '3_50_6inch_day': <SixInchDayThreeDollarsFiftyCents />,
  '5_motd': <FiveMealOfTheDay />,
  '6_motd': <SixMOTD />,
  'deluxe_value_promo_2017w2': <Deluxe2017w2ValuePromotion />,
  '6_sotd_w2b2017': <SOTD2017w2ValuePromotion />,
  'fresh_value_2017w7': <FreshValue2017w7 />,

  /**
   * Sideloaded content
   */
  // new
  sideloaded_value_promotion1: <SideLoaded baseKey={'sideloaded_value_promotion1'} />,
  // old
  local_value_one_custom: <SideLoadedOld baseKey={'local_value_one_custom'} />,
}


/**
 * This is the selected Value Promo by the franchise
 */
//const selectedValuePromoKey = API.loc('value_menu_content')
var selectedValuePromoKey = 'fresh_value_2017w7'
console.log(selectedValuePromoKey);
/**
 * Based on that key, show a component based on the mapping above
 */
const valueComponent = components[selectedValuePromoKey]


/**
 * If the franchise doesn't have a value promotion selected, then fallback to showing this
 */
const fallbackComponent = <MakeMealEvergreen />


export default [

  // Test
  // {
  //   id: 'test',
  //   frames: [
  //     {
  //       component: <ExtrasUpsell />,
  //       duration: 25000
  //     },
  //     {
  //       component: <SOTD2017w2ValuePromotion />
  //     }
  //   ]
  // },

  /**
   * Breakfast all day playlist
   */
  {
    id: 'f311f4f3-38a8-4bd6-8f97-f6e1a3d37c41',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isBreakfastTime
    ],

    frames: [
      {
        component: <BreakfastMenu />,
        duration: 25000
      },
      {
        component: valueComponent,
        duration: 25000,
        fallbackComponent
      },
      {
        conditions: [
          keyIsValue('value_menu_content', '6_sotd')
        ],
        component: <SOTD2016w8 />,
        duration: 20000
      },
    ]
  },

  /**
   * Breakfast playlist
   */
  {
    id: '15b49f97-457f-4ae5-9818-92cfc4ba4d24',
    conditions: [
      servesBreakfast,
      isBreakfastTime
    ],

    frames: [
      {
        component: <BreakfastMenu />,
        duration: 25000
      },
      {
        component: valueComponent,
        duration: 25000,
        fallbackComponent
      },
      {
        conditions: [
          keyIsValue('value_menu_content', '6_sotd')
        ],
        component: <SOTD2016w8 />,
        duration: 20000
      }
    ]
  },

  /**
   * Lunch if breakfast is all day
   */
  {
    id: 'bec95a36-5391-404c-95f3-c12e5c1c9bd7',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isLunchTime
    ],

    frames: [
      {
        conditions: [
          keyIsValue('value_menu_content', '6_sotd')
        ],
        component: <SOTD2016w8 />,
        duration: 20000
      },
      {
        component: <BreakfastMenu />,
        duration: 25000
      },
      {
        component: valueComponent,
        duration: 25000,
        fallbackComponent
      }
    ]
  },

  /**
   * Lunch
   */
  {
    id: '0728d5b0-f83c-4a50-9d8f-f6d4d127d5d6',
    conditions: [
      isLunchTime
    ],

    frames: [
      {
        component: valueComponent,
        duration: 30000,
        fallbackComponent
      },
      {
        component: <Deluxe2017w2ValuePromotion />,
        duration: 20000
      },
      {
        conditions: [
          keyIsValue('value_menu_content', '6_sotd')
        ],
        component: <SOTD2016w8 />,
        duration: 20000
      },
      {
        component: <ExtrasUpsell />,
        duration: 25000
      }
    ]
  },

  /**
   * Dinner if breakfast is all day
   */
  {
    id: 'e41d3981-fbab-4cdf-a60a-0286a1a36116',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isDinnerTime
    ],

    frames: [
      {
        conditions: [
          keyIsValue('value_menu_content', '6_sotd')
        ],
        component: <SOTD2016w8 />,
        duration: 20000
      },
      {
        component: <BreakfastMenu />,
        duration: 25000
      },
      {
        component: valueComponent,
        fallbackComponent,
        duration: 25000
      }
    ]
  },

  /**
   * Dinner
   */
  {
    id: '0b67c0c5-0e2b-485a-802e-5ec41a943735',
    conditions: [
      isDinnerTime
    ],

    frames: [
      {
        conditions: [
          keyIsValue('value_menu_content', '6_sotd')
        ],
        component: <SOTD2016w8 />,
        duration: 20000
      },
      {
        component: valueComponent,
        fallbackComponent,
        duration: 25000
      },
      {
        component: <Deluxe2017w2ValuePromotion />,
        duration: 25000
      },
      {
        component: <ExtrasUpsell />,
        duration: 25000
      }
    ]
  },

  /**
   * Default playlist
   */
  {
    id: '7cf32caf-430c-4aa2-8f78-92792bbe1ddf',
    frames: [
      {
        conditions: [
          keyIsValue('value_menu_content', '6_sotd')
        ],
        component: <SOTD2016w8 />,
        duration: 20000
      },
      {
        component: <Deluxe2017w2ValuePromotion />,
        duration: 30000
      },
      {
        component: valueComponent,
        fallbackComponent,
        duration: 20000
      },
      {
        component: <ExtrasUpsell />,
        duration: 25000
      }
    ]
  }
]
