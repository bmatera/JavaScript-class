
console.log(sum([1, 2, 3, 4]));

function sum(...items) { 
   if (items.length === 1 && Array.isArray(items[0])) //check to see if items is array of arrays.
     items = [...items[0]];                           //if yes, spread (copy) first array[0] to items

  return items.reduce((a, b) => a + b);
};
