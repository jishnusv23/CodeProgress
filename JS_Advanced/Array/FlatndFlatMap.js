const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//another way
const resutl = arr1.reduce((acc, curr) => acc.concat(curr), []);
// console.log("🚀 ~ file: FlatndFlatMap.js:9 ~ resutl:", resutl)

//flat
const arr2 = ["mon", "tues", ["wed", "thurs", ["fri", "sat"]], "sun"];
// console.log(arr2.flat());
// expected output
// ["mon", "tues", "wed", "thurs", Array ["fri", "sat"], "sun"];

const arr3 = [1, 2, [3, 4, 5], 6, 7];
// console.log(arr3.flat());
// expected output
// [1, 2, 3, 4, 5, 6, 7]

//flatMap()
const arr4 = [1, 2, [4, 5], 6, 7, [8]];
// console.log(arr4.flatMap((ele) => ele));//[1, 2, 4, 5, 6, 7, 8];

const arr5 = [1, 2, [3, [4, 5, [6, 7]]]] ;
// console.log(arr5.flatMap((ele)=>ele).flat(2))

//Without using flat Method 
const arr6 = [1, 2, [3, [4, 5, [6, 7]]]] ;

function Flattern(arr){
    let flatArray=[]
    for(let i=0;i<arr.length;i++){
        const current=arr[i]
        if(Array.isArray(current)){
            const nested=Flattern(current)
            for(let j=0;j<nested.length;j++){
                // console.log(nested[j])
                flatArray.push(nested[j])
            }
        }else{
            flatArray.push(arr[i])
        }
    }
    return flatArray
}
console.log(Flattern(arr6))