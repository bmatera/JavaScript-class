//create address object w/street, city, zipcode. Then iterate through object

let address = {
    street: '7 Natale Way',
    city: 'Farmingdale',
    zipcode: '07727'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
};

showAddress(address);


