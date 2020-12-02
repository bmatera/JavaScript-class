myArray = [];
for (i=0; i<10; i++)
    myArray[i] = i;

console.log('myArray = ' + myArray);
console.log(myArray[5]);
console.log(myArray.length-1);
// for (let element of myArray) {
//     console.log(element);
// }


console.log('reverse order')
for (i=myArray.length -1; i>=0; i--) {
    console.log(myArray[i])
}