
const numbers = [1, 2, 3, 4]; 

const output = move(numbers, 1, -2);

console.log(output); 

function move(array, index, offset) { 
  const position = index + offset;  
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return; 
  }
  
  const output = [...array];
  const element = output.splice(index, 1)[0];  //remove element from output array and store in element.
  output.splice(position, 0, element);         //insert element in new position in output array.
  return output;
};
