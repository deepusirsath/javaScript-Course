//if else if else if else

let temprature = +prompt("enter the tempature");
if (temprature < 0) {
  console.log("extremely cold outside");
} else if (temprature < 16) {
  console.log("its cold outside");
} else if (temprature < 25) {
  console.log("wheather is okay");
} else {
  console.log("too hot");
}
