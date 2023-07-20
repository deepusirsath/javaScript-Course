//unshift - it is used to add any element in array in the first position

// do the changes in original array and return new length

let a = ["deepali", "mohit", "abhay"];
console.log(a); //["deepali", "mohit", "abhay"]
const b = a.unshift("deepu");
console.log(a); // ["deepu","deepali", "mohit", "abhay"]
console.log(b) // 4
