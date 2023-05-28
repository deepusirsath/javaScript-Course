//object destructuring

const name2 = {
    name: "deepu",
    age: "23"
}

//1 st method-normal way

const myName = name2.name;
const myAge = name2.age;
console.log(myName);
console.log(myAge);

//2 nd method- main method

const { name, age } = name2;
console.log(name);
console.log(age);

//suppose hame variabale ka name age nhi rkhna h to--

const { name3, age: myage } = name2;
console.log(name);
console.log(myage);