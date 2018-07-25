/**
 * Test the JsDoc throws tag.
 * http://usejsdoc.org/tags-throws.html
 * @throws {Error} This was never going to work.
 */
module.exports = function () {
	throw new Error('This was never going to work.');
};
