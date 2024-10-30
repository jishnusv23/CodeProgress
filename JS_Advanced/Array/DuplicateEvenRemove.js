let arr = [3, 4, 5, 6, 3, 5, 3, 4, 3];
let set = {};
for (let i = 0; i < arr.length; i++) {
  if (set[arr[i]]) {
    if (arr[i] % 2 == 0) {
      arr.slice(i, 1);
      i--;
    }
  } else {
    set[arr[i]] = true;
  }
}
console.log(arr);
