// const in Array
const a = [];
//a = [1, 2, 3, 4];- throw the error
a.push(1);
console.log(a);

// const in Object
const MY_OBJECT = { key: "value" };
//MY_OBJECT = { OTHER_KEY: "value" };- throw the error

MY_OBJECT.key = "otherValue";

console.log(MY_OBJECT);
