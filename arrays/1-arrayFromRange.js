
const numbers = arrayFromRange(1, 50);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);    //add i to array via push.
  return output;
}