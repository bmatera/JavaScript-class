//cover all things you can do w/arrays, like adding, removing, finding, et. array elements. Splitting and combining arrays.
const numbers = [3,4];   //array content can be modified, just cannot reassign numbers to something else b/c const.

//array are objects so can look at properties using dot notation
numbers.push(5,6);  //add elements at end
console.log(numbers);
numbers.unshift(1,2); //add elements at beginning of array
console.log(numbers);
numbers.splice(2,0,'a','b',1); //splice in elements in middle of array
console.log(numbers);

//finding elements - Primitives
console.log(numbers.indexOf(4));     //returns index of element or -1 if element does not exist. Can also set starting index
console.log(numbers.lastIndexOf(1));  //returns index of last element that matches. Can also set starting index.
console.log(numbers.includes(6));     //returns true if element exists in array.
// The above methods have second argument to specify starting location in array, if desired.

//finding elements - Reference types. Example is array of objects.
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
]

//find a course object in the array and return the object.
const course = (courses.find(function(course){          //callback function, called for each element (object) in the array.       
    return course.name === 'b' && course.id === 2 ;
}));
console.log(course);  //returns object if found; otherwise returns undefined.
//find is a bit complicated so do google: javascript find. brings you to mozilla w/example.
//For find method we pass a function, which is called a predicate, also referred to as a callback function
//since it is called back for each element in the array. 
//can also use .findIndex above that will return index.

//arrow function syntax for predicte / callback function. Above can be rewritten as
const myCourse1 = (courses.find (course => {            //fat arrow function
    return course.name === 'b' && course.id === 2 ; 
}));
console.log(myCourse1);

//even shorter if function is single line of code.
const myCourse2 = courses.find (course => course.name === 'b' && course.id === 2);   
//The callback function is course with fat arrow to expression. 
console.log(myCourse2);

//removing elements from array
const nums = [1,2,3,4];
let last = nums.pop(); //return last element of array
console.log(last);

let first = nums.shift();  //returns first element of array
console.log(first);  

nums.splice(2, 1);  //remove elements in middle of array.
console.log(nums);

//emptying an array
let nums2 = [1,2,3,4]
console.log(nums2);
nums2 = []; //set to a NEW empty array. However, orig array still exists so be careful.
            //if not assigned elsewhere it will eventually be picked up by garbage collector.
console.log(nums2);

nums2 = [1,2,3,4]
nums2.length = 0;   //probably best approach
console.log(nums2);

nums2 = [1,2,3,4]
nums2.splice(0, nums2.length); //bit noisy
console.log(nums2);

nums2 = [1,2,3,4]
while (nums2.length > 0)  //could be inefficient for large arrays e.g. 1 million elements.
    nums2.pop();          //pops one element at a time.
console.log(nums2);

//combining & slicing arrays
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combined = firstArray.concat(secondArray);  //combine arrays
console.log(combined);

const slice = combined.slice(2,4);  //start at index 2, end at index 4.
console.log(slice);
//primitive values are copied, objects are by reference. copy by value copy by reference.
//if you change fistArray to contain an object, then combined will include reference to that object
const objArray = [{id: 1}];
const primArray = [4, 5, 6];
const mixedArray = objArray.concat(primArray);
console.log(mixedArray);
objArray[0].id = 10;  //this will also effect mixedArray b/c object is copied by reference not value.
console.log(mixedArray);

//spread operator - cleaner way to combine arrays
const spreadCombine = [...objArray, ...primArray];  //spread operator copies all elements. Can add other elements easily
console.log(spreadCombine);
const copyArray = [...spreadCombine];  //use spread operator to copy array.
console.log(copyArray);

//iterating an array.
const nums3 = [1, 2, 3]; 
for (num of nums3) {             //use for of loop
    console.log(num);
}

nums3.forEach(function (num) {   //use forEach method with callback function 
    console.log(num);
});

nums3.forEach(num => console.log(num));  //arrow function syntax using fat arrow.

nums3.forEach((num, index) => console.log('index =', index, ' value =', num));  //also has index parameter.

//joining elements in an array
const nums4 = [1, 2, 3];
const joined = nums4.join(',');     //a ? in help dialog indicates optional.
console.log(joined);

//split method goes hand in hand w/join. But it works w/strings and returns an array.
const message = 'this is my first message';
const parts = message.split(' ');      //returns an array.
console.log(parts);
//now that we have parts they can be combined into string.
//particularly useful when building a url slug. A slug is the webpage identifier string at end of URL.
const combine1 = parts.join('-');
console.log(combine1);

//sorting arrays w/primitives and reference types (objects)
const nums5 = [2, 3, 1];
nums5.sort();
console.log(nums5);
//can reverse order
nums5.reverse();
console.log(nums5);
//above is useful when numbers and strings in array. 
//However, when objects you need to do more.
const courses2 = [
    {id: 1, name: 'Node.js'},
    {id: 1, name: 'JavaScript'}
];

//The below does an ascii sort. This means need to convert UC and/or LC to all one case, upper or lower.
//otherwise sort won't work due to ascii chars. 
courses2.sort(function (a,b) {      //to sort objects then need to use function and return -1, 1, 0 as noted.
    //a<b => -1
    //a>b => 1
    //a===b => 0
    const nameA = a.name.toUpperCase();  //convert all to upper so comparisons are equal. 
    const nameB = b.name.toUpperCase();  //convert all to upper so comparisons are equal.

    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
});
console.log(courses2);

//Testing elements of arrays:  every and some methods
const nums6 = [1, -1, 3, 5];
const allPositive = nums6.every(value => (value >= 0));  // long form callback: (function(value(a)) {expression})
console.log(allPositive);
//every - true if every element in array is positive. Will exit once neg number found
//some -  true if some elements in array are positive. 
const atLeastOnePositive = nums6.some(value => (value >=0));
console.log(atLeastOnePositive);

//filtering an array
const filtered = nums6.filter(value => value >=0);  //filters array values to positive numbers.
console.log(filtered);

//Map method - map each array element to a list item for HTML display.
const items = filtered.map(n => '<li>' + n + '</li>');   //n is the parameter to callback function.
console.log(items);
//now join elements of this array to create a string
const html = '<ul>' + items.join('') + '</ul>';   //set separator to empty string
console.log(html);

//another example of mapping each array element to an object
const itemsObjects = filtered.map(n => {      //map each array element to an object
    return obj = {id: n};
});
console.log(itemsObjects);
//if you rewrite above using shortened be careful to put () around object; 
//otherwise javascript thinks {} is a code block, not an object.
const itemsObjects2 = filtered.map(n => ({id: n}));
console.log(itemsObjects2);

//methods can be chained together. These could be on same line but convention is separate lines.
//The output of 1 feeds 2 which feeds 3, etc.  These methods all have callback functions. 
const items2 = nums6
    .filter(value => value >=0)    //1-filter array elements >= 0, returns a filtered array.
    .map(n => ({id: n}))           //2-map each array elememt to object, returns an array of objects. 
    .filter(obj => (obj.id > 1))   //3-filter array element Object.id > 1, returns a filtered array
    .map(n => n.id);               //4-map each array element to object id value, returns array of numbers.
console.log(items2);

//Reducing an array, eg. add together all elements of an array
const nums7 = [1,-1,2,3];
let sum = 0;
for (let n of nums7)
    sum += n;
console.log(sum);
//better & more modern way is to use reduce method
//callback function takes 2 parameters: accumulator and currentValue.
//Called for each element in array. Last argument sets accumulator default value.
const sum1 = nums7.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;          //reduce methods stores accumulator value as it cycles thru array.
}, 0);
console.log(sum1);






