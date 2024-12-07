let arr = [1, 3, 2, 5, 7, 8, 9, 11];

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
//     arr.splice(i + 1, 1);
//     i--
//   }
// }
// console.log(arr);

function RemoveAdjustOdd(arr){
    let result=[]

    for(let i=0;i<arr.length;i++){
          if(result.length==0||!(result[result.length-1]%2!==0&&arr[i]%2!==0)){
            // console.log(arr[i])
            result.push(arr[i]) 
        }else{
            console.log(result)
            result.pop()
            console.log(result)
        }
    }
    return result
}
console.log(RemoveAdjustOdd(arr))