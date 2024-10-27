//*sum of the array inside of object

let obj2 = { a: [2, 4, 6], b: 4, c: 6, d: [5, 3] };

function sumOfObje(obj2) {
  let sum = 0;
  for (let key in obj2) {
    if (Array.isArray(obj2[key])) {
      sum += obj2[key].reduce((acc, curr) => acc + curr, 0);
    }
  }
  return sum;
}
// console.log(sumOfObje(obj2))

//*double the values in object
let obj3 = { p: 5, q: 10, r: [15, 20] };

function DoubleValues(obj3) {
  for (let key in obj3) {
    if (Array.isArray(obj3[key])) {
      obj3[key] = obj3[key].map((value) => value * 2);
    } else {
      obj3[key] = obj3[key] * 2;
    }
  }
  return obj3;
}
// console.log(DoubleValues(obj3))

//*swaping

let obj4 = { name: "Alice", age: 25, hobbies: ["reading", "hiking"] };
let swapped = {};
for (let key in obj4) {
  // console.log(obj4[key])
  swapped[obj4[key]] = key;
}
console.log(swapped);

//*revese
let obj5 = { first: [1, 2], second: [3, 4], third: [5, 6] };
let reverseObj = {};
for(let key in obj5){
    if(Array.isArray(obj5[key])){
        reverseObj[key]=obj5[key].slice().reverse()
    }
// }else{
//     reverseObj[key]=obj5[key]
// }
}
console.log(reverseObj)