
const numbers = [1, 2, 3, 4, 6, 8, 9.1]; 

const max = getMax(numbers);

console.log(max); 

function getMax(array) { 
  if (array.length === 0) return undefined; 

  // let max = array[0];

  // for (let i = 1; i < array.length; i++)
  //   if (array[i] > max)
  //     max = array[i];

  // return max; 
  
  //we do not intialize a, therefore, a is = to first element of array.
  //the callback function iterates through the array and returns largest number.
  return array.reduce((a, b) => (a > b) ? a : b);
};

