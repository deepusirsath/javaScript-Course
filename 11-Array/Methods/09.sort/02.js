const priceList = [1000, 50, 2, 7, 14];

// sort() using function expression
priceList.sort(function (a, b) {
  return a - b;
});

console.log("Ascending - " + priceList); //  2,7,14,50,1000

// sort() using arrow function expression
priceList.sort((a, b) => b - a);
console.log("Descending - " + priceList); // 1000,50,14,7,2

const names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// sort according to string length
names.sort((a, b) => a.length - b.length);

console.log(names);

// [ 'Ben', 'Adam', 'Danil', 'Jeffrey', 'Fabiano' ]
