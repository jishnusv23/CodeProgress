const input = [
  { id: 1, numbers: [1, 2, 3, 4] },
  { id: 2, numbers: [3, 4, 5, 6] },
  { id: 3, numbers: [6, 7, 8, 9] },
];

// output = [
//   { number: 1, count: 1, in: [1] },
//   { number: 2, count: 1, in: [1] },
//   { number: 3, count: 2, in: [1, 2] },
//   { number: 4, count: 2, in: [1, 2] },
//   { number: 5, count: 1, in: [2] },
//   { number: 6, count: 2, in: [2, 3] },
//   { number: 7, count: 1, in: [3] },
//   { number: 8, count: 1, in: [3] },
//   { number: 9, count: 1, in: [3] },
// ];

let numberMap = new Map();
input.forEach(({ id, numbers }) => {
  console.log(id, numbers);
  numbers.forEach((numbers, index) => {
    if (!numberMap.has(numbers)) {
      numberMap.set(numbers, { numbers, count: 0, in: [] });
    }
    const entery = numberMap.get(numbers);
    entery.count = +1;
    entery.in.push(id);
  });
});

// console.log("🚀 ~ file: Occurrences.js:20 ~ numberMap:", numberMap);
const output = Array.from(numberMap.values());
console.log("🚀 ~ file: Occurrences.js:34 ~ output:", output)
