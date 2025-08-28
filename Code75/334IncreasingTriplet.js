//! Q - https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

let nums = [1, 2, 3, 4, 5];
//* output :true
//----------------------------------------------------------------------------------------
// let nums = [2, 1, 5, 0, 4, 6];
//* output :true
//--------------------------------------------------------------------------------------------



const increasingTriplet = (nums) => {
    let first=Infinity
    let second=Infinity
    for(const num of nums){
        if(num<=first){
            first=num
        }else if(num<=second){
            second=num
        }else{
            return true
        }
    }
    return false
};
console.log(increasingTriplet(nums))
