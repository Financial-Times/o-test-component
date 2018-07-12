/**
 * Test the JsDoc example tag.
 * http://usejsdoc.org/tags-example.html
 * Solves equations of the form a * x = b
 * @module example
 * @example
 * // returns 3
 * solveAsExample(5, 15);
 * @example <caption>Captioned example usage of solveAsExample.</caption>
 * // returns 2
 * solveAsExample(5, 10);
 * @returns {Number} Returns the value of x for the equation.
 */
module.exports = function solveAsExample(a, b) {
    return b / a;
};

