import { Component } from "react";
import API from "api";
import isNil from "lodash/isNil";

import neocastDataProvider from "api/neocastDataProvider";

import SubLineItem from 'components/Common/SubLineItem'
import SubBlockItem from 'components/Common/SubBlockItem'
import SubImage1 from './images/fan_favs1.png'
import SubImage2 from './images/fan_favs2.png'
import SodiumWarning from 'components/Common/SodiumWarning'


let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');

import "./styles.css";

@neocastDataProvider([
  "decal_options",
  "veggie_decal_price",
  "bf_ham_decal_price",
  "chopped_salad_addon_price",
  "chopped_salad_price",
  "chopped_salad_type",
  "local_option_one",
  "local_option_two",
  "local_option_three",
  "local_option_four",
  "local_option_five"
])
export default class FanFaves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      currentFrameCound: 0,
      subs1_visible: true,
      subs2_visible: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ subs1_visible: !this.state.subs1_visible});
      this.setState({ subs2_visible: !this.state.subs2_visible});
    }, 10000);
  }
  
  render() {
    let decals = {};
    if (this.props.decal_options == "starting_at") {
      decals["veggie_delite"] = {
        decal12: this.props.veggie_decal_price || "499",
        decal12Color: "green"
      };
      decals["bf_ham"] = {
        decal12: this.props.bf_ham_decal_price || "499",
        decal12Color: "green"
      };
    } else if (this.props.decal_options == "footlong") {
      decals["veggie_delite"] = {
        decal12: this.props.veggie_decal_price || "499"
      };
      decals["bf_ham"] = {
        decal12: this.props.bf_ham_decal_price || "499"
      };
    } else if (this.props.decal_options == "footlong_alt") {
      decals["veggie_delite"] = {
        decal12: this.props.veggie_decal_price || "499"
      };
    }

   

    const {
      chopped_salad_addon_price,
      chopped_salad_price,
      chopped_salad_type
    } = this.props;
  
    let saladPriceType = "addon";
    let saladPrice = chopped_salad_addon_price; // Old key by default
    let saladPriceFormatted = "$";

    let hasNewSaladPriceType = !isNil(API.loc("chopped_salad_type"));

    // We added the "addon" and "full" salad price types
    // addon : Put a "+" at the beginning to show the value is added
    // full : The full set price, useful for fixed-price promotions
    if (hasNewSaladPriceType) {
      saladPriceType = chopped_salad_type;
      saladPrice = chopped_salad_price;
    }

    // Prepend the needed prefixes
    saladPriceFormatted += saladPrice;
    if (saladPriceType == "addon")
      saladPriceFormatted = "+ " + saladPriceFormatted;

    let veggiePatty = "hidden";

    let localOptions = [
      API.loc("local_option_one"),
      API.loc("local_option_two"),
      API.loc("local_option_three"),
      API.loc("local_option_four"),
      API.loc("local_option_five")
    ];

    if (localOptions.includes("veggie_patty") == true) {
      veggiePatty = "veggie-patty";
    }

    
    let fullClass = 'c-FanFaves2021'

    if (isSodiumStore)
    {
      fullClass = 'c-FanFaves2021 ny-warning'

      if (isPhilly)
      {
        fullClass = 'c-FanFaves2021 philly-warning'
      }
    }

    return (<div className={fullClass}>
       
       <img src={SubImage1} className={this.state.subs1_visible ? 'subImage' : 'subImage hide'} />
       <img src={SubImage2} className={this.state.subs2_visible ? 'subImage' : 'subImage hide'} />

        <div className={`freshHeader`}>
            <h1>Fan Faves</h1>
            <h2> Choose your size: <span className="size">&nbsp;6"&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;FL &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;FL&nbsp;PRO&#8482;</span><span className="new">NEW</span></h2>
        </div>

        { this.state.subs1_visible &&
          <div className={`blockItems`}>
            <SubBlockItem apiKey='oven_roasted_turkey'/>
            <SubBlockItem apiKey='tuna'/>
            <SubBlockItem apiKey='spicy_italian' sodium showSmall />
            <SubBlockItem apiKey='cold_cut_combo'/>
            <SubBlockItem apiKey='meatball_marinara'/>
            <SubBlockItem apiKey='rotisserie_style_chicken'/>
          </div>
        }

        { this.state.subs2_visible &&
          <div className={`blockItems`}>
            <SubBlockItem apiKey='oven_roasted_turkey'/>
            <SubBlockItem apiKey='tuna'/>
            <SubBlockItem apiKey='spicy_italian' sodium showSmall />
            <SubBlockItem apiKey='black_forest_ham'/>
            <SubBlockItem apiKey='meatball_marinara'/>
            <SubBlockItem apiKey='subway_club'/>
          </div>
        }


        </div>);
  }
}
