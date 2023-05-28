// Using splice() for different deleteCount values

let languages = ["JavaScript", "Python", "Java", "Lua"];

// does not removes, only appends to the end
let removed = languages.splice(5, 2, "C++");
console.log(removed); // []
console.log(languages); // ["JavaScript", "Python", "Java", "Lua", "C++"]

// remove last element and add 3 more elements
let removed1 = languages.splice(-1, 1, "Swift", "Scala", "Go");
console.log(removed1); // [ "C++" ]
console.log(languages); // ["JavaScript", "Python", "Java", "Lua", "Swift", "Scala", "Go"]
