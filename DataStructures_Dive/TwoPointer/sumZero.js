let arr = [-4, -3, -2, -1, 0, 1, 2, 5];

function SumZero(arr) {
  let l = 0;
  let r = arr.length - 1;
  let sum=0
  while (l < r) {
     sum = arr[l] + arr[r];
    if (sum == 0) return [arr[l],arr[r]]
    if(sum<0)l++
    if(sum>0)r--
  }
 
}
console.log(SumZero(arr))
