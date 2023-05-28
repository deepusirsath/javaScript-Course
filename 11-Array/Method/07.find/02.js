function isEven(element) {
  return element % 2 == 0;
}

let randomArray = [1, 45, 8, 98, 7];

let firstEven = randomArray.find(isEven);
console.log(firstEven); // 8

// using arrow operator
let firstOdd = randomArray.find((element) => element % 2 == 1);
console.log(firstOdd); // 1
