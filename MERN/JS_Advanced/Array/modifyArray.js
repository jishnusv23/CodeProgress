function modifyArray(arr) {
  let arrreverse = arr.reverse();

  
  let midd = Math.floor(arrreverse.length / 2);
  let firsthalf = arrreverse.slice(0, midd);
  let secondhalf = arrreverse.slice(midd);
  firsthalf = firsthalf.map((x) => x * 5);
  secondhalf = secondhalf.map((x) => x * 2);
  return firsthalf.concat(secondhalf);
}

let arr = [1, 2, 3, 4, 5, 6];
let modifiedArr = modifyArray(arr);
// console.log("🚀 ~ file: modifyArray.js:8 ~ modifiedArr:", modifiedArr);

//Without in built method

function modifyArray2(arr) {
  let n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }
  let mid = Math.floor(n / 2);
  for (let j = 0; j < mid; j++) {
    arr[j] *= 5;
  }
  for (let k = mid; k < n; k++) {
    arr[k] *= 2;
  }
  return arr
}

let arr2 = [1, 2, 3, 4, 5, 6];
let modifiedArr2 = modifyArray2(arr2);
console.log("🚀 ~ file: modifyArray.js:40 ~ modifiedArr2:", modifiedArr2)
