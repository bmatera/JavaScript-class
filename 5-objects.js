//objects - collections of key/value pairs. Group related properties and methods. 
//          Define the objects data and behavior.
//The value of a key/value pair can be anything in javascript.
// circle is an object. Use let or const. 
const circle = {
    radius: 1,
    location: {  //embedded object.
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {  //function is called a method when part of an object.
        console.log('draw');
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
            console.log("draw")
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
const myCircle = new Circle(3);  //myCircle points to new object instance. 
console.log(myCircle);



