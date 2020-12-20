//Function Declaration
//by convention do not terminate with semicolon, but no error if you add it.
//Can call this function BEFORE its declaration in code b/c JavaScript moves
//these functions to the top at runtime. This is called Hoisting. Not so w/Function Expression
//At runtime Javascript engine hoists to top of code all functions.
walk();
function walk() {
    console.log('walk');
}                     //semicolon not required & omitted by convention.

//Function Expression
//if we name function then its a: Named Function Expression. 
//Otherwise, its a: Anonymous Function Express.
//like any variable, you cannot call (reference it) before its defintion. 
//No Hoisting for Function Expression.
let run = function() {
    console.log('run');
};                      //semicolon required.

//can call function expression just like a function.
run();
let move = run;  //both run and move reference same function in memory. 
move();

//Arguments
//Can access arguments from within function instead of in declaration.
//This allows for any number of arguments to be passed and accessed within function.
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(sum(1,2,3,4,5));

//Rest operator - a better way to handle arguments
function sum1(...args){    //args is an array. the ... is called Rest operator. Must be last arg.
    return args.reduce((a,b) => a + b);
}
console.log(sum1(1,2,3,4,5,7,8,9));

//Another example: pass in discount and shopping cart items. Note, last arg needs to be Rest Operator.
function cartTotal(discount, ...prices) {   //10% discount plus cart items.
    const total = prices.reduce((a,b) => a+b);
    return total - (discount * total);
}
console.log(cartTotal(.1, 20, 30, 100));

//default values for paramenters
//ex: calc interest on loan
function interest(principal, rate=3, years=10) {  //define default values, make last in list.
      return principal * rate / 100 * years
}
console.log(interest(10000, 3.5, 5));
console.log(interest(10000));


//Getters and Setters for objects
//Getters => access properties of objects
//Setters => change (mutate) properties
const person = {
    firstName: 'Bill',
    lastName: 'Matera',

    get fullName() {
        return `${this.firstName} ${this.lastName}`  //template literal (back-tick key under escape)
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';  //assignment like a property.
console.log(person.fullName);

//create object using class. Like a Java class. Mosh did not discuss, but picked up for web.
//The person object does not have a constructor and not sure how to add one. 
//The class below is a template for creating an object, properties & methods.
class Person {
    constructor (fName, lName) {
       this.fName = fName,
       this.lName = lName 
    } 

    get fullName() {
        return `${this.fName} ${this.lName}`  //template literal (back-tick key under escape)
    }

    set fullName(value) {
        const parts = value.split(' '); //split string into array elements.
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

const myPerson = new Person('Bill', 'Matera');
console.log(myPerson.fullName);
myPerson.fullName = 'John Smith';    //assignment like a property, not like a function call.
console.log(myPerson.fullName);
console.log(myPerson.fName);

//try catch - error handling, starting w/previous code.
const people = {
    firstName: 'Bill',
    lastName: 'Matera',

    get fullName() {
        return `${this.firstName} ${this.lastName}`   //template literal (back-tick key under escape)
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('value is not a string');  //this raises an exception. Jump back to call/catch.
        
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error(`You entered: ${value}      Enter first and last name`);

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    people.fullName = 'John Smith';  //Setter - assignment like a property.
}
catch (e) {
    // console.log(e);  //only visible to developers
    alert(e);           //An old techique. Run using live server to see msg in Chrome. Save this file to rerun.
}
console.log(person.fullName);  //Getter for fullName

//local vs global scope
//avoid defining global variables and constants as this can lead to bugs in programs.
//Define within code blocks as part of function or conditional statement. 
//if defined globally, then data element available everywhere. however, if duplicate
//local variable w/same name, then local variable takes precedent. Could lead to a bug.


//let vs var
//var is function scoped, meaning a variable still exists outside of code block. not like other languages.
//let is code block scoped. Like other programing languages.
function start() {
    for (var i=0; i<5; i++)   //change var to let and get error on second console.log(i)
        console.log(i);

    console.log(i);           //with let this becomes out of scope.
}
start();
//var - was only way to define variables prior to ES6 => function scoped variables
//ES6 (ES2015) - added let and const to define variables. => block scoped variables

var color = 'red';  //var attaches to window object. see in chrome console. In node its called Global, but working diff.
let age = 30;       //let does not attach to window object. Better approach.
                    //There is only one window object and central to environment. A 3rd party library
                    //may use window object and we may conflict by using var.

//another word of warning. Defining function like below attaches to window object. 
//Mosh to explain how to encapsulate so it does not in a later course. Apparently not good code.
function sayHi() {
    console.log('hi');
}
sayHi();

//'this' keyword - 'this' references the object that is executing the current function.
//3 ways 'this' keyword can be used
//1- If function is part of an object, its called a method. Use of 'this' in method references object.
//2- 'this' used in a function that is NOT part of object, then this references global object: window (chrome) or global (node)
//3- 'this' used in a constructor function. Then 'this' will reference the new object

//example of 1 - use of 'this' in method play, references object video.
const video = {
    title: 'a',
    play() {
        console.log(this);   //'this' references the object itself (the video object).
    }
}
video.play();           //returns the video object, b/c 'this' references the video object.

video.stop = function () {  //we can add a method to video and works same. 'this' references video object
    console.log(this);
}
video.stop();

//example of 2 - 'this' used in a standalone function, not part of an object. 
//References global object: window (in chrome) or global (in node)
function playVideo() {
    console.log(this);
}
playVideo();

//example of 3 - 'this' used in a constructor function
function Video(title) {     //pascal case for constructor function
    this.title = title;
    console.log(this);
}
const v = new Video('b');  //creates a new object. 'this' references the new object.
console.log(v);            //same output of line above. 'this' references that new object.

//careful if using 'this' in callback function. It may not reference the object it's in, but rather the Global object
//Listen to Mosh's explanation if needed.
//bottom line, use arrow functions as they inherit the 'this' value from the containing function.
//example:
const video1 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags () {
        this.tags.forEach(tag => {
            console.log(this.title, tag);   //'this' references video1 object (not global windows obj) b/c using arrow function.
        });
    }
};
video1.showTags();
