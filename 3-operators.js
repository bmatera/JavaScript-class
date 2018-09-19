//Section 3 -Operators
let x=10;
let y=3;
//arithmetic operators
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);  //remainder of division
console.log(x**y); //exponetiation - x to the power of y

console.log(++x);  //increment first
console.log(--x);  //decrement first
console.log(x++);  //increment after
console.log(x--);  //decrement after

//assignment operator
x=3;
console.log(x++);
console.log(x+=5);  //same as x=x+5
console.log(x*=5);  //same as x=x*5
//can use shorthand with all arithmentic operators.

//comparison operators
let z=1
console.log(z>0);
console.log(z>=1);
console.log(z<1);
console.log(z<=1);
console.log(z===1);
console.log(z!==1);

//equality operators
console.log(1===1);  //strict equality, must match type & value (true)
console.log('1'===1);  //types do not match (false)
console.log('1'==1);   //lose equality (true). Only checks if values are equal.
  //if types do not match then automatically converts type on right to match that on left
console.log(true ==  1); //1 is converted to boolean, so results in (true).

//ternary operator - if then else shorthand
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//logical operators
//logical AND (&&) - returns true if both operands are true, otherwise its false.
console.log(true && true);
//logical OR (||) - returns true if one operand is true, otherwise its false.
console.log(false || true);
//not operator (!)
console.log(false || !true);

//logical operators, non-boolean (Falsy and truthy)
//falsy - undefined, null, 0, false, '', NaN (Not a Number)
//truthy - anything that is not falsy.
console.log(false || true);
console.log(false || 'bill'); //bill is not falsy so truthy
console.log(false || 1);      //1 is not falsy so truthy
 //logical OR continues until it finds true or truthy or end, then exits on that value
 console.log(false || 1 || 2);  //short circuits to 1. 
 //if truthy value is found then its returned.
 //use case - provide default value
 let userColor = 'red';  //can change to undefined, then blue becomes currentColor
 let defaultColor = 'blue';
 let currentColor = userColor || defaultColor;
 console.log(currentColor);

 //bitwise operators - logical operators that work on bits.
 //   1 = 00000001
 //   2 = 00000010
 console.log(1 | 2); // bitwise OR (note single verticle line)
   // if either bit is 1 then result is 1.
   // 1 = 00000001
   // 2 = 00000010
   // r = 00000011 (this equals 3 in binary)
 console.log(1 & 2); // bitwise AND (note single ampersand)
   // both bits must be 1 for result to be 1, otherwise its 0.
   // 1 = 00000001
   // 2 = 00000010
   // r = 00000000 (this equals 0 in binary)

// real world example. Read, write, execute permissions. can represent as:
// read    = 00000100
// write   = 00000010
// execute = 00000001
// r,w,e   = 00000111 (has all permissions)
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission; //use OR to assign permission

let message = 
  (myPermission & readPermission) ? 'yes' : 'no'; //use AND to check permission
console.log(message);
