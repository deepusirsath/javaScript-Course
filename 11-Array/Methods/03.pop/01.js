//pop - it is used to remove any element in array in the last position

// ye remove krne k sath sath us element ko return b krta h

// This method changes the original array and its length.

const a = ["apple", "mango", "banana"];
console.log(a); //["apple", "mango", "banana"]

const b = a.pop();

console.log(a); //["apple", "mango"]--after pop

console.log(b); //banana-reomoved item

// pop returns any type of object
var numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [-5, -4, -3],
  ];
  console.log(numbers.pop()); // [ -5, -4, -3 ]
  console.log(numbers); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]