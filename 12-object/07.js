//object.keys -- it returns the array of key that is define in array.

const person = {
    name: "deepu",
    age: 24,
    email: "deepu@gmail.com"
}

console.log(Object.keys(person));//['name','age','email']

const val = Object.keys(person)
console.log(Array.isArray(val));

for (let key of val) {
    console.log(key);
    console.log(person[key]);
}