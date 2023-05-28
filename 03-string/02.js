// trim()
// toUpperCase()
// toLowerCase()
// slice()

let fname = "deepaliHKJHKJH ";
console.log(fname.length);
updatedName = fname.trim().length;
console.log(updatedName);
console.log(fname.trim().toUpperCase());
console.log(fname.trim().toLowerCase());

//The slice() method extract a part of a string and returns the extracted parts in a new string

console.log(fname.trim().slice(0)); //deepaliHKJHKJH

console.log(fname.trim().slice(1)); //eepaliHKJHKJH

console.log(fname.trim().slice(1, 5)); //eepa

let lname = "sirsath";
console.log(lname.trim().slice(0, 5)); //sirsa

let myname = "helo";
console.log(myname.slice(0, 2).concat(myname.slice(-2).toUpperCase()));
