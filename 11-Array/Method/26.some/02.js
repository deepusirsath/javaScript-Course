// a test function: returns age that is less that 18
function checkMinor(age) {
  return age < 18;
}

const ageArray = [34, 23, 20, 26, 12];

// checks whether ageArray contains any element that is less than 18
let check = ageArray.some(checkMinor);

console.log(check);

//true
