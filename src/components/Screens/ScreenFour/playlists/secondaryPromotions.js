import isNil from 'lodash/isNil'
import API from 'api'

import KidsMeal from '../components/KidsMeal'
import KidsMealEvergreen from '../components/KidsMealEvergreen'


let showKidsMeal =
  !isNil(API.loc('meal_deal_show_kids_meal')) &&
  API.loc('meal_deal_show_kids_meal')


let KidsComponent = KidsMealEvergreen;
let KidsComponentTime = 20000;


let promo = API.loc('kids_meal_promo') || ""


// Predicate for showing Kids Meal
const skipKidsMeal = () => ({
  name: `Skips kids meal`,
  predicate: () => (showKidsMeal)
})


import DealOfTheDayw2b2017 from '../components/old/6_dotd_w2b2017'
import MakeMealEvergreen   from '../components/old/make_meal_evergreen'
import SixLessSotd from '../components/old/6_less_sotd'
import SixMonthlyFlAprilItalBmt from '../components/old/6_monthly_fl_april_ital_bmt'
import SixMonthlyFlSteakCheese from '../components/old/6_monthly_fl_steak_cheese'
import SimpleSix from '../components/old/simple_six'
import SimpleSixRefreshSubwayCup from '../components/old/simple_6_refresh_subway_cup'
import SimpleSixRefreshCoke from '../components/old/simple_6_refresh_coke'
import FootlongDaySixDollars from '../components/old/6_fl_day'
import SixInchDaySixDollars from '../components/old/6_6inch_day'
import SixInchDayThreeDollars from '../components/old/3_6inch_day'
import SixInchDayThreeDollarsFiftyCents from '../components/old/3_50_6inch_day'
import FiveMealOfTheDay from '../components/old/5_motd'
import SixMOTD from '../components/old/6_motd'
import Deluxe2017w2ValuePromotion from '../components/old/deluxe_value_promo_2017w2'
import FreshValue2017w7 from '../components/old/fresh_value_2017w7'
import SOTW2016w8 from '../components/old/SOTW2016w8'
// import SOTD2017w2ValuePromotion from '../components/old/6_sotd_w2b2017'
// import ExtrasUpsell from '../components/old/ExtrasUpsell'
// import SOTD2016w8 from '../components/old/SOTD2016w8'

import Version1 from '../components/17w8ValuePanel/v1'
import Version2 from '../components/17w8ValuePanel/v2'
import Version3 from '../components/17w8ValuePanel/v3'
import Version4 from '../components/17w8ValuePanel/v4'
import Version5 from '../components/17w8ValuePanel/v5'
import Version6 from '../components/17w8ValuePanel/v6'
import Version7 from '../components/17w8ValuePanel/v7'
import Version8 from '../components/17w8ValuePanel/v8'
import Version9 from '../components/17w8ValuePanel/v9'

import Version1Classic from '../components/17w8ValuePanel/v1_classic'
import Version2Classic from '../components/17w8ValuePanel/v2_classic'
import Version3Classic from '../components/17w8ValuePanel/v3_classic'
import Version4Classic from '../components/17w8ValuePanel/v4_classic'
import Version5Classic from '../components/17w8ValuePanel/v5_classic'
import Version6Classic from '../components/17w8ValuePanel/v6_classic'
import Version7Classic from '../components/17w8ValuePanel/v7_classic'
import Version8Classic from '../components/17w8ValuePanel/v8_classic'
import Version9Classic from '../components/17w8ValuePanel/v9_classic'

import Rotisserie from '../components/Rotisserie'
import SteakCheese from '../components/SteakCheese'
import Teriyaki from '../components/Teriyaki'

import RyeBread17w8 from '../components/17w8RyeBread'

// 2018 W1
import FreshValue6 from '../components/2018w1/FreshValue6'
import FreshValue12 from '../components/2018w1/FreshValue12'

// 2018 W2
import TryGuac from '../components/2018w2/guacamole'

// W1 Fresh
import W1Rotisserie from '../components/w1Rotisserie'
import W1SOCT from '../components/w1SOCT'
import W1SubwayClub from '../components/w1SubwayClub'
import W1Turkey from '../components/w1Turkey'

// 2018 W6
import FreshDynamic from '../components/SecondaryPromotions/2018w6/fresh_dynamic'
import FreshFixed from '../components/SecondaryPromotions/2018w6/fresh_fixed'

// 2019 W1
import MOTD2019w1 from '../components/2019w1/MOTD'
import SOTD2019w1 from '../components/2019w1/SOTD'

// 2019 W2
import CompleteYourMeal19w2 from '../components/SecondaryPromotions/2019w2/complete_your_meal_2019w2'

// 2019 W3
import SubwayMinis from '../components/SecondaryPromotions/2019w3/subway_minis'
import MyWayReward from '../components/SecondaryPromotions/2019w3/myway_reward'

// 2019 W5
import SubwaySliders from '../components/SecondaryPromotions/2019w5/subway_sliders'

// 2020 W1 San Diego Paninis
import SdPaninis from '../components/SecondaryPromotions/2020w1/SD_Paninis'

// 2020 W2
import MealUpsell2020W2 from '../components/SecondaryPromotions/2020w2/meal_upsell'


// 2020 W4
import BBQRibs from '../components/SecondaryPromotions/2020w4/bbq_ribs'

import DrinksMenu from '../components/SecondaryPromotions/DrinksMenu'
import BreakfastMenu from '../components/SecondaryPromotions/BreakfastMenu'

// Sideloaders
import SideLoaded from '../components/SideLoaded'
import SideLoadedOld from '../components/SideLoadedOld'
import SideLoadedHalf from '../components/SideLoadedHalf'

const components = {
  // Sideloaded content
  // // new
  // sideloaded_value_promotion1: <SideLoaded baseKey={'sideloaded_value_promotion1'} />,
  // // old
  // local_value_one_custom: <SideLoadedOld baseKey={'local_value_one_custom'} />,

  /// OLD
  '6_dotd_w2b2017': <DealOfTheDayw2b2017 />,
  '6_sotd': <SOTW2016w8 />,
  '6_less_sotd': <SixLessSotd />,
  '6_monthly_fl_april_ital_bmt': <SixMonthlyFlAprilItalBmt />,
  '6_monthly_fl_steak_cheese': <SixMonthlyFlSteakCheese />,
  '6_fl_day': <FootlongDaySixDollars />,
  '6_6inch_day': <SixInchDaySixDollars />,
  '3_6inch_day': <SixInchDayThreeDollars />,
  '3_50_6inch_day': <SixInchDayThreeDollarsFiftyCents />,
  '5_motd': <FiveMealOfTheDay />,
  '6_motd': <SixMOTD />,
  make_meal_evergreen: <MakeMealEvergreen />,
  simple_six: <SimpleSix />,
  simple_6_refresh_subway_cup: <SimpleSixRefreshSubwayCup />,
  simple_6_refresh_coke: <SimpleSixRefreshCoke />,
  deluxe_value_promo_2017w2: <Deluxe2017w2ValuePromotion />,
  fresh_value_2017w7: <FreshValue2017w7 />,

  // 2017 w8
  '499_FVM_with_steak_classic_meals_price': <Version1 />,
  '499_FVM_with_steak_classic_meals_price_classic': <Version1Classic />,
  '499_FVM_without_steak_classic_meals_price': <Version2 />,
  '499_FVM_without_steak_classic_meals_price_classic': <Version2Classic />,
  '499_FVM_with_299_sub_no_steak_classic_meals_price': <Version3 />,
  '499_FVM_with_299_sub_no_steak_classic_meals_price_classic': <Version3Classic />,
  '499_FVM_with_299_sub_with_steak_classic_meals_price': <Version4 />,
  '499_FVM_with_299_sub_with_steak_classic_meals_price_classic': <Version4Classic />,
  '579_FVM_with_299_sub_classic_meals_price': <Version5 />,
  '579_FVM_with_299_sub_classic_meals_price_classic': <Version5Classic />,
  '499_FVM_with_299_sub_LA_only_classic_meals_price': <Version6 />,
  '499_FVM_with_299_sub_LA_only_classic_meals_price_classic': <Version6Classic />,
  '499_FVM_with_349_sub_250_upsell_classic_meals_price': <Version7 />,
  '499_FVM_with_349_sub_250_upsell_classic_meals_price_classic': <Version7Classic />,
  houston_classic_meals_price: <Version8 />,
  houston_classic_meals_price_classic: <Version8Classic />,
  '499_FVM_with_199_upsell_price': <Version9 />,
  '499_FVM_with_199_upsell_price_classic': <Version9Classic />,

  'rye_bread': <RyeBread17w8 />,

  // 2018 W1
  '6_inch_FVM_price': <FreshValue6 />,
  '6_inch_FVM_with_decals_price': <FreshValue6 />,
  '12_inch_footlong_fave_price': <FreshValue12 />,
  '12_inch_footlong_fave_with_decals_price': <FreshValue12 />,

  // 2018 W2
  'guacamole': <TryGuac />,

  // 2018 W6
  'fvm_599_699': <FreshFixed />,
  'delicious_deals_price': <FreshDynamic />,

  // 2019 w1
  '6in_motd': <MOTD2019w1 />,

  // 2019 w3
  'subway_minis': <SubwayMinis />,
  'w3_myway_rewards': <MyWayReward />,

  // 2019 w5
  'subway_sliders': <SubwaySliders />,

  // 2020 w1 San Diego Paninis
  'sd_paninis': <SdPaninis />,

  // 2020 w4 BBQ Ribs
  //'bbq_rib_w4': <BBQRibs />,

  // Just in case RDM doesn't update the key
  'LA_classic_meals_price': <Version6Classic />,

  //
  sideloaded_value_promotion1: <SideLoaded baseKey={'sideloaded_value_promotion1'} />,
  local_value_one_custom: <SideLoadedOld baseKey={'local_value_one_custom'} />,
  sideloaded_half: <SideLoadedHalf baseKey={'sideloaded_half'} />
}

const classicPromos = [
  '499_FVM_with_steak_classic_meals_price_classic',
  '499_FVM_without_steak_classic_meals_price_classic',
  '499_FVM_with_299_sub_no_steak_classic_meals_price_classic',
  '499_FVM_with_299_sub_with_steak_classic_meals_price_classic',
  '579_FVM_with_299_sub_classic_meals_price_classic',
  '499_FVM_with_299_sub_LA_only_classic_meals_price_classic',
  '499_FVM_with_349_sub_250_upsell_classic_meals_price_classic',
  'houston_classic_meals_price_classic',
  '499_FVM_with_199_upsell_price_classic'
]

const valueIsClassicPromo = key => ({
  name: `Key '${key}' is a classic promo`,
  predicate: () => classicPromos.indexOf(API.loc(key) + '_classic') > -1
})

const selectedValuePromoKey = API.loc('value_menu_content')
const selectedValuePromoKey2 = API.loc('value_menu_content_two')

// Based on that key, show a component based on the mapping above
let valueComponent = components[selectedValuePromoKey]
let classicComponent = components[selectedValuePromoKey + '_classic']

let valueComponent2 = components[selectedValuePromoKey2] || valueComponent;
let classicComponent2 = components[selectedValuePromoKey2 + '_classic'] || classicComponent;


// Predicate for skipping guac if no guac
const skipIfNoGuac = () => ({
  name: `Skips Guac`,
  predicate: function()
  {
    const guacSelector = 'extras_guacamole'
    let isGuac = false

    if (API.loc('extras_local_option_one') == guacSelector) isGuac = true;
    if (API.loc('extras_local_option_two') == guacSelector) isGuac = true;
    if (API.loc('extras_local_option_three') == guacSelector) isGuac = true;

    return isGuac;
  }
})

import CoffeePromo from '../components/SecondaryPromotions/coffee_2017w2'
import Breakfast2017w2 from '../components/SecondaryPromotions/breakfast_2017w2'
// import SubwayApp from '../components/SecondaryPromotions/SubwayApp'
import CompleteYourMeal from '../components/SecondaryPromotions/CompleteYourMealw4'
import HotDrinksMenu from '../components/HotDrinksMenu'
import BreakfastMenuFooter from 'components/Screens/ScreenOne/components/2017w8/Breakfast/MenuFooter'

// W1
import SubwayApp from '../components/SecondaryPromotions/2018w1/AppRemoteOrder'

// import DoUsAFlavor from '../components/SecondaryPromotions/DoUsAFlavor'
import MakeItAMeal2017w2 from '../components/SecondaryPromotions/make_it_a_meal_2017w2'


// 2018 W5
import TasteAdventure from '../components/SecondaryPromotions/TasteAdventure'

let MealUpsell = MealUpsell2020W2


// If the franchise doesn't have a value promotion selected, then fallback to showing this
const fallbackComponent = <MealUpsell />

import {
  isBreakfastTime,
  isLunchTime,
  isDinnerTime,
  servesBreakfast,
  servesBreakfastAllDay,
  isRestaurantOfTheFuture
} from 'components/Common/PlaylistDJ/conditions'

const mobileKey = API.loc('has_mobile_app')
const hasMobileApp = mobileKey === null || mobileKey
const subwayAppConditions = [
  {
    name: 'Show subway app if `has_mobile_app` is not set or true',
    predicate: () => hasMobileApp
  }
]

/**
 * ROTF stores show the same thing most of the time
 * @type {Array}
 */
const ROTFRotation = [

  {
    component: valueComponent,
    duration: 10000,
    fallbackComponent
  },
  {
    component: <KidsComponent />,
    duration: KidsComponentTime,
    conditions: [
      skipKidsMeal()
    ]
  },
  // {
  //   component: <CoffeePromo />,
  //   duration: 15000
  // },
  {
    component: valueComponent2,
    duration: 10000,
    fallbackComponent
  },
  {
    component: <KidsComponent />,
    duration: KidsComponentTime,
    conditions: [
      skipKidsMeal()
    ]
  },
  {
    component: <MealUpsell />,
    duration: 20000
  }
]

const ROTFRotationAfterBreakfast = [

  {
    component: valueComponent,
    duration: 10000,
    fallbackComponent
  },
  {
    component: <KidsComponent />,
    duration: KidsComponentTime,
    conditions: [
      skipKidsMeal()
    ]
  },
  {
    component: <BreakfastMenuFooter />,
    duration: 15000
  },
  {
    component: valueComponent2,
    duration: 10000,
    fallbackComponent
  },
  // {
  //   component: <CoffeePromo />,
  //   duration: 15000
  // },
  {
    component: <KidsComponent />,
    duration: KidsComponentTime,
    conditions: [
      skipKidsMeal()
    ]
  },
  {
    component: <MealUpsell />,
    duration: 20000
  }
]

const nonROTFRotation = [

  {
    component: valueComponent,
    duration: 10000,
    fallbackComponent
  },
  {
    component: <KidsComponent />,
    duration: KidsComponentTime,
    conditions: [
      skipKidsMeal()
    ]
  },
  {
    component: valueComponent2,
    duration: 10000,
    fallbackComponent
  },
  {
    component: <MealUpsell />,
    duration: 20000
  }
]

const nonROTFRotationAfterBreakfast = [

  {
    component: valueComponent,
    duration: 10000,
    fallbackComponent
  },
  {
    component: <BreakfastMenuFooter />,
    duration: 15000
  },
  {
    component: <KidsComponent />,
    duration: KidsComponentTime,
    conditions: [
      skipKidsMeal()
    ]
  },
  {
    component: valueComponent2,
    duration: 10000,
    fallbackComponent
  },
  {
    component: <MealUpsell />,
    duration: 20000
  },
]

export default [
  // Testing
  // {
  //   id: "0",
  //   frames: [
  //     // {
  //     //   component: <MyWayReward />,
  //     //   duration: 20000
  //     // },
  //     {
  //       component: <BreakfastMenu />,
  //       duration: 25000
  //     }
  //     // {
  //     //   component: <SubwayMinis />,
  //     //   duration: 20000
  //     // },
  //   ]
  // },
  {
    id: "1",
    conditions: [
      servesBreakfast,
      isBreakfastTime
    ],
    frames: [
      // {
      //   component: <MyWayReward />,
      //   duration: 20000
      // },
      {
        component: <BreakfastMenu />,
        duration: 25000
      },
      {
        component: <DrinksMenu />,
        duration: 25000
      }
      // {
      //   component: <SubwayMinis />,
      //   duration: 20000
      // },
    ]
  },

  {
    id: "2",
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay
    ],
    frames: [
      // {
      //   component: <MyWayReward />,
      //   duration: 20000
      // },
      {
        component: <BreakfastMenu />,
        duration: 25000
      },
      {
        component: <DrinksMenu />,
        duration: 25000
      }
      // {
      //   component: <SubwayMinis />,
      //   duration: 20000
      // },
    ]
  },

  {
    id: "3",
    frames: [
      // {
      //   component: <MyWayReward />,
      //   duration: 20000
      // },
      {
        component: <DrinksMenu />,
        duration: 25000
      }
      // {
      //   component: <SubwayMinis />,
      //   duration: 20000
      // },
    ]
  },

  // Testing
  // {
  //   id: "1",
  //   frames: [
  //     {
  //       component: <BreakfastMenuFooter />,
  //       duration: 30000,
  //     }
  //   ]
  // },

  /**
   * Breakfast all day for ROTF
   */
  {
    id: '1de902e4-5350-4bd5-9350-873c4197bbc6',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isBreakfastTime,
      isRestaurantOfTheFuture
    ],

    frames: ROTFRotation
  },

  /**
   * Breakfast all day for non-ROTF
   */
  {
    id: '41687719-2c45-4099-95dc-367fb4c8cdd5',
    conditions: [servesBreakfast, servesBreakfastAllDay, isBreakfastTime],

    frames: nonROTFRotation
  },

  /**
   * Breakfast for ROTF
   */
  {
    id: 'bbdf27c6-b74f-400e-9e2b-baaa4e2f4d2c',
    conditions: [servesBreakfast, isBreakfastTime, isRestaurantOfTheFuture],

    frames: ROTFRotation
  },

  /**
   * Breakfast for non-ROTF
   */
  {
    id: 'ba1b55a1-6ca8-427f-a2e4-093c3c1f8f9f',
    conditions: [servesBreakfast, isBreakfastTime],

    frames: nonROTFRotation
  },

  /**
   * Lunch if breakfast is all day for ROTF
   */
  {
    id: 'dfe53d84-f0e1-4c7e-bf9b-6096d19f7754',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isLunchTime,
      isRestaurantOfTheFuture
    ],

    frames: ROTFRotationAfterBreakfast
  },

  /**
   * Lunch if breakfast is all day for non-ROTF
   */
  {
    id: 'fc0753b4-b7a7-4528-8cf2-841d7e52a966',
    conditions: [servesBreakfast, servesBreakfastAllDay, isLunchTime],

    frames: nonROTFRotationAfterBreakfast
  },

  /**
   * Lunch if breakfast for ROTF
   */
  {
    id: '26a0f11a-a53c-4914-add8-197214b8d3f5',
    conditions: [servesBreakfast, isLunchTime, isRestaurantOfTheFuture],

    frames: ROTFRotation
  },

  /**
   * Lunch if breakfast for non-ROTF
   */
  {
    id: 'f3e38290-2c7d-4ae5-9072-7413f7e91ba8',
    conditions: [servesBreakfast, isLunchTime],

    frames: nonROTFRotation
  },

  /**
   * Dinner if breakfast is all day for ROTF
   */
  {
    id: 'f710e1d7-0d16-4347-8e1e-402ca4eb58d7',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isDinnerTime,
      isRestaurantOfTheFuture
    ],

    frames: ROTFRotationAfterBreakfast
  },

  /**
   * Dinner if breakfast is all day for non-ROTF
   */
  {
    id: '74de81c6-5b3e-4bf6-a6a0-bf194749a51f',
    conditions: [servesBreakfast, servesBreakfastAllDay, isDinnerTime],

    frames: nonROTFRotationAfterBreakfast
  },

  /**
   * Dinner if breakfast for ROTF
   */
  {
    id: '7619ed83-3644-4dcd-9e74-8d66873ac0db',
    conditions: [servesBreakfast, isDinnerTime, isRestaurantOfTheFuture],

    frames: [
      {
        component: <HotDrinksMenu />,
        duration: 15000
      },
      {
        component: valueComponent,
        duration: 10000,
        fallbackComponent
      },
      {
        component: <Breakfast2017w2 />,
        duration: 15000
      },
      {
        component: <HotDrinksMenu />,
        duration: 15000
      },
      // {
      //   component: <DoUsAFlavor />,
      //   duration: 13500
      // },
      {
        component: <HotDrinksMenu />,
        duration: 15000
      },
      {
        component: valueComponent2,
        duration: 10000,
        fallbackComponent
      },
      // {
      //   component: <SubwayApp />,
      //   duration: 15000,
      //   conditions: subwayAppConditions
      // },
      {
        component: <MealUpsell />,
        duration: 20000
      }
    ]
  },

  /**
   * Dinner if breakfast for non-ROTF
   */
  {
    id: 'aff30df0-3cf0-4c6a-933f-00303d836f42',
    conditions: [servesBreakfast, isDinnerTime],

    frames: [

      {
        component: valueComponent,
        duration: 10000,
        fallbackComponent
      },
      {
        component: <Breakfast2017w2 />,
        duration: 15000
      },
      {
        component: valueComponent2,
        duration: 10000,
        fallbackComponent
      },
      {
        component: <MealUpsell />,
        duration: 20000
      }
    ]
  },

  /**
   * Default for ROTF
   */
  {
    id: '65ec2abe-f332-450a-8c96-a785cf3d7eba',
    conditions: [isRestaurantOfTheFuture],
    frames: ROTFRotation
  },

  /**
   * Default
   */
  {
    id: '1221c5aa-aeaf-4598-97cb-d39718f6bbc2',
    frames: nonROTFRotation
  }
]


// San Diego Panini Promo

let paninis = {
  component: <SdPaninis />,
  duration: 10000,
  fallbackComponent
}

let enablePaninis = API.loc('sd_panini');

if (enablePaninis) {
  ROTFRotation.unshift(paninis);
  ROTFRotationAfterBreakfast.unshift(paninis);
  nonROTFRotation.unshift(paninis);
  nonROTFRotationAfterBreakfast.unshift(paninis);
}
