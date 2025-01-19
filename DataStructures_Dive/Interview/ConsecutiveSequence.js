//Longest Consecutive Sequence 

function ConsecutiveSequence(arr){
    arr.sort((a,b)=>a-b)
    arr=[...new Set(arr)]
    if(arr.length==0) return 0
    let max=0,sequence=1
    for(let i=1;i<arr.length;i++){
        if (arr[i] == arr[i - 1] + 1) {
          sequence++;
        } else {
          max = Math.max(max, sequence);
          sequence = 1;
        }

    }
    max=Math.max(max,sequence)
    return max
}
let nums=[9,1,4,7,3,-1,0,5,8,-1,6]

// Expected output:7
console.log(ConsecutiveSequence(nums))