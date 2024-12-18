let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function MissingNumber(arr) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  // the difference between the value and index should be constant

  while (left <= right) {
    let midd = Math.floor((left + right) / 2);
    if (arr[midd] !== midd) {
      if (midd == 0 || arr[midd - 1] == midd - 1) {
        return midd;
      }
      right = midd - 1;
    } else {
      left = midd + 1;
    }
  }
  return arr.length;
}
console.log(MissingNumber(nums));
