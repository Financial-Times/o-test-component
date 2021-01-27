import { partial } from 'lodash-es';

function greet(greeting, name) {
	// eslint-disable-next-line no-console
	console.log(greeting + ' ' + name);
}

const hello = partial(greet, 'Hello');

export { hello };
export default greet;
