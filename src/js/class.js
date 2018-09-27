/**
 * Creates a new Person.
 * http://usejsdoc.org/tags-class.html
 * @constructor
 * @param {string} name
 */
function Person(name) {
	/** @member {string} */
	this.name = name;
}

/**
 * A function for a person to say hello.
 */
Person.prototype.sayHello = () => {
	console.log(`Hi, my name is ${this.name}`);
};

/**
 * Class representing a domesticated animal.
 */
class Pet {
	constructor() {
		this.hasEaten = false;
	}
	eat(food) {
		this.hasEaten = true;
		console.log(`Eats ${food}: Nom nom!`);
	}
}

/**
 * Creates a new Cat.
 * Uses JSDoc class tag with doc comments on class and constructor.
 * http://usejsdoc.org/tags-class.html
 * @class
 * @extends Pet
 */
class Cat extends Pet {
	/**
	 * @param {string} name
	 */
	constructor(name) {
		super();
		this.name = name;
	}

	/**
	 * Log a sound of a cat.
	 */
	static makeSound() {
		console.log('Meow!');
	}
}

/**
 * @extends Pet
 */
class Dog extends Pet {
	/**
	 * Creates a new Dog.
	 * Missing class tag and doc comment on constructor only.
	 * http://usejsdoc.org/tags-class.html
	 * @param {string} name
	 */
	constructor(name) {
		super();
		this.name = name;
	}

	/**
	 * Log a sound of a dog.
	 */
	static makeSound() {
		console.log('Bark!');
	}
}

module.exports = {
	Person,
	Cat,
	Dog
};
