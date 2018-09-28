function isLandscape (width, height) {
    // return (width > height) ? true : false;   NOTE true and false are redundant.
    // This can be professionally written as below
    return (width > height);
}

console.log(isLandscape(600, 300));