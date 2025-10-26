let arr = [4, 5, 6, 7, 1, 2, 3];
// find the minimum value in sorted rotated array using buble sort / binary search
function findTheMinimumvalue(arr) {
  let swaap = true;
  while (swaap) {
    swaap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swaap = true;
      }
    }
  }
  return arr[0];
}
console.log(findTheMinimumvalue(arr));

// using binary search
function findTheMinimumvalueBinarySearch(arr) {
  let low = 0;
  let hig = arr.length;
  -1;
  while (low < hig) {
    let midd = Math.floor((low + hig) / 2);
    if (arr[midd] > arr[hig]) {
      low = midd + 1;
    } else {
      hig = midd;
    }
  }
  return arr[low]
}
console.log(findTheMinimumvalueBinarySearch(arr))
