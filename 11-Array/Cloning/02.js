//how to clone an array - means array ki hubhu copy create krna

//method-4 -- using spread operator

let a = [1, 23, 4];
let b = [...a];

console.log(a === b); //false

console.log(a); //  [1, 23, 4]

console.log(b); //  [1, 23, 4]

a.push(9);
console.log(a); //   [1, 23, 4,9]
console.log(b); //   [1, 23, 4]

b = [...a, ["deepu"], 1];
console.log(b); // [ 1, 23, 4, 9, [ 'deepu' ], 1 ]

let ar3 = [...a, ...b];
console.log(ar3); // [ 1, 23, 4, 9, 1, 23, 4, 9, [ 'deepu' ], 1 ]
