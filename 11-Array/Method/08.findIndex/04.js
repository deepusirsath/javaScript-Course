// findIndex() with Object Elements

// defining an object
const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

// function that returns age greater than or equal to 18
function isAdult(member) {
  return member.age >= 18;
}

// returns the index of the first element which is
// greater than or equal to 18
console.log(team.findIndex(isAdult)); // 2
