// JavaScript slice() with Objects as Array Elements

let human = {
  name: "David",
  age: 23,
};

let arr = [human, "Nepal", "Manager"];
let new_arr = arr.slice();

// original object
console.log(arr[0]); // { name: 'David', age: 23 }

// making changes to the object in new array
new_arr[0].name = "Levy";

// changes are reflected
console.log(arr[0]); // { name: 'Levy', age: 23 }
