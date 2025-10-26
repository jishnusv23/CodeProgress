class Person {
  constructor(name) {
    this.name = name;
  }
}
const object1 = new Person("jishnu");
const object2 = new Person("jshnu");
console.log("🚀 ~ file: ObjectTest.js:8 ~ object2:", object2);
console.log("🚀 ~ file: ObjectTest.js:7 ~ object1:", object1);

//Singleton pattern

let object3 = (function () {
  this.name = "jishnu sv";
})();
console.log("🚀 ~ file: ObjectTest.js:14 ~ object3 ~ object3:", object3);

//Prototype chaining
let Persons = {
  name: "jishnu sv",
};

let json = JSON.stringify(Persons);
console.log("🚀 ~ file: ObjectTest.js:28 ~ json:", json);
let jsonParse = JSON.parse(json);
console.log("🚀 ~ file: ObjectTest.js:26 ~ jsonParse:", jsonParse);
// function Greeting(greeting){
//     console.log(`${greeting}+ ${this.name}`)
// }
// Greeting.apply(Persons,['jishnu'])

const map = new Map();
map.set(1, "number key"); // allowed in Map

const obj = {};
obj[1] = "number key"; // converts 1 to "1" as a string
map.set("a", 1);
map.set("b", 2);
for (let key in obj) {
  console.log(key);
}
// console.log(obj.size)

let a = null;
console.log(typeof a); // is Object

console.log(isNaN(12343)); // false
console.log(isNaN("hello")); // true
