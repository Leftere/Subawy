/* global window */

import _src      from './utils/src'
import normalize from './utils/normalize'
import validate  from './validate'


const queryAPI = ({ src, query, check, includeValidationInfo, defaultValue }) => {
	const queryResult = validate({ src, query, check })
	let result

	if (includeValidationInfo) {
		result = queryResult
	} else {
		result = (queryResult.isValid) ? queryResult.data : defaultValue
	}

	return result
}


const API = ({ src, q }) => normalize(window.NEOCAST.data[_src[src]](q))


const validateQuery = (type) =>
	(query, check = ['isNil', 'noChoice', 'isEmpty'], defaultValue = null) =>
		queryAPI({
			src: _src[type],
			query,
			check,
			defaultValue,
			includeValidationInfo: true,
		})

const query = (type) =>
	(query, defaultValue = null) =>
		queryAPI({
			src: _src[type],
			query,
			defaultValue,
			includeValidationInfo: false
		})


API.v = {
	loc: validateQuery('loc'),
	net: validateQuery('net'),
	player: validateQuery('player')
}


API.loc = query('loc')
API.net = query('net')
API.player = query('player')


export default API
