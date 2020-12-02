function isLandscape (width, height) {
    // return (width > height) ? true : false;   NOTE true and false are redundant.
    // This can be professionally written as below
    return (width > height);  //This expression evaluates to either true or false. No need to explicitly code.
}

console.log(isLandscape(600, 800));