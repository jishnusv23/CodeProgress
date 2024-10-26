//weekMap
const weekMap = new WeakMap();

const person = { name: "jishnu", age: 21 };
weekMap.set(person, "jishnu");
console.log(weekMap.get(person));
console.log(weekMap.has(person));
console.log(weekMap.delete(person));
console.log(weekMap.has(person));

console.log(
  "------------------------------------------------------------------"
);

const weekset = new WeakSet();
let obj1 = { id: 2 };
let obj2 = { id: 3 };
weekset.add(obj1,'id1');
weekset.add(obj2,'id2');
weekset.delete(obj1)
console.log(weekset.has(obj1))
console.log(weekset.has(obj2))
