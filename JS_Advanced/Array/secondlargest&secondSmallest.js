var arr = [7, 9, 1, 2, 33, 4, 5, 6];

let max1=-Infinity
let max2=-Infinity

for(let i=0;i<arr.length;i++){
  if(arr[i]>max2){
    max1=max2
     max2=arr[i]
  }else if(arr[i]<max2&&arr[i]>max1){
    max1=arr[i]
  }
}
console.log(max2)
console.log(max1)

let min1=Infinity
let min2=Infinity

for(let i=0;i<arr.length;i++){
  if(arr[i]<min2){
    min1=min2
    min2=arr[i]
  }else  if(arr[i]>min2&&arr[i]<min1){
    min1=arr[i]
  }
}
console.log(min1)