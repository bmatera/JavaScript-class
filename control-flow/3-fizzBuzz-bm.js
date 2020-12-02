//fizzBuzz - a common exercise.
//divisible by 3 => fizz
//divisible by 5 => buzz
//divisible by 3 and 5 => fizzbuzz
//not divisible by 3 or 5 => number
//not a number => 'not a number'

let output = fizzBuzz(30);
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