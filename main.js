/**
 * A global variable called 'foo'.
 * http://usejsdoc.org/tags-member.html
 * @type {number}
 */
const foo = 42;

/**
 * A global function with param, to say hello to somebody. Anything could say hello!
 * Even an alian could say hello! If a person is saying hello consider using {@link Person#sayHello} instead.
 * This peculiar example is inspired by [a jsdoc example]{@link http://usejsdoc.org/tags-function.html}.
 * This comment is also a great test of the jsdoc {@link http://usejsdoc.org/tags-function.html link tag}
 * @param {string} somebody
 */
function sayHello(somebody) {
	console.log('Hello ' + somebody);
}

console.log(foo);
sayHello();
