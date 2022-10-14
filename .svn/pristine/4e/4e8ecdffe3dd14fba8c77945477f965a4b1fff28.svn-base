/**
 * Neocast API
 */
import API from 'api'


import FreshMozzarella2017w3 from '../FooterPromotions/mozzarella_2017w3'
import ItalianHero from '../FooterPromotions/italian_hero_2017w3'
import HoagieBread from '../FooterPromotions/hoagie_bread_2017w3'
import PaniniDepletion from '../FooterPromotions/w6_panini_depletion'
import CornedBeef from '../FooterPromotions/corned_beef_contingency_2016w8'
import Cranberry from '../FooterPromotions/cranberry_mustard_sauce_depletion_2016w8'
import Panini2016w8 from '../FooterPromotions/panini_2016w8'
import Panini2017w2 from '../FooterPromotions/panini_2017w2'
import Gatorade2016w8 from '../FooterPromotions/gatorade_2016w8'
import ExtrasDoubleMeatFooter from '../FooterPromotions/extras_double_meat'
import BaconFooter from '../FooterPromotions/bacon'
import CookiesFooter from '../FooterPromotions/cookies_group'
import CateringHalf from '../FooterPromotions/catering_half'
import Soup from '../FooterPromotions/sides_soup'
import Pizza from '../FooterPromotions/personal_pizza'
import Flatizza from '../FooterPromotions/flatizza'
import ExtrasDoubleMeatNoPrice from '../FooterPromotions/extras_double_meat_no_price'
import Gingerbread from '../FooterPromotions/gingerbread'
import SteakAndBacon from '../FooterPromotions/steak_and_bacon_melt'
import SoupsOn from '../FooterPromotions/local_footer_soups_on'
import RealGoodFood from '../FooterPromotions/real_good_food'
import LmdpItalHero from '../FooterPromotions/lmdp_ital_hero'
import MultigrainFlatbread from '../FooterPromotions/multigrain_flatbread'
import MeatballMarinara from '../FooterPromotions/meatball_marinara'
import BaconEggAndCheese from '../FooterPromotions/bacon_egg_cheese'
import TurkeyBreast from '../FooterPromotions/turkey_breast'

import Autumn from '../FooterPromotions/autumn_2017w7'
import CornedBeef17w8 from '../FooterPromotions/reuben_footer'
import RyeBread17w8 from '../FooterPromotions/rye_bread'

import BlazeFooter from '../FooterPromotions/BlazeFooter'

import Guac18w2 from '../FooterPromotions/guac_2018w2'

// Sideloaders
import SideLoadedNew from '../FooterPromotions/SideLoaded'
import SideLoadedOld from '../FooterPromotions/SideLoadedOld'


/**
 * Available components to show
 */
const components = {
  mozzarella_2017w3: <FreshMozzarella2017w3 />,
  italian_hero_2017w3: <ItalianHero />,
  hoagie_bread_2017w3: <HoagieBread />,
  w6_panini_depletion: <PaniniDepletion />,
  corned_beef_contingency_2016w8: <CornedBeef />,
  cranberry_mustard_sauce_depletion_2016w8: <Cranberry />,
  panini_2016w8: <Panini2016w8 />,
  panini_2017w2: <Panini2017w2 />,
  gatorade_2016w8: <Gatorade2016w8 />,
  extras_double_meat: <ExtrasDoubleMeatFooter />,
  bacon: <BaconFooter />,
  cookies_group: <CookiesFooter />,
  catering_half: <CateringHalf />,
  sides_soup: <Soup />,
  personal_pizza: <Pizza />,
  flatizza: <Flatizza />,
  extras_double_meat_no_price: <ExtrasDoubleMeatNoPrice />,
  gingerbread: <Gingerbread />,
  steak_and_bacon_melt: <SteakAndBacon />,
  local_footer_soups_on: <SoupsOn />,
  real_good_food: <RealGoodFood />,
  lmdp_ital_hero: <LmdpItalHero />,
  multigrain_flatbread: <MultigrainFlatbread />,
  meatball_marinara: <MeatballMarinara />,
  bacon_egg_cheese: <BaconEggAndCheese />,
  turkey_breast: <TurkeyBreast />,
  carved_turkey: <Autumn />,
  corned_beef: <CornedBeef17w8 />,
  rye_bread: <RyeBread17w8 />,
  blaze_footer: <BlazeFooter />,
  guacamole_footer: <Guac18w2 />,

  /**
   * Sideloaded content
   *
   *  1. If key contains 'sideloaded_' then it's new
   *  2. If key contains '_custom' then it's old
   */

  // 1 - old
  local_footer_one_custom: <SideLoadedOld baseKey={'local_footer_one_custom'} />,
  // 1 - new
  sideloaded_footer_promotion1: <SideLoadedNew baseKey={'sideloaded_footer_promotion1'} />,

  // 2 - old
  local_footer_two_custom: <SideLoadedOld baseKey={'local_footer_two_custom'} />,
  // 2 - new
  sideloaded_footer_promotion2: <SideLoadedNew baseKey={'sideloaded_footer_promotion2'} />,

  // 3 - old
  local_footer_three_custom: <SideLoadedOld baseKey={'local_footer_three_custom'} />,
  // 3 - new
  sideloaded_footer_promotion3: <SideLoadedNew baseKey={'sideloaded_footer_promotion3'} />
}


export default [
  {
    id: '2ddc8d1f-d6bc-48a7-b547-ded0a61dc1ba',
    frames: [
      {
        component: components[API.loc('footer_tier_one')],
        duration: 20000
      },
      {
        component: components[API.loc('footer_tier_two')],
        duration: 20000
      },
      {
        component: components[API.loc('footer_tier_three')],
        duration: 20000
      }
    ]
  }
]
