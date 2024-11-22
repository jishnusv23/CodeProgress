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
// console.log(findCounts(ab));

const input1 = [
  { category: "A", values: [9, 10, 12, 7, 15] },
  { category: "B", values: [10, 8, 6, 4, 3] },
  { category: "C", values: [11, 10, 10, 10, 9] },
];
//greatter than 10
// output = [
//   { category: "A", greaterThanTen: 2, lessThanTen: 2, equalToTen: 1 },
//   { category: "B", greaterThanTen: 0, lessThanTen: 4, equalToTen: 1 },
//   { category: "C", greaterThanTen: 1, lessThanTen: 1, equalToTen: 3 },
// ];

function CountingNext(arr){
    let result=[]
    for(let i=0;i<arr.length;i++ ){
        let greaterThanTen=0
        let lessThanTen=0
        let equalToTen=0
        const nest=arr[i].values
        console.log("🚀 ~ file: Counts.js:58 ~ CountingNext ~ nest:", nest)
        for(let j=0;j<nest.length;j++ ){
            if(nest[j]==10){
                equalToTen++
            }else  if(nest[j]<10){
                lessThanTen++
            }else if (nest[j]>10){
                greaterThanTen++
            }
        }
        result.push({
            category:arr[i].category,greaterThanTen,lessThanTen,equalToTen
        })
        
    }
    return result
}
// console.log(CountingNext(input1));

const input = [
  { group: "A", items: [1, 2, 2, 3] },
  { group: "B", items: [3, 4, 5, 2] },
  { group: "C", items: [5, 6, 1, 2] },
];

output = {
  1: 2,
  2: 5,
  3: 2,
  4: 1,
  5: 2,
  6: 1,
};
const result={}
for(let ele of input){
    const items=ele.items
    items.forEach((ele,index)=>{
        if(result[ele]){
            result[ele]=(result[ele]||0)+1
        }else{
            result[ele]=1
        }
    })
}
console.log("🚀 ~ file: Counts.js:98 ~ result ~ result:", result)