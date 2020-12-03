//Show all prime numbers up to a limit
//prime number = factors are only 1 and itself. 
//all other numbers are composite.
//Examples: 
//factors of 12 = 1,2,3,4,6,12  (all these numbers divide into 12 evenly, composite) 
//factors of 11 = 1,11 (this is a prime number)
//factors of  4 = 1,2,4 (composite)

showPrimes(100);

function showPrimes(limit) {
    //loop for going through numbers up to the limit
    for (let number = 1; number <= limit; number++) {

        //loop to determine if prime by checking factors
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {  //check if factors exist other then 1 and itself. 
            if (number % factor === 0) {  //if divides evenly then a factor, isPrime = false
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}
//Mosh creates a separate function to determine if a number is prime. 
