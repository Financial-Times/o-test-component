/* eslint-env mocha */
/* global proclaim */
import hello from './../main.js';

describe("hello", () => {
	it('says hello to the name given', () => {
		proclaim.equal(hello('Tester'), 'hello Tester');
	});

	it('does not capitalise the name to greet', () => {
		proclaim.strictEqual(hello('tester'), 'hello tester');
	});
});
