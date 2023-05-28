// Finding If Element exists else Adding the Element

function checkOrAdd(array, element) {
  if (array.indexOf(element) === -1) {
    array.push(element);
    console.log("Element not Found! Updated the array.");
  } else {
    console.log(element + " is already in the array.");
  }
}

var parts = ["Monitor", "Keyboard", "Mouse", "Speaker"];

checkOrAdd(parts, "CPU"); // Element not Found! Updated the array.
console.log(parts); // [ 'Monitor', 'Keyboard', 'Mouse', 'Speaker', 'CPU' ]

checkOrAdd(parts, "Mouse"); // Mouse is already in the array.
