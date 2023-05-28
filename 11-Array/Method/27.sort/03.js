// Sorting using Custom Function

// custom sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

function len_compare(a, b) {
  return a.length - b.length;
}

// sort according to string length
names.sort(len_compare);

console.log(names);

// [ 'Ben', 'Adam', 'Danil', 'Jeffrey', 'Fabiano' ]
