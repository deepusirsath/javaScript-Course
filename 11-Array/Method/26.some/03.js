// some() Method to Check Result of Students

// array of scores obtained by student
let scoreObtained = [45, 50, 39, 78, 65, 20];

// a test function: returns score less than 40
function studentIsPassed(score) {
  return score < 40;
}

// checks if score of at least one student is less than 40
if (scoreObtained.some(studentIsPassed) == true) {
  console.log("At least one of the students failed.");
} else console.log("All students are passed.");

// At least one of the students failed.
