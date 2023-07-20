// empty argument = no separator
var collection = [3, ".", 1, 4, 1, 5, 9, 2];
console.log(collection.join("")); // 3.141592

// Elements like undefined, null, or empty array have an empty string representation.
var random = [44, "abc", undefined, null, []];
console.log(random.join(" and ")); // 44 and abc and  and  and
