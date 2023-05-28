// find() with Object elements

const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

function isAdult(member) {
  return member.age >= 18;
}

console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }

// using arrow function and deconstructing
let adultMember = team.find(({ age }) => age >= 18);

console.log(adultMember); // { name: 'Alan', age: 20 }
