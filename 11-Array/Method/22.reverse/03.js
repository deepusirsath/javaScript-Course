// reverse() Method with Spread Operator

let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// using spread operator to reverse the array
let reversedArray = [...languages].reverse();

console.log("Reversed Array:", reversedArray);

// modifies the original array
console.log("Original Array:", languages);

// Reversed Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
// Original Array: [ 'JavaScript', 'Python', 'C++', 'Java', 'Lua' ]
