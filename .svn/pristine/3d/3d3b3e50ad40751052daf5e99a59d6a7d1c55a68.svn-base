import isEqual from 'lodash/isEqual'
import lowerCase from 'lodash/lowerCase'


export default (query) => {
	const normalizedQuery = lowerCase(query)
	const isBooleanString = (isEqual(normalizedQuery,'true') || isEqual(normalizedQuery,'false'))
    ? true
    : false

	return isBooleanString ? JSON.parse(normalizedQuery) : query
}
