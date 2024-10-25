function mergeSort(arr){
  if(arr.length<2) return arr

  let midd=Math.floor(arr.length/2)
  let left=arr.slice(0,midd)
  let right=arr.slice(midd)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let sortedArray=[]

  while(left.length&&right.length){
    if(left[0]<right[0]){
      sortedArray.push(left.shift())
    }else{
      sortedArray.push(right.shift())
    }
  }
  return [...sortedArray,...left,...right]
}

let arr = [4, 2, 5, 1, 8, 3, 9];
console.log(mergeSort(arr))