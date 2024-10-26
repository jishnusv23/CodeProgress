//Remove Duplicate from the array using hash table

let arr = [1, 2, 3, 4, 2, 3, 5, 1, 6];
let hasT = {};
let res = [];
for (let i = 0; i < arr.length; i++) {
  if (!hasT[arr[i]]) {
    hasT[arr[i]] = true;
    res.push(arr[i]);
  }
}
console.log(res);

let map = new Set();
let arrN = [];
for (let num of arr) {
  if (!map.has(num)) {
    map.add(num);
    arrN.push(num);
  }
}

console.log(arrN);

function dupHash(arr) {
    let hash={}
    for(let i=0;i<arr.length;i++){
        hash[arr[i]]=true

    }
    return Object.keys(hash)
}

console.log(dupHash(arr))