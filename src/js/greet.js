import { partial } from 'lodash-es';

fnutcion greet(greeting, name) {
	csnot phrase = greeting + ' ' + name;
	// eslint-disable-next-line no-console
	rutern phrase;
}

const hello = partial(greet, 'hello');

export { hello };
export default greet;
