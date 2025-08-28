//! Q: https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75

let nums = [1,2,3,4], k = 5 //* output = 2

const maxOperations=(nums,k)=>{
    let operation=0
    let left=0,right=nums.length-1
    while(left<right){
        let currentsum=nums[left]+nums[right]
        if(k===currentsum){
            operation++
            left++
            right--

        }else if(k<currentsum){
            right--
        }else if(k>currentsum){
            left++
        }


    }
    return operation
}
console.log(maxOperations(nums,k))