// Using splice() for different start values

let languages = ["JavaScript", "Python", "Java", "Lua"];

// removes everything from start
let removed = languages.splice(1);
console.log(removed); // [ "Python", "Java", "Lua" ]
console.log(languages); // [ "JavaScript" ]

// remove none & add 3 more element
let removed1 = languages.splice(1, -2, "Swift", "Scala", "Go");
console.log(removed1); // [ ]
console.log(languages); // [ "JavaScript", "Swift", "Scala", "Go" ]
