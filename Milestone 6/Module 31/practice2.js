const odd = [1, 3, 5, 7, 9];

const even = odd.map((n) => n + 1);
console.log(even);

const arr = [33, 50, 79, 78, 90, 101, 30];

const filtered = arr.filter((x) => x % 10 == 0);
const find = arr.find((x) => x % 10 == 0);

console.log(filtered);
console.log(find);

const instructor = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akhil", age: 26, position: "Junior" },
  { name: "Shobuj", age: 30, position: "Senior" },
];

const nameFilter = instructor.filter((person) => person.position === "Senior");

console.log(nameFilter);

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const totalAge = people.reduce((p, c) => p + c["age"], 0);

console.log(totalAge);
