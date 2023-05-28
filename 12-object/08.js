//computed properties-

const key1 = "value1";
const key2 = "value2";

const var1 = "myvalue1";
const var2 = "myvalue2";

// const obj = {
//     key1: "myvalue1",
//     key2: "myvalue2"
// }

const obj = {
    [key1]: "myvalue1",
    [key2]: "myvalue2"
}

console.log(obj);

const obj2 = {}
obj2[key1] = "myvalue1";
obj2[key2] = "myvalue2";

console.log(obj2);
