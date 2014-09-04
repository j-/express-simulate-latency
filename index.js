/**
 * Generate a random float between given min and max values
 * @private
 * @param {Number} min Minimum value
 * @param {Number} max Maximum value
 * @return {Number}
 */
var getRandomDelay = function (min, max) {
	return min + Math.random() * (max - min);
};

/**
 * Returns middleware which will introduce latency into the express.js callback
 *   pipeline. Useful for local servers to simulate a remote server.
 * @function express-simulate-latency
 * @param {Object=} options
 * @param {Number} [options.min=0] Minimum wait time
 * @param {Number} [options.max=options.min] Maximum wait time
 * @return {Function} Middleware function
 */
module.exports = function (options) {
	if (!options) {
		options = {};
	}
	var min = options.min || 0;
	var max = Math.max(options.max || 0, min);
	return function (req, res, next) {
		var wait = getRandomDelay(min, max);
		setTimeout(next, wait);
	};
};