/* 
------------------
LOOP
------------------
1. Display "Ajke amar mon valo nei" for 39 times
2. Display numbers between 58 to 98
3. Show all even numbers from 412 to 456
4. Show all odd numbers 581 to 623
5. Difference between while loop and for loop
6. Declare an array for all the topics that you have learned last few days
display them as output
7. Create an array for all the mobile phones. Display all the elements of the array
by using a while loop
8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
9. Write the price of the books that you have. 
Display the prices if the prices is lower than 200
*/


//! Problem 01

// for(var i = 0; i < 39; i++) {
//     console.log(i+1 + ". Ajke amar mon valo nei");
// }

//! Problem 02

// for(var i = 58; i < 99; i++) {
//     console.log(i);
// }

//! Problem 03

// for(var i = 412; i <= 456; i+=2) {
//     console.log(i);
// }

//! Problem 04

// for(var i = 581; i <= 623; i+=2) {
//     console.log(i);
// }

//! Problem 06

var topics = ['HTML', 'CSS', 'Tailwind CSS', 'Daisy UI', 'Bootstrap', 'JavaScript'];

// for(var i = 0; i < topics.length; i++) {
//     console.log(topics[i]);
// }

//! Problem 07

var mobiles = ['Nokia', 'Symphony', 'Samsung', 'Oppo', 'Realme'];

var i = 0;

// while(i < mobiles.length) {
//     console.log(mobiles[i]);
//     i++;
// }

//! Problem 08

// for(var i = 30; i <= 86; i++) {
//     console.log(i);
//     if(i >= 44) {
//         break;
//     }
// }

//! Problem 09

var booksPrice = [120, 400, 350, 199, 249, 150];

for(var i = 0; i < booksPrice.length; i++) {
    if(booksPrice[i] >= 200) {
        continue;
    }
    console.log(booksPrice[i]);
}