const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];

function checkPrice(element) {
  return element > 2000 && !Number.isNaN(element);
}

let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); // [ 3000, 5000, 8000 ]

// using arrow function
let newPrices = prices.filter((price) => price > 2000 && !Number.isNaN(price));
console.log(newPrices); // [ 3000, 5000, 8000 ]
