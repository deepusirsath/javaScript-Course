// Example 2:

//Sorting the Elements of an Array
// When compareFunction is not passed,

// All non-undefined array elements are first converted to strings.
// These strings are then compared using their UTF-16 code point value.
// The sorting is done in ascending order.
// All undefined elements are sorted to the end of the array.

// sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// returns the sorted array
console.log(names.sort());

// modifies the array in place
console.log(names);

var priceList = [1000, 50, 2, 7, 14];
priceList.sort();

// Number is converted to string and sorted
console.log(priceList);

// [ 'Adam', 'Ben', 'Danil', 'Fabiano', 'Jeffrey' ]
// [ 'Adam', 'Ben', 'Danil', 'Fabiano', 'Jeffrey' ]
// [ 1000, 14, 2, 50, 7 ]
