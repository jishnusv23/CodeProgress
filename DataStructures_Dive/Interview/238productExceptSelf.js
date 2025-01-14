let productExceptSelf=(nums)=>{
    let n=nums.length
    let leftPro=new Array(n).fill(1)
    let rightPro=new Array(n).fill(1)
    let answer=new Array(n).fill(0)
    
    for(let i=1;i<n;i++){
        leftPro[i]=leftPro[i-1]*nums[i-1]
    }
    for(let i=n-2;i>=0;i--){
        rightPro[i]=rightPro[i+1]*nums[i+1]
    }
    for(let i=0;i<n;i++){
        answer[i]=leftPro[i]*rightPro[i]
    }
    return answer
}
let nums = [1, 2, 3, 4];
// Output: [24, 12, 8, 6];
console.log(productExceptSelf(nums))