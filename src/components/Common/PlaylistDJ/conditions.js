import API from 'api'

import moment from 'moment'

const timeFormat = 'hh:mm:ss'

//window.DEV_MANUALLY_SET_TIME = moment("2018-08-18 10:00");

const getCurrentTime = () =>
  window.DEV_MANUALLY_SET_TIME || moment()

const screenOrdering = API.player('monitors', '1_2_3_4').split('_')
const player = screenOrdering.length === 2
  ? 'dual'
  : 'quad'

export const isQuadPlayer = {
  name: 'Is a quad player',
  predicate: () => {
    return player === 'quad'
  }
}

export const isDualPlayer = {
  name: 'Is a dual player',
  predicate: () => {
    return player === 'dual'
  }
}

export const isBreakfastTime = {
  name: 'During breakfast (12am - 11am)',
  predicate: () => getCurrentTime().isBetween(
      moment('00:00:00', timeFormat),
      moment('10:59:59', timeFormat)
    )
}


export const isLunchTime = {
  name: 'During lunch (11am - 5pm)',
  predicate: () => getCurrentTime().isBetween(
      moment('11:00:00', timeFormat),
      moment('16:59:59', timeFormat)
    )
}

export const isLateAfternoon = {
  name: '2pm - 5pm',
  predicate: () => getCurrentTime().isBetween(
      moment('14:00:00', timeFormat),
      moment('17:00:00', timeFormat)
    )
}

export const isDinnerTime = {
  name: 'During dinner (5pm - 12am)',
  predicate: () => getCurrentTime().isBetween(
      moment('15:00:00', timeFormat),
      moment('23:59:59', timeFormat)
    )
}

export const isAfter3pm = {
  name: 'After 3pm (5pm - 12am)',
  predicate: () => getCurrentTime().isBetween(
      moment('15:00:00', timeFormat),
      moment('23:59:59', timeFormat)
    )
}


export const isWeekday = {
  name: 'Monday-Friday',
  predicate: () => getCurrentTime().isBetween(
      moment('1', 'd'),
      moment('5', 'd')
    )
}

export const isWeekend = {
  name: 'Saturday-Sunday',
  predicate: () => {
    let dayNum = getCurrentTime().format('d');
    return (dayNum == 0 || dayNum == 6);
  }
}

export const isLAMarket = {
  name: 'LA Market',
  predicate: () => API.loc('shows_la_promotions', false)
}

//console.log(isLAMarket.predicate());

export const servesBreakfast = {
  name: 'Serves breakfast',
  predicate: () => API.loc('serves_bfast', false)
}


export const servesBreakfastAllDay = {
  name: 'Serves breakfast all day',
  predicate: () => API.loc('serves_bfast_all_day', false)
}


export const isRestaurantOfTheFuture = {
  name: 'Restaurant of the future',
  predicate: () => API.loc('shows_restaurant_of_future', false)
}


export const keyIsValue = (key, value) => ({
  name: `Has key '${key}' set as '${value}'`,
  predicate: () => API.loc(key) === value
})
