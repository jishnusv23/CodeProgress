const players = [
  { name: "Alice", score: 50, age: 25, team: "Red" },
  { name: "Bob", score: 70, age: 22, team: "Blue" },
  { name: "Charlie", score: 40, age: 30, team: "Red" },
  { name: "David", score: 60, age: 24, team: "Blue" },
  { name: "Eve", score: 90, age: 28, team: "Red" },
];

players.sort((a, b) => a.score - b.score);
// console.log(players);

let obj = { a: 4, b: 1, c: 3, d: 2 };

let entries = Object.entries(obj);
entries.sort((a, b) => a[1] - b[1]);
// console.log("🚀 ~ file: sort.js:15 ~ entries:", entries)
let sortObj=Object.fromEntries(entries)
console.log("🚀 ~ file: sort.js:18 ~ sortObj:", sortObj)

