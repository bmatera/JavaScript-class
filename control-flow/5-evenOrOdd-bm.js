showNumbers(9);

function showNumbers (limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) 
           console.log(i, "even");
        else
           console.log(i, "odd");

        //alternate solution
        //const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        //console.log(i, message);
    }
}