
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj){
    for (let key in obj) 
        //console.log(key);  This only provides the property name, e.g. title.
        if (typeof obj[key] === 'string')
           console.log(key, obj[key]);
}