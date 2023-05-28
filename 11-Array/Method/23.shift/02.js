// The shift() method removes the first element from an array and returns that element.

// Example

let languages = ["English", "Java", "Python", "JavaScript"];

// removes the first element of the array
let first = languages.shift();
console.log(first);
console.log(languages);

// Output: English
//         [ 'Java', 'Python', 'JavaScript' ]

// Notes:

// This method changes the original array and its length.
// To remove the last element of an array, use the JavaScript Array pop() method.
