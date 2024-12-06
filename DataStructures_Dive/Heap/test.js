function heapifiy(arr,n,i){
  let largest=i
  let left=2*i+1
  let right=2*i+2
  if(left<n&&arr[left]>arr[largest]){
    largest=left
  }
  if(right<n&&arr[right]>arr[largest]){
    largest=right
  }
  if(largest!==i){
    [arr[i],arr[largest]]=[arr[largest],arr[i]]
    heapifiy(arr,n,largest)
  }
  
}

function  heapSort(arr){
  let n=arr.length
  for(let i=Math.floor(n/2)-1;i>=0;i--){
    heapifiy(arr,n,i)
  }
  for(let i=n-1;i>0;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]]
    heapifiy(arr,i,0)
  }
}




let arr = [4, 10, 3, 5, 1];
heapSort(arr);
console.log("after array", arr);