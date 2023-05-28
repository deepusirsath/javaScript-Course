//Sorting Numbers Numerically

// numeric sorting

// define array
var priceList = [1000, 50, 2, 7, 14];

// sort() using function expression
// ascending order
priceList.sort(function (a, b) {
  return a - b;
});

// Output: Ascending - 2,7,14,50,1000
console.log("Ascending - " + priceList);

// sort() using arrow function expression
// descending order
priceList.sort((a, b) => b - a);

// Output: Descending - 1000,50,14,7,2
console.log("Descending - " + priceList);

// Ascending - 2,7,14,50,1000
// Descending - 1000,50,14,7,2
