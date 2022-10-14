/**
 * Neocast API
 */
import API from 'api'

import Breakfast from 'components/FeaturedPromotions/breakfast_2017w2'
import RotisseriChicken2017w4 from 'components/FeaturedPromotions/rotisserie_chicken_2017'
import AutumnCarved2017w7 from 'components/FeaturedPromotions/autumn_carved'
import ValueTestW7SteakClub from 'components/FeaturedPromotions/ValueTest/value_test_w7_steak_club'

import SideLoaded from 'components/FeaturedPromotions/SideLoaded'

import {
  isBreakfastTime,
  servesBreakfast,
  servesBreakfastAllDay
} from 'components/PlaylistDJ/conditions'

// Available components to show
const components = {
  rotisserie_chicken_2017: <RotisseriChicken2017w4 />,
  autumn_carved: <AutumnCarved2017w7 />,
  value_test_w7_steak_club: <ValueTestW7SteakClub />,

  sideloaded_feature_promotion1: (
    <SideLoaded baseKey={'sideloaded_feature_promotion1'} />
  ),
  sideloaded_feature_promotion2: (
    <SideLoaded baseKey={'sideloaded_feature_promotion2'} />
  ),
  sideloaded_feature_promotion3: (
    <SideLoaded baseKey={'sideloaded_feature_promotion3'} />
  )
}

let promo1 = API.loc('feature_promotion1')
let promo2 = API.loc('feature_promotion2')
let promo3 = API.loc('feature_promotion3')

// If a franchise doesn't select any featured promo, then we should fall back to showing this one
if (
  (!promo1 || promo1 === 'no_choice') &&
  (!promo2 || promo2 === 'no_choice') &&
  (!promo3 || promo3 === 'no_choice')
) {
  promo1 = 'rotisserie_chicken_2017'
}

// Convenience lookup for skipIfNoPromoSetFor predicate
const numToPromo = {
  1: promo1,
  2: promo2,
  3: promo3
}

// How long these frames should play for. This will prevent other playlists from switching in the animation queue.
const animationDurations = {
  autumn_carved: 20000,
  value_test_steak_club: 14000,
  rotisserie_chicken_2017: 20000
}

/**
 * Subway HQ wanted these particular promos to play longer than other feature promos. Typically they
 * are always just 30s long
 * @type {Object}
 */
const frameDurations = {
  rotisserie_chicken_2017: 40000,
  autumn_carved: 40000
}

// Predicate for skipping featured promos if the franchise has not selected an option
const skipIfNoPromoSetFor = number => ({
  name: `Skips Promo ${number}`,
  predicate: () => typeof components[numToPromo[number]] !== 'undefined'
})

export default [
  //  {
  //   id: 'screenFeatured1',
  //   frames: [
  //     {
  //       component: <SoctAndClub />,
  //       duration: 30000,
  //       animationDuration: 15000
  //     },
  //   ]
  // },

  /**
   * Breakfast all day playlist
   */
  {
    id: 'd202c828-daed-490c-ad43-c611b411efb4',
    conditions: [servesBreakfast, servesBreakfastAllDay, isBreakfastTime],

    frames: [
      {
        component: components[promo1],
        duration: frameDurations[promo1] || 30000
      },
      {
        component: <Breakfast />,
        animationDuration: animationDurations[promo2],
        duration: 30000
      },
      {
        component: components[promo2],
        duration: frameDurations[promo2] || 30000
      },
      {
        component: <Breakfast />,
        animationDuration: animationDurations[promo3],
        duration: 30000,
        conditions: [skipIfNoPromoSetFor(2)]
      },
      {
        component: components[promo3],
        duration: frameDurations[promo3] || 30000
      },
      {
        component: <Breakfast />,
        animationDuration: animationDurations[promo1],
        duration: 30000,
        conditions: [skipIfNoPromoSetFor(3)]
      }
    ]
  },

  // Breakfast playlist
  {
    id: 'ae8642d3-c082-4a3b-914d-b85a11ceb4ba',
    conditions: [servesBreakfast, isBreakfastTime],

    frames: [
      {
        component: components[promo1],
        duration: frameDurations[promo1] || 30000
      },
      {
        component: <Breakfast />,
        animationDuration: animationDurations[promo2],
        duration: 30000
      },
      {
        component: components[promo2],
        duration: frameDurations[promo2] || 30000
      },
      {
        component: <Breakfast />,
        animationDuration: animationDurations[promo3],
        duration: 30000,
        conditions: [skipIfNoPromoSetFor(2)]
      },
      {
        component: components[promo3],
        duration: frameDurations[promo3] || 30000
      },
      {
        component: <Breakfast />,
        animationDuration: animationDurations[promo1],
        duration: 30000,
        conditions: [skipIfNoPromoSetFor(3)]
      }
    ]
  },

  // Default playlist
  {
    id: 'a5d8815c-7356-49f9-a5db-63c353cbe89c',
    frames: [
      {
        component: components[promo1],
        animationDuration: animationDurations[promo2],
        duration: frameDurations[promo1] || 30000
      },
      {
        component: components[promo2],
        animationDuration: animationDurations[promo3],
        duration: frameDurations[promo2] || 30000
      },
      {
        component: components[promo3],
        animationDuration: animationDurations[promo1],
        duration: frameDurations[promo3] || 30000
      }
    ]
  }
]
