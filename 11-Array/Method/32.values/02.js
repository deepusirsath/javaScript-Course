// Using values() Method
let languages = ["A", "B", "C"];

// returns an iterator object that contain values of languages
let iteratorObject = languages.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}

// A
// B
// C
