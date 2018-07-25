/** @module ComplexModule */

/**
 * Test the JsDoc example tag.
 * http://usejsdoc.org/tags-example.html
 * Solves equations of the form a * x = b
 * @example
 * // returns 3
 * solveAsExample(5, 15);
 * @example <caption>Captioned example usage of solveAsExample.</caption>
 * // returns 2
 * solveAsExample(5, 10);
 * @returns {Number} Returns the value of x for the equation.
 */
module.exports.solveAsExample = function solveAsExample(a, b) {
	return b / a;
};

/**
 * An example constructor within a module.
 * @constructor
 * @example
 * const myIncrementer = new incrementer();
 * myIncrementer.increment(4); // 4
 * myIncrementer.increment(4); // 8
 * myIncrementer.increment(1); // 9
 */
module.exports.incrementer = function incrementer() {
	this.num = 0;
	/**
	 * An example constructor within a module.
	 * @param {Number} num - The number to increment by.
	 * @returns {Number} - The updated value.
	 */
	this.increment = function (num) {
		this.num += num;
		return this.num;
	};
};
