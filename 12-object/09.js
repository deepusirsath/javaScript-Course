//spread operator in object
const myarray = [..."abc"]// string is iterable
console.log(myarray);

// const myarray2 = [...123456]
// console.log(myarray2);


//kisi object me agar same key dubara aati h to wo last wali value se replace ho jati h
const obj = {
    key1: "deepu",
    key2: "pipu",
    key1: "deepali"
}

console.log(obj);