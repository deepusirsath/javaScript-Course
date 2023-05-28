// another example

function getTwoNumber(num1, num2, addTwoNumber) {
  console.log(num1, num2);
  addTwoNumber(num1, num2);
}

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

getTwoNumber(4, 5, addTwoNumber);
