//The copyWithin() method copies array elements from one position to another in the given array

let words = ["apple", "ball", "cat", "dog"];

// copies element from index 0 to index 3
words.copyWithin(3, 0);

// modifies the original array
console.log(words);

// Output:
// [ ''apple'', ''ball'', ''cat'', ''apple'' ]
