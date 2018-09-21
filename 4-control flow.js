//section 4 - control flow
//conditional statements. If..else, switch..case
let hour = 10;
if (hour >= 6 && hour < 12) {    //use brackets if more then one statement.
    console.log('good morning');  
    console.log('get coffee');
}
else if (hour >= 12 && hour < 18)  //add multiple else if, as needed.
    console.log('good afternoon');
else 
    console.log('good evening');

let role = 'guest';
switch (role) {
    case 'guest': 
        console.log('guest user');
        break;        //must break otherwise next statement executed.
    case 'moderator':
        console.log('moderator user');
        break;
    default:          //catch all if nothing matches.
        console.log('unknown user');
}
//Can do same w/if..else. Mosh prefers if..else. 
//for loop
for (let i = 1; i <= 5; i++) 
    if (i % 2 !== 0) console.log(i); //odd numbers

//while loop - the for loop above in a while loop.
let i = 1;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i); //odd numbers
    i++;
}

//do..while - always executed at least once.
//not as common as while and for loop, but use if needed.
let j = 1;
do {
    if (j % 2 !== 0) console.log(j); //odd numbers
    j++;
} while (j <= 5);

//for-in loop. iterate over the properties of an object.
const person = {
    name: 'mosh',
    age: 30
};
for (let key in person)
    console.log(key, person[key]);  //note bracket notation since we do not
                                    //know property. if we did then dot notation.
//can use this to iterate over arrays but better to use for..of loop.
const colors = ['red', 'blue', 'green'];
for (let color of colors)
    console.log(color);  //no index required. color gets value as it iterates.
                             