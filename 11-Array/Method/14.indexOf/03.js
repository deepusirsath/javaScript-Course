//Finding All the Occurrences of an Element

function findAllIndex(array, element) {
  indices = [];
  var currentIndex = array.indexOf(element);
  while (currentIndex != -1) {
    indices.push(currentIndex);
    currentIndex = array.indexOf(element, currentIndex + 1);
  }
  return indices;
}

var priceList = [10, 8, 2, 31, 10, 1, 65, 10];

var occurance1 = findAllIndex(priceList, 10);
console.log(occurance1); // [ 0, 4, 7 ]

var occurance2 = findAllIndex(priceList, 8);
console.log(occurance2); // [ 1 ]

var occurance3 = findAllIndex(priceList, 9);
console.log(occurance3); // []
