const arr = [3, 4, 5, 6, 7, 8, 8, 23, 45, 67, 89];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midd = Math.floor((left + right) / 2);

    if(arr[midd]===target){
        return midd
    }
    if(arr[midd]<target){
        left=midd+1
    }else{
        right=midd-1
    }
  }
};

console.log(binarySearch(arr,5))


// BinarySearch using Recursion
const binarySearchRecursion =(arr,target,left,right)=>{
    if(left>right) return -1

    let middle=Math.floor((left+right)/2)
    if(arr [middle]===target) return middle
    if(arr[middle]<target) return binarySearchRecursion(arr,target,middle+1,right)
    else return binarySearchRecursion(arr,target,left,middle-1)
}
console.log(binarySearchRecursion(arr,5,0,arr.length-1))