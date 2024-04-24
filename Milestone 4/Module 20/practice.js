//! Practice Problem 01

function hourToMinutes(hour) {
    return hour * 60;
}

console.log(hourToMinutes(3), 'minutes');

function findLeapYear(year) {
    const leapYear = [];
    for(let i = 0; i < year.length; i++) {
        if(year[i] % 4 === 0) {
            if(year[i] % 100 === 0) {
                if(year[i] % 400 === 0) {
                    leapYear.push(year[i]);
                }
            } else {
                leapYear.push(year[i]);
            }
        }
    }

    return leapYear;
}

const arr = [2023, 2024, 2025, 2028, 2030];

console.log('Leap Year =', findLeapYear(arr));