//! Problem 01
//^ 1-1
const multipy = (n1, n2, n3) => n1 * n2 * n3;
console.log(multipy(2, 3, 4));

//^1-2
const sentence = `I am a Web Developer.
I love to Code.
I love to eat Biriyani.`;

console.log(sentence);

//^1-3

const add = (num1, num2 = 0) => num1 + num2;

console.log(add(5));

//! Problem 2

const findFriends = (friends = []) => {
  const evenFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 == 0) {
      evenFriends.push(friend);
    }
  }
  return evenFriends;
};

const friends = [
  "Zeanur Rahaman Zeon",
  "Samiul Islam",
  "Md Shariul",
  "Jannat",
  "Abir",
  "Shahjalal Riaz",
  "Muzahid Hosain Billah",
  "Akash Chowdhury",
  "Kamal Hossain",
  "Sojib Bishwas",
  "Zihadul Islam",
  "Abir Al Murad",
];

console.log(findFriends(friends));



//! Problem 3

const getAverage = (numbers) => {
    let sum = 0;
    for(const number of numbers) {
        sum += number * number;
    }
    return sum / numbers.length;
}


console.log(getAverage([1,2,3,5]));


//! Problem 4

const combine = (arr1, arr2) => {
    const Array = [...arr1, ...arr2];
    const max = Math.max(...Array);
    return max;
}

console.log(combine([1,2,5], [7,3,9]));