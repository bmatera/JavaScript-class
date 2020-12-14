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
console.log(numbers.indexOf(4));   //returns index of element or -1 if element does not exist. Can also set starting index
console.log(numbers.lastIndexOf(1));  //returns index of last element that matches. Can also set starting index.
console.log(numbers.includes(6));     //returns true if element exists in array.
// The above methods have second argument to specify starting location in array, if desired.

//finding elements - Reference types
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
]

//find a course object in the array.
const course = (courses.find(function(course){
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
nums2 = []; //set to a NEW empty array. However, orig array still exists so be careful
console.log(nums2);

nums2 = [1,2,3,4]
nums2.length = 0;   //probably best approach
console.log(nums2);

nums2 = [1,2,3,4]
nums2.splice(0, nums2.length); //bit noisy
console.log(nums2);

nums2 = [1,2,3,4]
while (nums2.length > 0)  //could be inefficient for large arrays e.g. 1 million elements.
    nums2.pop();
console.log(nums2);

//combining & slicing arrays
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combined = firstArray.concat(secondArray);  //combine arrays
console.log(combined);

const slice = combined.slice(2,4);  //start at index 2, end at index 4.
console.log(slice);
//primitive values are copied, objects are by reference.
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




