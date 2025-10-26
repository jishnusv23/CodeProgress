function findDisappearedNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    const numIndex = Math.abs(arr[i]) - 1;
    if (arr[numIndex] > 0) {
        arr[numIndex]=-arr[numIndex]
    }
  }
  let result=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        result.push(i+1)
    }
  }
  return result
}
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
