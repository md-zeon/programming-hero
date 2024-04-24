const jim = 69;
const dela = 97;
const chinku = 99;

if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if (dela > jim && dela > chinku){
    console.log('Dela will eat cake in this bela');
}
else{
    console.log('Chinku will get the cake');
}

Math.max(12, 45);

// Homework: 1
// write a function that will take 3 numbers will return the max number
// Write a function that will take 3 parameters and will return the min number

// first time do it using if-else

function findMax(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3 && num2 > num1) {
        return num2;
    } else {
        return num3;
    }
}

function findMin(num1, num2, num3) {
    if(num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num3 && num2 < num1) {
        return num2;
    } else {
        return num3;
    }
}
// second time do it using Math.min or Math.max

function getMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function getMin(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

var max = findMax(20,139,25);
var min = findMin(20,139,25);

console.log('Max:', max, 'Min:', min);

max = getMax(293,283,23);
min = getMin(293,283,23);

console.log('Max:', max, 'Min:', min);