// findIndex() with Arrow Function

// defining an array
let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

// returns the first index of 'Wednesday' in the array
let index = days.findIndex((day) => day === "Wednesday");

console.log(index); // 1
