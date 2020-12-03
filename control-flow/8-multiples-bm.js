//sum of multiples of 3 and 5.
//multiples of 3: 3, 6, 9, 12, ...
//multiples of 5: 5, 10, 15, ...

console.log(sum(100));

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum = sum + i;  //shorthand: sum += i;

  return sum;
}