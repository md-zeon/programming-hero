function milesToKilometer(miles) {
    const kilometer = miles*1.609;
    return kilometer;
}

const km = milesToKilometer(5);

console.log(km, 'kilometer');