function cubeNumber(number) {
    if(typeof number !== 'number') {
        return "Please enter a number";
    }
    if(number >= 0) {
        const cube = number * number * number;
        return cube;
    } else {
        return "Please enter a positive number";
    }
}

function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please enter a string";
    }
    if(string1.includes(string2)) {
        return true;
    }
    return false;
}

function sortMaker(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[0] < 0 || arr[1] < 0) {
            return "invalid input";
        } else if(arr[0] === arr[1]) {
            return "equal";
        } else {
            newArr.push(Math.max(arr[0], arr[1]));
            newArr.push(Math.min(arr[0], arr[1]));
            return newArr;
        }
    }
}


function findAddress(obj) {
    let street = obj.street;
    let house = obj.house;
    let society = obj.society;
    if(street == undefined) {
        street = '__';
    }
    if(house == undefined) {
        house = '__';
    }
    if(society == undefined) {
        society = '__';
    }
    
    return street + ',' + house + ',' + society;
}

function canPay(changeArray, totalDue) {
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    if(sum >= totalDue) {
        return true;
    } else {
        return false;
    }
}