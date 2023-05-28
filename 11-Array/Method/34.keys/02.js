let languages = ["JavaScript", "Java", "C++", "Python"];

// returns an Array Iterator Object that contains keys
let iterator = languages.keys();

// looping through the iterator object
for (let key of iterator) {
  console.log(key);
}

// 0
// 1
// 2
// 3
