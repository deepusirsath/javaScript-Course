// toLocaleString() Method with Parameters

// defining an array
let prices = [689, 100, 4577, 56];

// passing locales and options:
// using United States Dollar currency string format
let resultingString = prices.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(resultingString);

// $689.00,$100.00,$4,577.00,$56.00
