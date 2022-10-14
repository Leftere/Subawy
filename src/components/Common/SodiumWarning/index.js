import './styles.css'
import API from 'api'

let warning = API.loc('store_plus_sodium')
let isPhilly = API.loc('is_philadelphia_store')

let sodiumClass = 'sodium-warning isNY'

if (isPhilly) sodiumClass = 'sodium-warning isPhilly'

const SodiumWarning = (props) => (
	warning ? <span style={props.style} className={sodiumClass}>
		{isPhilly && 
		<span>
			SODIUM WARNING*
			{props.showSmall &&
				<small>*Applies to FL and FL PRO™ only</small>
			}
		</span>
		}
		</span> : <span></span>
)

export default SodiumWarning
