let nums=[1,2,4] 
// output=3
// let nums=[-5,-10,-5]
//* output=5
// let nums=[-2,1,-5]
//* output=6

const MaxDiffNumber=(nums)=>{
    let maxNum=0
    let n=nums.length
    for(let i =1;i<n;i++){
        let diff=Math.abs(nums[i]-nums[i-1])
        if(diff>maxNum){
            maxNum=diff
        }
    }
    let circularDiff=Math.abs(nums[0]-nums[n-1])
    if(circularDiff>maxNum){
        maxNum=circularDiff
    }
    return maxNum
}
console.log(MaxDiffNumber(nums))