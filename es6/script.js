// differences between var and let

// var get's hoisted
console.log(num); // -> undefined
var num = 23;

// let does not get hoisted 
// console.log(age); // -> Reference Error
// let age = 23;

// you can redeclare var
var num = 42;
console.log(num);
// you can't redeclare let
// let user = 'hans';
// let user = 'anne'; // -> SyntaxError: Identifier 'user' has already been declared

// scoping - the area where a variable is accesible

var message = 'hello from global scope';

// var is function scoped 
function helloFromLocalScope() {
	// console.log(message);
	var greeting = 'hello from local scope';
	return greeting;
}
// console.log(greeting);
// console.log(greeting); // -> Uncaught ReferenceError: greeting is not defined
console.log(helloFromLocalScope())

// var is not scoped to that block
// if (5 > 3) {
// 	var city = 'Berlin';
// }

// console.log(city);

if (5 > 3) {
	let country = 'France';
}

// console.log(country); // -> ReferenceError: country is not defined

// 🚨 var is function scoped - let is block scoped (to any block)


// ternary operator
// <condition> ? <dothis> : <otherwisedothis>
const password = '123';
const user = password === '123' ? 'authenticated' : 'unauthenticated';
console.log(user);


// object shorthand 
const dog = 'Rufus';
// this is the shorthand version of {dog: dog}
const obj = { dog };
console.log(obj)
// console.log({ dog })


// Destructuring
// Objects
const person = {
	userName: 'Ironhacker',
	age: 25,
	hobby: 'chess',
	address: {
		street: 'Friedrichstr.',
		city: 'Berlin'
	}
}
// i want a variable userName with the correct value etc
// const userName = person.userName;
// const age = person.age;
// const hobby = person.hobby;
// same thing but shorter 
// const { userName, hobby } = person;

// aliasing a propery and accessing nested properties
const { userName: alias, hobby, address: { city, street } } = person
console.log(alias, hobby, city, street);

const userX = {
	first: 'Michael',
	middle: 'Peter',
	last: 'Miller'
}
// write a function that receives the user object, destructures the 
// keys and then returns a string with all the names
// function display(user) {
// 	// destructure user
// 	const { first, middle, last } = user;
// 	return `${first} ${middle} ${last}`;
// }

// bonus: destructure in the function parameter
function display({ first, middle, last }) {
	return `${first} ${middle} ${last}`;
}

console.log(display(userX));

// Array destructuring
const numbers = ['one', 'two', 'three', 'four'];
const [first, , , third] = numbers
console.log(first, third);

// setting a default value
const [, , thirdVal = 5, fourth] = [1, 3, 4]
console.log(thirdVal, fourth);

const [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d); // -> 3, 4, undefined, 1   

// you can also destructure from a string 
const [x, y, z] = 'hello';
console.log(x, y, z);

// spread operator
const myNumbers = [23, 32, 7];
const max = Math.max(...myNumbers);
console.log(max)
// creating a shallow copy
const copy = [...myNumbers];
console.log(copy)
// combine two arrays 
const reptiles = ['snake', 'lizard'];
const mammals = ['puppy', 'kitten'];
const animals = [...reptiles, ...mammals];
console.log(animals);

// ...numbers -> numbers will be now an array with all the params
function sum(...numbers) {
	let res = 0;
	for (let i = 0; i < numbers.length; i++) {
		res += numbers[i];
	}
	return res
	// return numbers.reduce(function (acc, val) {
	// 	return acc + val
	// })
}

console.log(sum(2, 3, 5, 7))
// Objects

const car = {
	make: 'Volvo',
	year: 1995,
	engine: {
		fuel: 'petrol',
		hp: 80
	}
}


// Exercise

// extract the make and year from the car in one line

console.log(make, year)

// extract the fuel and hp from the car in one line


console.log(fuel, hp);


// Arrays

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Extract the first two values

console.log(zero, one); // 0 1

// Extract all the values but the first one from the array

console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// Strings

const str = "Hello World!"

// Using the spread, return an array of all characters in `str` upperCased and reversed

console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
console.log('hello');