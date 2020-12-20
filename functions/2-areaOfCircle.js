//create an object literal that has a radius property of 1 and a read-only area.
//for read only make area a getter and no setter. without a setter you 
//cannot set a new area.

const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);
console.log('break here and try to set area');
console.log(circle.area);  //This will show that circle.area has not changed.