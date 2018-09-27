/**
 * An explicit private member.
 * http://usejsdoc.org/tags-private.html
 * @type {string}
 * @private
 */
const privateMember = 'shhh';

/**
 * A explicit private function.
 * http://usejsdoc.org/tags-private.html
 * @private
 */
function whisper() {
	console.log(privateMember);
}

/**
 * An Origami implicitly private function (with underscore).
 * http://usejsdoc.org/tags-private.html
 */
function _utterQuietly() {
	console.log(privateMember);
}

module.exports = {
	privateMember,
	whisper,
	_utterQuietly
};
