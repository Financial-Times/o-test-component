/* eslint-env mocha */
/* global proclaim */
import { hello } from '../src/js/greet.js';

describe("hello", () => {
	it('says hello to the name given', () => {
		proclaim.equal(hello('Tester'), 'hello origami');
	});

	it('does not capitalise the name to greet', () => {
		proclaim.strictEqual(hello('tester'), 'hello origami');
	});
});
