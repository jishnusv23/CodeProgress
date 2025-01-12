let nums = [2, 7, 11, 15],target = 9;
// let numbers=[2,3,4], target = 6;

// let nums = [-1, -2, -3, -4, -5];
// let target = -8;

 // the corret method is usin hasmap 
 function TwoSumII(arr,target){
  let map=new Map()
  for(let i=0;i<arr.length;i++){
    let complement=target-arr[i]
    if(map.has(complement)){
      return [map.get(complement),i]
    }
    map.set(arr[i],i)
  }
  return []
 }

// function TwoSumII(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start<=end) {
//     if(arr[start]+arr[end]==target){
//         return [start+1,end+1]
//     }
//     if(arr[start]+arr[end]>target){
//         end--
//     }else{
//         start++
//     }
//   }
//   return []
// }

console.log(TwoSumII(nums, target));
