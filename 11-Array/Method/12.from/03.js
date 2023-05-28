// from() Method with Mapping Function

// function that returns a new array
function createArray(arraylike, mapFunc) {
  return Array.from(arraylike, mapFunc);
}

// using arrow function for mapFunc
let result = createArray([2, 4, 6], (element) => element + 2);

console.log(result);

//[ 4, 6, 8 ]
