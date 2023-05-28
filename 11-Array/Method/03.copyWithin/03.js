//copyWithin() with Three Parameters

let laptops = ["dell", "hp", "acer", "asus"];

// copying elements from index 2 to 4(excluding 4) to index 0
laptops.copyWithin(0, 2, 4);

// modifies the original array
console.log(laptops); // [ 'acer', 'asus', 'acer', 'asus' ]
