// Example 2: fill() Method with Three Arguments

// array definition
var language = ["JavaScript", "Python", "C", "C++"];

// replacing element of array from index 1 to 3 by 'JavaScript'
language.fill("JavaScript", 1, 3);

// printing the original array
console.log(language);

//[ 'JavaScript', 'JavaScript', 'JavaScript', 'C++']
// Example 3: fill() Method with Invalid Indexes

var rank = [8, 9, 3, 7];

// on passing negative index, counting starts from back
rank.fill(15, -2);

// prints the modified 'rank' array
console.log(rank); // [ 8, 9, 15, 15 ]

// passing invalid index result in no change
rank.fill(15, 7, 8);

console.log(rank); // [ 8, 9, 15, 15 ]

// passing invalid indexes
rank.fill(15, NaN, NaN);

console.log(rank); // [ 8, 9, 15, 15 ]
