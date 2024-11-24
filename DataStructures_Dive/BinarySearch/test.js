const arr = [3, 4, 5, 6, 7, 8, 8, 23, 45, 67, 89];

function binarySearchRecursion(arr, target, left, right) {
  if (right < left) return -1;

  const midd = Math.floor((left + right) / 2);
  if (arr[midd] == target) return midd;
  if (arr[midd] < target)
    return binarySearchRecursion(arr, target, midd + 1, right);
  else return binarySearchRecursion(arr, target, left, midd - 1);
}
console.log(binarySearchRecursion(arr, 2, 0, arr.length - 1));
