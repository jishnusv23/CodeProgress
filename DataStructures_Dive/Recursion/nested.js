var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

let sum = 0;
function NestedEvenSum(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "object" && obj[key] !== null) {
      NestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 == 0) {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(NestedEvenSum(obj2));


console.log(flatten([[[[1], [[[2]]], [[[[[[[3], [[[[[[5]]]]]]]]]]]]]]]));

function flatten(arr) {
  let f = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let res = flatten(arr[i]);
      f.push(...res);
    } else {
      f.push(arr[i]);
    }
  }
  return f;
}
