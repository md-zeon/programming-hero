var student = { 
    id: 115, 
    name: 'Solamin Khan', 
    class: 9, 
    marks: 98
}

var mobile = {
    brand: 'Samsung',
    price: 19000, 
    storage: '64gb',
    camera: '7MP',
    color: 'Black'
}


var myComputer = {
    brand: 'lonovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}

console.log(myComputer.processor);
myComputer.processor = 'i79';
console.log(myComputer);

console.log(mobile.color);