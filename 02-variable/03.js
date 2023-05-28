//we can reassign  the value of varibale  in case of let and var but not in const.

var abc = 123;
console.log(abc); //123
abc = "456";
console.log(abc); //456

let abcd = 123;
console.log(abcd); //123
abcd = "4536";
console.log(abcd); //4536

//TypeError: Assignment to constant variable.
const abd = 123;
console.log(abd); //123
abd = "4536";
console.log(abd); //4536
