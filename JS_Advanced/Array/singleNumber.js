
function singleNumber(arr){
    let num=0
    for(let i=0;i<arr.length;i++){
        num^=arr[i]

    }
    return num
}
let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums))