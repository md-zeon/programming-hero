//! Problem 01

function foo() {
    console.log("foo");
    bar();
}

function bar() {
    console.log("bar");
}

foo();

//! Problem 02

function make_avg(a,b,c) {
    var sum = a+b+c;
    return sum / 3;
}

var res = make_avg(2, 3, 4);

console.log(res);

//! Problem 03

function get_avg(arr) {
    var sum = 0;
    for(var i = 0; i < size; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

function get_avg2(arr) {
    var sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

var arr = [1,2,3,4,5,6,7,8];
var result = get_avg2(arr);
console.log(result);



//! Problem 04

function odd_even(num) {
    if(num % 2 == 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

var num = odd_even(2);

console.log(num);

//! Problem 05

var signal = 'green';

switch (signal) {
    case 'red':
        console.log('Stop');
        break;
    case 'yellow':
        console.log('Wait');
        break;
    case 'green':
        console.log('Go');
        break;
    default:
        console.log('Unknown Signal');
}