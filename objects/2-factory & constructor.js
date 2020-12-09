//Factory Function - create a function that returns an object.
function createAddress(street, city, zipcode) {    //use camel case when naming
    return {                                       //return an object
        street: street,       //when same can write in shorthand notation: street, 
        city: city,
        zipcode: zipcode
    }
};

let address = createAddress('7 Natale way', 'Farmingdale', '07727');
console.log(address);


//Constructor Function - similiar to Java & c#.
function Address(street, city, zipcode) {        //use pascal naming, first letter capital for each word.
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
};

let myAddress = new Address('7 Natale Way', 'Farmingdale', '07727');
console.log(myAddress);