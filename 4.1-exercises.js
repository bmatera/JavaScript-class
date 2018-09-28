// return max number
// let arg1 = 10;
// let arg2 = 12;
console.log('max number = ', max (10, 12));

function max (num1, num2) {
  return (num1 > num2) ? num1 : num2;
}

function isLandscape (width, height) {
    // return (width > height) ? true : false;   NOTE true and false are redundant.
    // This can be professionally written as below
    return (width > height);
}

console.log(isLandscape(600, 300));

//fizzBuzz - a common exercise.
//divisible by 3 => fizz
//divisible by 5 => buzz
//divisible by 3 and 5 => fizzbuzz
//not divisible by 3 or 5 => number
//not a number => 'not a number'

let output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return NaN;

  if ((input % 3 ===0) && (input % 5 ===0))
    return 'fizzbuzz';

  if (input % 3 === 0) 
    return 'fizz';

  if (input % 5 === 0)
    return 'buzz';

  return (input);
}

//speed limit exercise
//speed limit = 70
//for every 5 over = 1 point
//12 or more points = suspended
//Math.floor(1.3) = 1   Returns largest integer number that is <= integer.

