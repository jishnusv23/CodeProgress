//! Q : https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

// --------------------------------------------TEST CASE--------------------------------------
let nums = [0, 1, 0, 3, 12]; //* output :[1,3,12,0,0]
let nums1 = [0]; //* output:[0]



const moveZeroes=(nums)=>{
    let i=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=0){
            [nums[i],nums[j]]=[nums[j],nums[i]]
            i++
        }
    }
    return nums
}

console.log(moveZeroes(nums))