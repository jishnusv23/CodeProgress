//! https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

//? Q Product of Array Except Self

// FIRST TEST CASE
let nums = [1, 2, 3, 4]; // output [24,12,8,6]


const productExceptSelf=(nums)=>{
    const result=new Array(nums.length).fill(1)
    let prefix=1
    for(let i=0;i<nums.length;i++){
        result[i]=prefix
        prefix*=nums[i]
    }
    let suffix=1;
    for(let i=nums.length-1;i>=0;i--){
        result[i]*=suffix
        suffix*=nums[i]
    }
    return result
}
console.log(productExceptSelf(nums))