const perosn = {
    name: "mohit",
    age: "24",
    year: 1998,
    hobbies: "tracking"
}

const { name, age, ...rest } = perosn;
console.log(name);
console.log(age);

console.log(rest);