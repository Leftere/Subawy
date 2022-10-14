// import 3rd party modules
import 'gsap'
import 'gsap-then'

// import Lodash helper modules
import extend from 'lodash/extend'

// import core animation modules
import TransitionComponent from 'animations/TransitionComponent'



// ALL METHODS HERE ARE ANIMATION METHODS SPECIFIC TO THE NEEDS TO THE DUAL-PLAYER - THEY WILL GET LOADED INTO THE APP DYNAMICALLY AND ARE MENT TO EXTEND CORE
// ANIMATION CLASSES

// *********************************************************************************************************************
// TRANSITION VIEW BUILT IN ANIMATION METHODS - built in transitions
// *********************************************************************************************************************
// standardized, simple transition methods that by default are available on the Transition View class
// they can be set as either a transition out or transition in effect - by default the view uses fade in and out
const transitionMethods = {
	transitions: {
		fadeIn  : function(el) { return new TimelineMax({delay: 0.5}).to(el, 0.7, { opacity: 1 }) },
		fadeOut : function(el) { return new TimelineMax({delay: 0.5}).to(el, 0.7, { opacity: 0 }) }	
	}
}
// *********************************************************************************************************************
// TRANSITION VIEW LIFE CYCLE HOOKS - necessary built in transition life cycle hook methods
// *********************************************************************************************************************
// if modifications need to be made to the Transition View element, events need to be triggered, or any other code needs to be run 
// in relation to a transition method, hooks to transition life cycle events are available
// right now there is only a before hook, but other's can very easily be added
// the name of the hook method is: on<capitalized event prefix><camelcase method name>
const transitionLifeCycleHooks = {
	onBeforeFadeIn : function() { this.el.setAttribute('data-ui-state','is:invisible') }
}
// *********************************************************************************************************************
// TRANSITION VIEW EXTEND - extend transition view core to include built in transition methods and required transition method life cycle hooks
// *********************************************************************************************************************
// extend the core Transition View class so it has the player specific methods
extend(TransitionComponent.prototype, 
	transitionLifeCycleHooks,
	transitionMethods
)