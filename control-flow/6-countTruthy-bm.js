//falsey values = undefined, null, '', false, 0, NaN.  Everything else is a truthy.
const myArray = [1, 2, 3, 5, true, null, undefined, NaN, '', false, 0, 'Bill', 'John'];
console.log(countTruthy(myArray));

function countTruthy (array) {
  let count=0;  
  for (let value of array) {
    if (value)      
      count++;
      //JS engine will interpret as truthy or falsey. No need to check for all falsey/truthy conditions.
      //Remember, it doesn't have to be boolean as JS engine will determine if truthy or falsey.
  }
  return count;
}