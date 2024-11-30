let arr = [1, 2, 3, 5, 6, 3, 2, 3, 3, 3, 4, 56, 2, 1, 3, 11];

const obj = {};
for (let ele of arr) {
  if (obj[ele]) {
    obj[ele] += 1;
  } else {
    obj[ele] = 1;
  }
}
console.log(obj);

const map = new Map();
for (let ele of arr) {
  if (map.has(ele)) {
    map.set(ele, map.get(ele) + 1);
  }else{
    map.set(ele,1)
  }
}

console.log(map)

// let res = [...map.entries()].sort((a, b) => b[1] - a[1]);

// console.log(res[0][0], res[1][0]);