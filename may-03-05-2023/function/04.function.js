function targetChar(arrays, target) {
  for (let index = 0; index < arrays.length; index++) {
    if (arrays[index] === target) {
      return index;
    }
  }
  return -1;
}
const myarrays = [1, 3, 45, 2, 11, 2, 45, 33, 54];
console.log(targetChar(myarrays, 33));
