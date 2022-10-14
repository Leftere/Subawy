import isNil from 'lodash/isNil'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'


export var validationMethods = [
	{
		id    : 'isNil',
		check : (queryData) => isNil(queryData)
	},
	{
		id    : 'noChoice',
		check : (queryData) => isEqual(queryData, 'no_choice')
	},
	{
		id    : 'isEmpty',
		check : (queryData) => isEmpty(queryData)
	}
]


export function validateQuery(validations, query) {
	// we want each validation.check to return as true
	// reject filters out items that return false
	let failedChecks = validations.filter((validation) => validation.check(query))

	let results = { data: query }

	if (failedChecks.length > 0) {
		results.isValid = false
		results.errors  = failedChecks.map((failedCheck) => failedCheck.id)
	} else {
		results.isValid = true
	}

	return results
}
