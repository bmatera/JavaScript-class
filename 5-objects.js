//objects - collections of key/value pairs. Group related properties and methods. 
//          Define the objects data and behavior.
//The value of a key/value pair can be anything in javascript (object, array, literal, const, etc.)
//circle is an object. Use let or const. 
const circle = {   //note, const refers to object circle. circle cannot be reassigned.
    radius: 1,
    location: {    //embedded object.
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {  //function is called a method when part of an object.
        console.log('draw1');
    }
};

//access object properties using dot notation
circle.draw();
console.log(circle.isVisible);
console.log(circle.location.x);

//Here we hardcoded the data values. Next is to create an object that can be instantiated w/diff data.
//Two approaches: Factory Function or Constructor Function

//Factory Function
function createCircle(radius) {    //use camel case when naming
    return {
        radius,  //same as radius: radius
    //  draw: function() {        //defined as key/value pair, but simplier method below.
    //      console.log("draw")
    //  }
        draw() {                 //function, aka method, in object. behavior part of object.  
            console.log("draw2")
        }
    }
}

const circle1 = createCircle(1); //createCircle is object. circle1 is an instance w/radius 1.
console.log(circle1);
const circle2 = createCircle(2); //instantiate circle2 w/diff radius. 
console.log(circle2);

//Constructor Function - similiar to Java & c#.
function Circle(radius) {        //use pascal naming, first letter capital for each word.
    this.radius = radius,        //this keyword used to mean this function.
    this.draw = function() {
        console.log("draw")
    }
    // this.Position {         //appears you cannot define object inside constructor.
    //     x = x,
    //     y = y
    // }
 }

const myCircle = new Circle(3);  //myCircle points to new object instance w/radius 3. 
console.log(myCircle);
                                //you cannot reassign myCircle b/c const. But you can chg properties
myCircle.color = 'Yellow';      //assign a new property to a circle
myCircle.draw = function() {};  //assign a new function
console.log(myCircle);          //console will show above in circle object
delete myCircle.color;          //can also delete properties of an object
console.log(myCircle);

//Value vs Reference Objects
//JavaScript has two kinds of types: Primitives (value) and Reference types.
    //Primitives (i.e., value types): number, string, boolean, symbol, undefined, null
    //Reference types: object, function, array
let x1 = 10;  //variable assigned a primitive
let y1 = x1;  //That same primitive is assigned to another variable.
x1 = 20;      //x1=20 but y1 still equals 10
//go to console and see x1 = 20 and y1 = 10. These are independent variables. Value of x is copied into y.

let x2 = {value: 10};   //now we create an object called value and assign to x2. x2 contains an address.
let y2 = x2;            //y2 is assigned to same object as x2. Both x2 and y2 are point to same object.
x2.value = 20;          //change value of object and both x2 and y2 will show same value in console b/c they point to same object

//another example with paramater passing.
let x3 = 10;
function increase(x3) {
    x3++;                 //x3 is local to this function.
}
increase(x3);
console.log(x3);          //this x3 is the value outside of function increase

let obj = {value: 10};    //same as above but this time using an object.
function increase (obj) {
    obj.value++;
}
increase(obj);
console.log(obj.value);  //this object is defined outside the function and updated inside the function.

//enumerating properties of an object
const circle3 = {    //first define an object called circle3 that has a property and method
    radius: 1,
    draw() {
        console.log('draw');
    }
}
for (let key in circle3)   //use let .. in to iterate over an object. easiest way to iterate over an object
    console.log(key, circle3[key]);  //get key and value.

for (let key of Object.keys(circle3))  //However, can iterate of object properties using let..of by iterating over keys
    console.log(key);

for (let entry of Object.entries(circle3))  //same as above but now iterating over entries.
    console.log(entry);

if ('radius' in circle3) console.log('yes');  //check if property is in an object.

//cloning an object - given circle3 above
//modern javascript has object.assign and spread operator ...
let another = Object.assign({}, circle3); //assigns to empty object {} resulting in clone.
console.log(another);

let extendObj = Object.assign({color : 'red'}, circle3); //this extends object to include color property.
console.log(extendObj);

let myObj1 = circle3;  //this is not same as cloning. myObject now points to circle3, not a separate object. 
console.log(myObj1);

let dupObj = {...extendObj};  //use spread operator '...' to spread properties and methods to new object
console.log(dupObj);

//Garbage Collection
//automatically performed by JavaScript. You do not allocate / deallocate memory usage like in some other
//languages - c or c++. 

//javascript has many prebuilt objects, for example Math. Google 'math javascript' and first like provides
//good reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 
//some examples
console.log(Math.random());
console.log(Math.round(1.5));
console.log(Math.max (1,2,5,22,0,-1));
//other useful math functions: Math.pi, Math.abs(), Math.random(), Math.round(), Math.max(), Math.min().  

//string built in. google string javascript.
const message = ('hello world');  //string primitive
console.log(message);  
const objString = new String('this is a string object');  //string object
console.log(objString);
//look at typeof to see differences. 
//Mosh discusses many common string methods: length, includes, startswith(), endswith(), indexof, replace, 
//toUpperCase, toLowerCase, trim, trimLeft, trimRight
//escape notation - use to have certain chars in string like quotes. \n adds new line, etc.
//split - string into array elements.


//Template Literals - can use as alternate to escape notation
//we have literals:
// object {}
// boolean true, false
// string "", ''
// template `` (back tick below escape key)

const myMessage = ('This is my\n first message'); //print with new line after my. adding more escape chars gets messy.

//can use literal to make cleaner. Type it as it will be displayed. can add '' w/o having to escape them
const testMessage = (`This is my
'first' message`);

//another benefit of template literals is the use of place holders ${}. For example:
let name = 'john';
const email = (
`Hi ${name}
Thank you for your email. I received ${3+5} times. 

Bill`);
//place holder can be any expression.

//Date
const now = new Date();
console.log(now);
const date1 = new Date(2020,11,6,12,0) //note month is 0 based, so 11 is december.
console.log(date1);
const date2 = new Date('December 06 2020');
console.log(date2)

//all date objects have get and set methods
now.getDate();  //in console use now.toDateString() to get the date in now.
console.log(now);
const time1 = now.toTimeString();
console.log(time1);
const time2 = now.toISOString();
console.log(time2);







