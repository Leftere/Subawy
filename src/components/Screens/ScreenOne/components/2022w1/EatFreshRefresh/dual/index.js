import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import data from 'data/subs'

import './styles.css'

import CokeBG from '../images/Coke.jpg';
import NoCokeBG from '../images/NoCoke.jpg';

import SandwichSlicedAvocado from '../images/SlicedAvocado.png';
import SandwichSmashedAvocado from '../images/SmashedAvocado.png';

import SodiumLegalNY from '../images/SodiumNY.png';
import SodiumLegalPhilly from '../images/SodiumPhilly.png';

import PhillySodium from '../../../../../../Common/SodiumWarning/images/philly-warning.png';
import SodiumIcon from '../../../../../../Common/SodiumWarning/images/sodium-warning-icon.png';

@neocastDataProvider([
    'serves_coca_cola',
    'avocado_sliced',
    'layout_direction'
])
  

export default class EatFreshRefresh extends Component {

    render() {

    let servesCoke = `${API.loc('serves_coca_cola')}`
    let bg = NoCokeBG;
    if (servesCoke == true || servesCoke == 'true') {
        bg = CokeBG;
    }

    let slicedAvocado = `${API.loc('avocado_sliced')}`
    let avocado = SandwichSmashedAvocado;
    if (slicedAvocado == true || slicedAvocado == 'true') {
        avocado = SandwichSlicedAvocado;
    }

    let CaliSteakData = data.find((sub) => sub.id == "cali_steak");
    let CaliSteakPrice6 = API.loc('cali_steak_price_6in');
    let CaliSteakPrice12 = API.loc('cali_steak_price_12in');
    let CaliSteakPricePro = API.loc('cali_steak_price_pro');

    let CaliTurkeyData = data.find((sub) => sub.id == "cali_turkey");
    let CaliTurkeyPrice6 = API.loc('cali_turkey_price_6in');
    let CaliTurkeyPrice12 = API.loc('cali_turkey_price_12in');
    let CaliTurkeyPricePro = API.loc('cali_turkey_price_pro');

    let BajaSteakData = data.find((sub) => sub.id == "baja_steak");
    let BajaSteakPrice6 = API.loc('baja_steak_price_6in');
    let BajaSteakPrice12 = API.loc('baja_steak_price_12in');
    let BajaSteakPricePro = API.loc('baja_steak_price_pro');

    let BajaChickenData = data.find((sub) => sub.id == "baja_chicken");
    let BajaChickenPrice6 = API.loc('baja_chicken_price_6in');
    let BajaChickenPrice12 = API.loc('baja_chicken_price_12in');
    let BajaChickenPricePro = API.loc('baja_chicken_price_pro');

    let CBRData = data.find((sub) => sub.id == "chicken_bacon_ranch");
    let CBRPrice6 = API.loc('chicken_bacon_ranch_price_6in');
    let CBRPrice12 = API.loc('chicken_bacon_ranch_price_12in');
    let CBRPricePro = API.loc('chicken_bacon_ranch_price_pro');


    let isSodiumStore = API.loc('store_plus_sodium');
    let isPhilly = API.loc('is_philadelphia_store');

    
    return (
        <div className="preloaded-to-perfection-quad">
            <div className="green-bg"></div>
            <img src={bg} />
            <img src={avocado} />

            <div className="sub-info baja-chicken">
                <p className="sub-name"><span className="yellow">NEW </span>BAJA<br/>CHICKEN & BACON</p>
                { isSodiumStore && isPhilly && <p className="sodium-text"><img className="sodium-icon-philly" src={PhillySodium} />SODIUM WARNING</p> }
                { isSodiumStore && !isPhilly && <img className="sodium-icon" src={SodiumIcon} /> }
                <div className="cal-price-container">
                    <div className="cal-container">
                        <p className="cal"><span className="yellow">6" </span>{CBRData.sizes[0].calories} cal</p>
                        <p className="cal"><span className="yellow">FL </span>{CBRData.sizes[1].calories} cal</p>
                        <p className="cal"><span className="yellow">FL PRO<sup>&trade;</sup> </span>{CBRData.sizes[2].calories} cal</p>
                    </div>
                    <div className="price-container">
                    <p className="price">${CBRPrice6}</p>
                    <p className="price">${CBRPrice12}</p>
                    <p className="price">${CBRPricePro}</p>
                    </div>
                </div>
            </div>

            <div className="sub-info chicken-bacon-ranch">
                <p className="sub-name"><span className="yellow">NEW </span>CHICKEN &amp;<br/>BACON RANCH</p>
                <div className="cal-price-container">
                    <div className="cal-container">
                        <p className="cal"><span className="yellow">6" </span>{BajaChickenData.sizes[0].calories} cal</p>
                        <p className="cal"><span className="yellow">FL </span>{BajaChickenData.sizes[1].calories} cal</p>
                        <p className="cal"><span className="yellow">FL PRO<sup>&trade;</sup> </span>{BajaChickenData.sizes[2].calories} cal</p>
                    </div>
                    <div className="price-container">
                    <p className="price">${BajaChickenPrice6}</p>
                    <p className="price">${BajaChickenPrice12}</p>
                    <p className="price">${BajaChickenPricePro}</p>
                    </div>
                </div>
            </div>

            <div className="sub-info baja-steak">
                <p className="sub-name"><span className="yellow">NEW </span>BAJA<br/>STEAK & JACK</p>
                <div className="cal-price-container">
                    <div className="cal-container">
                        <p className="cal"><span className="yellow">6" </span>{BajaSteakData.sizes[0].calories} cal</p>
                        <p className="cal"><span className="yellow">FL </span>{BajaSteakData.sizes[1].calories} cal</p>
                        <p className="cal"><span className="yellow">FL PRO<sup>&trade;</sup> </span>{BajaSteakData.sizes[2].calories} cal</p>
                    </div>
                    <div className="price-container">
                    <p className="price">${BajaSteakPrice6}</p>
                    <p className="price">${BajaSteakPrice12}</p>
                    <p className="price">${BajaSteakPricePro}</p>
                    </div>
                </div>
            </div>

            <div className="sub-info cali-steak">
                <p className="sub-name"><span className="yellow">NEW </span>STEAK<br/>CALI FRESH</p>
                <div className="cal-price-container">
                    <div className="cal-container">
                        <p className="cal"><span className="yellow">6" </span>{CaliSteakData.sizes[0].calories} cal</p>
                        <p className="cal"><span className="yellow">FL </span>{CaliSteakData.sizes[1].calories} cal</p>
                        <p className="cal"><span className="yellow">FL PRO<sup>&trade;</sup> </span>{CaliSteakData.sizes[2].calories} cal</p>
                    </div>
                    <div className="price-container">
                    <p className="price">${CaliSteakPrice6}</p>
                    <p className="price">${CaliSteakPrice12}</p>
                    <p className="price">${CaliSteakPricePro}</p>
                    </div>
                </div>
            </div>

            <div className="sub-info cali-turkey">
                <p className="sub-name"><span className="yellow">NEW </span>TURKEY<br/>CALI FRESH</p>
                <div className="cal-price-container">
                    <div className="cal-container">
                        <p className="cal"><span className="yellow">6" </span>{CaliTurkeyData.sizes[0].calories} cal</p>
                        <p className="cal"><span className="yellow">FL </span>{CaliTurkeyData.sizes[1].calories} cal</p>
                        <p className="cal"><span className="yellow">FL PRO<sup>&trade;</sup> </span>{CaliTurkeyData.sizes[2].calories} cal</p>
                    </div>
                    <div className="price-container">
                    <p className="price">${CaliTurkeyPrice6}</p>
                    <p className="price">${CaliTurkeyPrice12}</p>
                    <p className="price">${CaliTurkeyPricePro}</p>
                    </div>
                </div>
            </div>

            { isSodiumStore && isPhilly && <img className="" src={SodiumLegalPhilly} /> }
            { isSodiumStore && !isPhilly && <img className="" src={SodiumLegalNY} /> }
        </div>
    )
    }
}
