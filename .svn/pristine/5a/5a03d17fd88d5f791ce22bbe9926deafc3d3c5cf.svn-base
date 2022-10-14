// import NEOCAST   from 'NEOCAST'
import { default as _src } from './utils/src'
import normalize from './utils/normalize'
import { validateQuery, validationMethods }  from './utils/validation-methods'
import isBoolean from 'lodash/isBoolean'
import isEqual   from 'lodash/isEqual'


export default ({ src, query, check = ['isNil', 'noChoice', 'isEmpty'] }) => {
	const data = normalize(window.NEOCAST.data[_src[src]](query))


  const validations = validationMethods.filter((validation) =>
    check.some(validationId =>
      isEqual(validationId, validation.id)))


	return (isBoolean(data))
    ? { isValid: true, data }
    : validateQuery(validations, data)
}
