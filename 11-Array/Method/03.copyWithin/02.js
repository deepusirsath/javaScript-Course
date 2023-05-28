let numbers = [1, 2, 3, 4, 5];

// copying element located at 4th index to 0th index
numbers.copyWithin(0, 4);

// modifies the original array
console.log(numbers); // [ 5, 6, 3, 4, 5 ]

let letters = ["a", "b", "c", "d"];

// copying element located at 1st index to 2nd index
letters.copyWithin(2, 1);

// modifies the original array
console.log(letters); // [ 'a', 'b', 'b', 'c' ]
