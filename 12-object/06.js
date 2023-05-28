// how to iterate an object using for in loop

const person = {
    name: "deepali",
    age: "23",
    email: "deepu@gmail.com"
}

for (let key in person) {
    console.log(`${key}:${person[key]}`);
}

// name:deepali
// age:23
// email:deepu@gmail.com