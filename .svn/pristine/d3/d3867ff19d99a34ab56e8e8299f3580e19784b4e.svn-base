export default class Confetti {
	constructor(options) {
		this.el                 = options.el
		this.pieces             = options.pieces
		this.confettiSize       = this._weightedRandom(options.sizeIndex)

		this.confettiColors     = ['#fce18a', '#ff726d', '#b48def', '#f4306d']
		this.confettiAnimations = ['slow', 'medium', 'fast']
	}

	_weightedRandom(spec) {
		let i, j, table=[];
		for (i in spec) {
		// The constant 10 below should be computed based on the
		// weights in the spec for a correct and optimal table size.
		// E.g. the spec {0:0.999, 1:0.001} will break this impl.
			for (j=0; j<spec[i]*10; j++) {
				table.push(i);
			}
		}
		return function() {
			return table[Math.floor(Math.random() * table.length)];
		}
	}

	_createPieceOfConfetti() {
		const confettiEl           = document.createElement('div'),
			  confettiSize         = this.confettiSize() + 'px',
			  confettiBackground   = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)],
			  confettiLeft         = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px',
			  confettiAnimation    = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)],
			  confettiBorderRadius = [true,false][Math.floor(Math.random() * 2)]

		confettiEl.classList.add('c-FeatPromoSixDollarAnyFootlong2017w2_confetti_piece')
		confettiEl.setAttribute('data-ui-state',`animate:${confettiAnimation}`)

		confettiEl.style.left            = confettiLeft
		confettiEl.style.width           = confettiSize
		confettiEl.style.height          = confettiSize
		confettiEl.style.backgroundColor = confettiBackground
		confettiEl.style.borderRadius    = (confettiBorderRadius) ? '100px' : '0px'

		this.el.appendChild(confettiEl);
	}

	sprinkle() {
		const self  = this
		let   delay = 0

		for (let piece = 1;piece < self.pieces;piece++) {
			delay = delay + 18

			requestTimeout(() => { self._createPieceOfConfetti() }, delay)
		}
	}

	cleanUp() {
		this.el.innerHTML = ''
	}
}