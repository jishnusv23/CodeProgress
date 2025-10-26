let arr = [1, 3, 5, 2, 3, 5, 7, 4, 1, 3, 5, 7, 9];
let i = 0;

while (i < arr.length) {
  let start = i;
  while (arr[i] % 2 !== 0 && i < arr.length) {
    i++;
  }
  let end = i - 1;
  if (end - start >= 2) {
    arr.splice(start + 1, end - start - 1);
    i = start + 1;
  }else{
    i++
  }
}
console.log(arr)
