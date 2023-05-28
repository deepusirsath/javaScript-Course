//nested if else

// winning number 19
// 19 your guess is right
// 17 too low
// 20 too high

let winning_number = 19;
let abc = +prompt("guess a number");

if (abc === winning_number) {
  console.log("your guess is right");
} else {
  if (abc > winning_number) {
    console.log("too high");
  } else {
    console.log("too low");
  }
}
