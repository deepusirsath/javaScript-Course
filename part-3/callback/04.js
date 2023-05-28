// another example

function getTwoNumber(num1, num2, addTwoNumber) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    addTwoNumber(num1, num2);
  } else {
    console.log("wrong data type");
  }
}

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

getTwoNumber("4", "5", addTwoNumber);
getTwoNumber(4, 5, addTwoNumber);
