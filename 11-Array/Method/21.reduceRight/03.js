//Passing initialValue in reduceRight() Method

let expense = [50, 300, 20, 100, 1800];

// function that returns sum of two values
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}

// adds 0 with last value of expense (i.e 1800)
// and executes the callback add()
let result = expense.reduceRight(add, 0);

console.log(result);

//2270
