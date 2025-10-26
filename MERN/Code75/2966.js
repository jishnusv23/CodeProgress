//* Divide array into Arrays With max Difference

//! Algorithm works
// sort the array first
// group the array element
// find the max min >k if return []
const nums1 = [1, 3, 4, 8, 7, 9, 3, 5, 1];
const nums2 = [2, 4, 2, 2, 5, 2];
const k1 = 2;
const divideArray=(nums,k)=>{
    nums.sort((a,b)=>a-b)
    const result=[]
    const n=nums.length

    for(let i=0;i<n;i+=3){
        const group=[nums[i],nums[i+1],nums[i+2]]
        if(group[2]-group[0]>k) return []

        result.push(group)
    }
    return result
}
console.log(divideArray(nums1,k1))// [ [ 1, 1, 3 ], [ 3, 4, 5 ], [ 7, 8, 9 ] ]
console.log(divideArray(nums2,k1)) //[]