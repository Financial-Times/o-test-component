module.exports = function() {
	/**
	 * Testing JsDoc name tag.
	 * Casual use of eval :scream:
	 * http://usejsdoc.org/tags-name.html
	 *
	 * @name highlightSearchTerm
	 * @function
	 * @global
	 * @param {string} term - The search term to highlight.
	 */
	eval("window.highlightSearchTerm = function(term) {};"); // eslint-disable-line no-eval
};
