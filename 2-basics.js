//Sections 2 - Basics
// console.log ('Hello World');
let name = 'bill';
console.log(name);
//variables
// - Cannot contain space or hyphen.
// - Cannot start with a number.
// - first letter lower case, then upper case for each word e.g. firstName. Camel case
// - variable names are case sensitive.
// - modern best practice is to declare each variable on separate line. 
//   You can declare on one line with comma separation, but don't.

//Primitives and Reference types:
// Primitives: string, number, Boolean, undefined, null.  ES6 has another called symbol and will learn about that later in course.
  // Integers, decimal, float are all of type numbers. No different types.
  // Reference types: Object, Arrays, Functions
// If variable is not initialized its value is undefined.
// Use null where you want to clear the value of a variable. 
// JavaScript does not have decimal or floating point data types. Integers, floats, decimal are all of type: number.

// Static typed language – variable data type cannot change
// Dynamically-typed language – variable data type can change.
// Type of variable determined at runtime based on value assigned to them.

//Constants 
const interestRate = .03;
//interestRate = .01; error, cannot reassign.
console.log(interestRate);

//Objects - related properties are grouped into an object. key/value pairs to define properties.
let person = {
    weight : 175,
    height : 60
};
console.log(person);
console.log(person.weight); //dot notation. default usage.

console.log(person['weight']); //bracket notation. Use when prop determined at runtime.
let selection = 'weight';      //assume user selection of weight property
person[selection] = 150;       //now can do assignment based on prop selected.
console.log(person.weight);

//Arrays
// Arrays are dynamic. That means length and variable type can change at runtime.
// Technically an array is an object. Do typeof in console to see it!
// As an object it inherits all object properties visible in dot notation.
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;       //adding diff datatype.
console.log(selectedColors); //see object in console. 
console.log(selectedColors.length); //use dot notation to see all properties

//Functions
function greet(name, lastName) {      //name, lastname are parameters, arguments are in call statement.
    console.log('Hello '+name+' '+lastName);
}

greet('John', 'Smith');      //passing two arguments

function square(number) {    //number is parameter, local to function.
    return number*number;
}

console.log(square(2));      //two function calls, one to square and one to log
