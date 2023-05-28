// defining an array
const languages = ["Java", "C", "C++", "Python"];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator = languages.entries();

// looping through key-value pairs in the array
for (let entry of iterator) {
  console.log(entry);
}

// [ 0, 'Java' ]
// [ 1, 'C' ]
// [ 2, 'C++' ]
// [ 3, 'Python' ]
