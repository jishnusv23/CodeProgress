//* Partition Array Such That Maximum Difference Is K
let nums = [3,6,1,2,5], k = 2
// Output: 2

const PartitionArray=(nums,k)=>{
    nums.sort((a,b)=>a-b)
    let subsequenceCount=0
    let i=0,n=nums.length
    while(i<n){
        subsequenceCount++
        let currentMin=nums[i]
        while(i<n&&nums[i]-currentMin<=k){
            i++
        }
    }
    return subsequenceCount

}
console.log(PartitionArray(nums,k))