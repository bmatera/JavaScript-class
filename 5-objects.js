//objects - collections of key/value pairs. Group related properties and methods. 
//          Define the objects data and behavior.
//The value of a key/value pair can be anything in javascript.
// circle is an object. Use let or const. 
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

//Constructor Function
function Circle(radius) {        //use pascal naming, first letter capital for each word.
    this.radius = radius,        //this keyword used to mean this function.
    this.draw = function() {
        console.log("draw")
    }
}
const myCircle = new Circle(3);  //myCircle points to new object instance w/radius 3. 
console.log(myCircle);

myCircle.color = 'Yellow';      //assign a new property to a circle
myCircle.draw = function() {};  //assign a new function
console.log(myCircle);          //console will show above in circle object

//Value vs Reference Objects
//JavaScript has two kinds of types: Primitives (value) and Reference types.
    //Primitives: number, string, boolean, symbol, undefined, null
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
const circle3 = {    //first define an object called circle1 that has a property and method
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

//cloning an object




