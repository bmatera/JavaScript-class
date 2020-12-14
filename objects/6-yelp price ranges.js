//implement the concept of yelp price ranges. 
//$ - inexpensive (5 - 10 dollars)
//$$ - moderate (11 - 20 dollars)
//$$$ - expensive (21 - 50 dollars)

//create and array of objects
let priceRanges = [
    {label: '$', toolTip: "inexpensive", minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', toolTip: "moderate", minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', toolTip: "xpensive", minPerPerson: 21, maxPerPerson: 50},
]

let resturants = [
    {avgPricePerPerson: 5}
]

//Compare resturants.avgPricePerPerson to priceRanges 
if (resturants[0].avgPricePerPerson < priceRanges[0].maxPerPerson) console.log('inexpensive');
console.log('done');

