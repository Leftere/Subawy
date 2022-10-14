import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import data from 'data/subs'

import './styles.css'

import CokeSmashed from '../images/Coke_Smashed.jpg';
import CokeSliced from '../images/Coke_Sliced.jpg';

import NoCokeSmashed from '../images/No_Coke_Smashed.jpg';
import NoCokeSliced from '../images/No_Coke_Sliced.jpg';

import SodiumLegalNY from '../images/SodiumNY.png';
import SodiumLegalPhilly from '../images/SodiumPhilly.png';

import Disclaimer from '../images/Disclaimer.png';
import CokeLegal from '../images/CokeLegal.png';

import PhillySodium from '../../../../../../Common/SodiumWarning/images/philly-warning.png';
import SodiumIcon from '../../../../../../Common/SodiumWarning/images/sodium-warning-icon.png';

@neocastDataProvider([
    'serves_coca_cola',
    'avocado_sliced',
    'layout_direction'
])
  

export default class EatFreshRefresh extends Component {

    render() {

    let servesCoke = API.loc('serves_coca_cola');
    let slicedAvocado = API.loc('avocado_sliced');

    let bg = NoCokeSmashed;

    if ((servesCoke == true || servesCoke == 'true') && (slicedAvocado == true || slicedAvocado == 'true')) {
        bg = CokeSliced;
    }
    else if ((servesCoke == true || servesCoke == 'true') && (slicedAvocado == false || slicedAvocado == 'false')) {
        bg = CokeSmashed;
    }
    else if ((servesCoke == false || servesCoke == 'false') && (slicedAvocado == true || slicedAvocado == 'true')) {
        bg = NoCokeSliced;
    } else {
        bg = NoCokeSmashed;
    }

    let HoneyMustardChickenData = data.find((sub) => sub.id == "honey_mustard_RSC");
    let HoneyMustardChickenPrice6 = API.loc('honey_mustard_RSC_price_6in');
    let HoneyMustardChickenPrice12 = API.loc('honey_mustard_RSC_price_12in');
    let HoneyMustardChickenPricePro = API.loc('honey_mustard_RSC_price_pro');

    let CaliTurkeyData = data.find((sub) => sub.id == "cali_turkey");
    let CaliTurkeyPrice6 = API.loc('cali_turkey_price_6in');
    let CaliTurkeyPrice12 = API.loc('cali_turkey_price_12in');
    let CaliTurkeyPricePro = API.loc('cali_turkey_price_pro');

    let BajaSteakData = data.find((sub) => sub.id == "baja_steak");
    let BajaSteakPrice6 = API.loc('baja_steak_price_6in');
    let BajaSteakPrice12 = API.loc('baja_steak_price_12in');
    let BajaSteakPricePro = API.loc('baja_steak_price_pro');

    let BajaChickenData = data.find((sub) => sub.id == "baja_chicken");
    let BajaChickenPrice6 = API.loc('baja_chicken_bacon_price_6in');
    let BajaChickenPrice12 = API.loc('baja_chicken_bacon_price_12in');
    let BajaChickenPricePro = API.loc('baja_chicken_bacon_price_pro');

    let BajaTurkeyData = data.find((sub) => sub.id == 'baja_turkey');
    let BajaTurkeyPrice6 = API.loc('baja_turkey_avocado_price_6in');
    let BajaTurkeyPrice12 = API.loc('baja_turkey_avocado_price_12in');
    let BajaTurkeyPricePro = API.loc('baja_turkey_avocado_price_pro');


    let isSodiumStore = API.loc('store_plus_sodium');
    let isPhilly = API.loc('is_philadelphia_store');

    
    return (
        <div className="eat-fresh-refresh-quad">
            <div className="green-bg"></div>
            <img src={bg} />

            <div className="sub-info baja-chicken">
                <p className="sub-name"><span className="yellow--new">NEW </span>BAJA<br/>CHICKEN & BACON</p>
                { isSodiumStore && isPhilly && <p className="sodium-text"><img className="sodium-icon-philly" src={PhillySodium} />SODIUM WARNING</p> }
                { isSodiumStore && !isPhilly && <img className="sodium-icon" src={SodiumIcon} /> }
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

            <div className="sub-info baja-turkey">
                <p className="sub-name"><span className="yellow--new">NEW </span>BAJA<br/>TURKEY AVOCADO</p>
                { isSodiumStore && isPhilly && <p className="sodium-text"><img className="sodium-icon-philly" src={PhillySodium} />SODIUM WARNING</p> }
                { isSodiumStore && !isPhilly && <img className="sodium-icon" src={SodiumIcon} /> }
                <div className="cal-price-container">
                    <div className="cal-container">
                        <p className="cal"><span className="yellow">6" </span>{BajaTurkeyData.sizes[0].calories} cal</p>
                        <p className="cal"><span className="yellow">FL </span>{BajaTurkeyData.sizes[1].calories} cal</p>
                        <p className="cal"><span className="yellow">FL PRO<sup>&trade;</sup> </span>{BajaTurkeyData.sizes[2].calories} cal</p>
                    </div>
                    <div className="price-container">
                    <p className="price">${BajaTurkeyPrice6}</p>
                    <p className="price">${BajaTurkeyPrice12}</p>
                    <p className="price">${BajaTurkeyPricePro}</p>
                    </div>
                </div>
            </div>

            <div className="sub-info baja-steak">
                <p className="sub-name"><span className="yellow--new">NEW </span>BAJA STEAK & JACK</p>
                { isSodiumStore && isPhilly && <p className="sodium-text"><img className="sodium-icon-philly" src={PhillySodium} />SODIUM WARNING</p> }
                { isSodiumStore && !isPhilly && <img className="sodium-icon" src={SodiumIcon} /> }
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

            <div className="sub-info honey-mustard-chicken">
                <p className="sub-name"><span className="yellow--new">NEW </span>HONEY MUSTARD<br/> ROTISSERIE-STYLE CHICKEN</p>
                { isSodiumStore && isPhilly && <p className="sodium-text"><img className="sodium-icon-philly" src={PhillySodium} />SODIUM WARNING</p> }
                { isSodiumStore && !isPhilly && <img className="sodium-icon" src={SodiumIcon} /> }
                <div className="cal-price-container">
                    <div className="cal-container">
                        <p className="cal"><span className="yellow">6" </span>{HoneyMustardChickenData.sizes[0].calories} cal</p>
                        <p className="cal"><span className="yellow">FL </span>{HoneyMustardChickenData.sizes[1].calories} cal</p>
                        <p className="cal"><span className="yellow">FL PRO<sup>&trade;</sup> </span>{HoneyMustardChickenData.sizes[2].calories} cal</p>
                    </div>
                    <div className="price-container">
                    <p className="price">${HoneyMustardChickenPrice6}</p>
                    <p className="price">${HoneyMustardChickenPrice12}</p>
                    <p className="price">${HoneyMustardChickenPricePro}</p>
                    </div>
                </div>
            </div>

            <div className="sub-info cali-turkey">
                <p className="sub-name"><span className="yellow--new">NEW </span>TURKEY<br/>CALI FRESH</p>
                { isSodiumStore && isPhilly && <p className="sodium-text"><img className="sodium-icon-philly" src={PhillySodium} />SODIUM WARNING</p> }
                { isSodiumStore && !isPhilly && <img className="sodium-icon" src={SodiumIcon} /> }
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
            { !isSodiumStore && <img className="" src={Disclaimer} /> }
            { servesCoke && <img className="" src={CokeLegal} />}
        </div>
    )
    }
}
