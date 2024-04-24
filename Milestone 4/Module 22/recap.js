//! Problem 01

function feetToInch(feet) {
    return feet * 12;
}

//! Problem 02

function centimeterToMeter(centimeter) {
    return centimeter / 100;
}

//! Problem 03
// book1 ---> 100
// book2 ---> 200
// book3 ---> 300
function paperRequirement(quantity1, quantity2, quantity3) {
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    const paperNeed = (book1*quantity1 + book2*quantity2 + book3*quantity3);
    return paperNeed;
}

console.log(paperRequirement(2,1,3));

//! Problem 04

function bestFriend(friends) {
    let best = '';
    for(let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        if(friend.length > best.length) {
            best = friend;
        }
    }
    return best;
}

let friends = ['Sahjalal Riaz', 'Muzahid Hossain Billah', 'Zeanur Rahaman Zeon', 'Akash Choudhury', 'Toufikuzzaman Emon'];

console.log(bestFriend(friends));


//! Problem 05

function onlyPositive(numbers) {
    let nums = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0) {
            break;
        }
        nums.push(numbers[i]);
    }
    return nums;
}

let numbers = [45, 87, 96, 11, 63, -56, 71, 28];

console.log(onlyPositive(numbers));