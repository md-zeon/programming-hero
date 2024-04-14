//! Problem 01:

var fruits = ['Apple', 'Banana' ,'Orange'];
var idx = fruits.indexOf('Banana');
fruits[idx] = 'Mango';
fruits.pop();
fruits.push('Watermelon');

console.log(fruits);

//! Problem 02:

var grade = 80;

if(grade >= 80) {
    console.log("A Grade");
} else if (grade >= 60) {
    console.log("B Grade");
} else if (grade >= 50) {
    console.log("C Grade");
} else if(grade >= 40) {
    console.log("D Grade");
} else {
    console.log("F Grade");
}

//! Problem 03(no.1):

var a = 13;
var b = 79;
var c = 45;

if(a > b && a > c) {
    console.log(a + " is bigger");
} else if (b > c && b > a) {
    console.log(b + " is bigger");
} else {
    console.log(c + " is bigger");
}


//! Problem 03(no.2):

var side = [9, 8, 9];

if(side[0] == side[1] || side[0] == side[2] || side[1] == side[2]) {
    console.log('Triangle is Isosceles');
} else {
    console.log('Triangle is not isosceles');
}