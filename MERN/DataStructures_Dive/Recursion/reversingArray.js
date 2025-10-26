function reverseArray(arr, start, end) {
  if (start == end){
    return arr
  }
   [arr[start], arr[end]] = [arr[end], arr[start]]

  return reverseArray(arr, start + 1, end - 1);
}
const arr = [1, 2, 3, 4, 5, 7, 7];
console.log(reverseArray(arr,0,arr.length-1))