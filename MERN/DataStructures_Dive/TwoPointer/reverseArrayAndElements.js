function reverseArrayAndElements(arr) {
  //first reverse the elemenets
  for (let i = 0; i < arr.length; i++) {
    let reversedElement = "";
    for (let j = arr[i].length - 1; j >= 0; j--) {
      reversedElement += arr[i][j];
    }
    arr[i] = reversedElement;
  }
  //then reverse the elelements positions
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
const arr = ["cat", "dog", "bird"];
console.log(reverseArrayAndElements(arr));
