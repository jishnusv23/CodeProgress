function missingNumber(arr) {
  let xor = 0;
  for (let i = 0; i <=arr.length; i++) {
    xor ^= i;
  }
  for(let num of arr){
    xor^=num
  }
  return xor
}
let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
