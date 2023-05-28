//Array-ordered collection of element-
let fruit = [1, 2, "helo", 76.8, {}, "deepu"]


//we can store any datatype in array-
console.log(fruit);//  [1, 2, "helo", 76.8, {}, "deepu"]
console.log(fruit[1]);//2
console.log(fruit.length);//6
console.log(fruit[fruit.length - 1]);//deepu

//we want to replace deepu by deepali

fruit[5] = "deepali"
console.log(fruit);//[ 1, 2, 'helo', 76.8, {}, 'deepali' ]

//array is mutable that can change value in existing array

console.log(typeof fruit);
console.log(Array.isArray(fruit));


