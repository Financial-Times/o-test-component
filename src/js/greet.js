import { partial } from 'lodash-es';

function greet(greeting, name) {
	const phrase = greeting + ' ' + name;
	// eslint-disable-next-line no-console
	console.log(phrase);
	return phrase;
}

const hello = partial(greet, 'hello');

export { hello };
export default greet;
