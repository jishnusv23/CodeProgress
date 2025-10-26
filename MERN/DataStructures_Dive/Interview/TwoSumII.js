let nums = [2, 7, 11, 15],
  target = 9;
// let numbers=[2,3,4], target = 6;

// let nums = [-1, -2, -3, -4, -5];
// let target = -8;

// the corret method is usin hasmap
function TwoSumII(arr, target) {
  let map = new Map();
  for(let i=0;i<arr.length;i++){
    const comple=target-arr[i]
    if(map.has(comple)){
      return [map.get(comple),i]

    }
    map.set(arr[i],i)
  }
  return arr
}

console.log(TwoSumII(nums, target));
