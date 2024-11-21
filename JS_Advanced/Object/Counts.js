const ab = [
  { af: [4, 3, 53, 2, 0, 23] },
  { af: [4, 3, -53, -2, 0, 23] },
  { af: [4, 3, 53, 2, 0, -23] },
];
//find the counts in 0s,even and odd numbers


function findCounts(ab){
    let result=[]
    let zeroCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;


    for(let j=0;j<ab.length;j++){
        // console.log(ele)
        
            const arr=ab[j].af
            // console.log("🚀 ~ file: Counts.js:20 ~ findCounts ~ arr:", arr)
            for(let i=0;i<arr.length;i++){
                if(arr[i]==0){
                    zeroCount++
                }else if(arr[i]>0){
                    positiveCount++
                }else{
                    negativeCount++
                }
                
            }
            result.push({
                index:j,
                zeroCount,
                positiveCount,
                negativeCount
            })
    }
    return result
}
console.log(findCounts(ab));