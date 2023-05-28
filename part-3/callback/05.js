// another example

function getTwoNumber(num1, num2, onSuccess, onError) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    onSuccess(num1, num2);
  } else {
    onError();
  }
}

getTwoNumber(
  "4",
  "5",
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("wrong data type");
  }
);

getTwoNumber(
  4,
  5,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("wrong data type");
  }
);
