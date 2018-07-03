
/**
 * callback
 * 1. jQuery.Callbacks()
 * 2. callbacks.lock()
 * 3. callbacks.empty()
 * 4. callbacks.remove()
 * 5. callbacks.add()
 * 6. callbacks.fireWith()
 * 7. callbacks.fire()
 * 8. callbacks.disabled()
 * 9. callbacks.fired()
 * 10. callbacks.locked()
 * 11. callbacks.disable()
 * 12. callbacks.has()
 */

;(function () {
	
	var Mar = {};

	var core_rnotwhite = /\S+/g;

	var optionsCache = {};
	function createOptions( options ) {
		var object = optionsCache[options] = {};
		var optionsArr = options.match( core_rnotwhite ) || [];

		for (var i = 0; i < optionsArr.length; i++) {
			var item = optionsArr[i]
			object[item] = true
		}
		return object;
	}

	Mar.Callbacks = function ( options ) {
		options = createOptions( options );

		var list = [],
			fired;

		var fire = function () {
			fired = true;

			for (var i = 0; i < list.length; i++) {
				list[i].apply()
			}
		}

		var self = {
			add: function () {
				var fn = arguments[0]
				list.push(fn)
			},
			remove: function () {
				
			},
			has: function () {
				
			},
			empty: function () {
				
			},
			disable: function () {
				
			},
			disabled: function () {
				
			},
			lock: function () {
				
			},
			locked: function () {
				
			},
			fireWith: function () {
				
			},
			fire: function () {
				if ( !fired) {
					fire()
				}
			},
			fired: function () {
				
			}
		}
		return self;
	}

	window.Mar = Mar;
})()