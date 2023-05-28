const obj = {
    key1: "deepu",
    key2: "sirsath"
}
const obj2 = {
    key3: "abc",
    key4: "deepu",
    key1: "ppp"
}
const obj3 = { ...obj2, ...obj }
console.log(obj3);

const obj4 = { ...obj2, ...obj, key6: "sitaram" }
console.log(obj4);
