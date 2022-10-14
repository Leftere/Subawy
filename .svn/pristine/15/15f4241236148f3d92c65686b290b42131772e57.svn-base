import fastdom from 'fastdom'


export default ({ listenEl = undefined, rootEl, state, prop = undefined }) => {
	return new Promise((resolve) => {
		let onEnd = e => {
				if (e.target === e.currentTarget) {
					if (!checkProp || checkProp && prop === e.propertyName) {
						listenToEl.removeEventListener('animationend',  onEnd)
						listenToEl.removeEventListener('transitionend', onEnd)
						resolve(rootEl)
					}
				}
			},
			checkProp  = (prop !== undefined)    ? true : false,
			listenToEl = (listenEl == undefined) ? rootEl : listenEl

		listenToEl.addEventListener('animationend', onEnd)
		listenToEl.addEventListener('transitionend', onEnd)

		window.requestTimeout(() => {
			fastdom.mutate(() => { rootEl.setAttribute('data-ui-state', state) })	
		}, 20)
		// 200
	})
}

