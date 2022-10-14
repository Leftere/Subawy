/**
 * Neocast API
 */
import API from 'api'


import FreshMozzarella2017w3 from 'components/FooterPromotions/mozzarella_2017w3'
import ItalianHero from 'components/FooterPromotions/italian_hero_2017w3'
import HoagieBread from 'components/FooterPromotions/hoagie_bread_2017w3'
import PaniniDepletion from 'components/FooterPromotions/w6_panini_depletion'
import CornedBeef from 'components/FooterPromotions/corned_beef_contingency_2016w8'
import Cranberry from 'components/FooterPromotions/cranberry_mustard_sauce_depletion_2016w8'
import Panini2016w8 from 'components/FooterPromotions/panini_2016w8'
import Panini2017w2 from 'components/FooterPromotions/panini_2017w2'
import Gatorade2016w8 from 'components/FooterPromotions/gatorade_2016w8'
import ExtrasDoubleMeatFooter from 'components/FooterPromotions/extras_double_meat'
import BaconFooter from 'components/FooterPromotions/bacon'
import CookiesFooter from 'components/FooterPromotions/cookies_group'
import CateringHalf from 'components/FooterPromotions/catering_half'
import Soup from 'components/FooterPromotions/sides_soup'
import Pizza from 'components/FooterPromotions/personal_pizza'
import Flatizza from 'components/FooterPromotions/flatizza'
import ExtrasDoubleMeatNoPrice from 'components/FooterPromotions/extras_double_meat_no_price'
import Gingerbread from 'components/FooterPromotions/gingerbread'
import SteakAndBacon from 'components/FooterPromotions/steak_and_bacon_melt'
import SoupsOn from 'components/FooterPromotions/local_footer_soups_on'
import RealGoodFood from 'components/FooterPromotions/real_good_food'
import LmdpItalHero from 'components/FooterPromotions/lmdp_ital_hero'
import MultigrainFlatbread from 'components/FooterPromotions/multigrain_flatbread'
import MeatballMarinara from 'components/FooterPromotions/meatball_marinara'
import BaconEggAndCheese from 'components/FooterPromotions/bacon_egg_cheese'
import TurkeyBreast from 'components/FooterPromotions/turkey_breast'

import Autumn from 'components/FooterPromotions/autumn_2017w7'


// Sideloaders
import SideLoadedNew from 'components/FooterPromotions/SideLoaded'
import SideLoadedOld from 'components/FooterPromotions/SideLoadedOld'


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
  autumn_2017w7: <Autumn />,

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
