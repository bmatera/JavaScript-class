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
    default:
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
