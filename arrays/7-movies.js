const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
]

//All movies in 2018 with rating > 4
//sort by their rating
//descending order
//display their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating > 4)  //filter objects
    .sort((a,b) => a.rating - b.rating)            //see below for explanation of sort.
    .reverse()           //descending order
    .map(m => m.title);  //replace resulting array elements with just their titles

console.log(titles);

//sort by value, the just a - b. Here is why:
//  a < b => -1  (negative number)
//  a > b =>  1  (positive number)
//  a = b =>  0  (zero is equals)
//  Example:
//  a = 4.5
//  b = 4
//  a - b = .5 which is positive number meaning a > b. 
// simply subtract the ratings to determine if positive, negative or equal. 
// Do not need all those if statements for numeric numbers, but do need the a-b in arrow function!!
// see examples on mozilla.

