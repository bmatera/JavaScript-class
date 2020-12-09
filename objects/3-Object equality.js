let address1 = new Address('7 Natale way', 'Farmingdale', '07727');
let address2 = new Address('7 Natale way', 'Farmingdale', '07727');
let address3 = address1; //These are pointing to same object.

//constructor function to create object.
function Address(street, city, zipcode) {        //use pascal naming, first letter capital for each word.
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
};

console.log(same(address1, address2));
console.log(areEqual(address1, address2));
console.log(areEqual(address3, address1));

//are they the same object? No (false) two different objects
function same(address1, address2) {
    return (address1 === address2) 
}

//are they equal in terms of each property being equal? yes.
function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipcode === address2.zipcode; 
}

