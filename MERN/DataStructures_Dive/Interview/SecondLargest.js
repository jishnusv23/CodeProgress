const array = [10, 5, 20, 8, 25, 15];

const findSecondlargest=array.reduce((accu,curr)=>{
    if(curr>accu.largest){
    accu.secondlargest=accu.largest
    accu.largest=curr
    }else if(curr>accu.largest&&curr!==accu.largest){
        accu.secondlargest=curr
    }
    return accu

},{largest:-Infinity,secondlargest:-Infinity}).secondlargest
console.log("🚀 ~ file: SecondLargest.js:13 ~ findSecondlargest ~ findSecondlargest:", findSecondlargest)
