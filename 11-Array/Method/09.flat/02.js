// nested array
let array1 = [1, [2, 3, 4], 5];

// without passing any depth argument in flat()
let flattenArray = array1.flat();

console.log(flattenArray);

// [ 1, 2, 3, 4, 5 ]
