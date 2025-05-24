//find ODD number Sum using HOC
const randomNumbers = [45, 12, 78, 34, 90, 23, 67, 11, 59, 84];

function FindODDSum(randomNumbers){
    const result=randomNumbers.filter((ele)=>ele%2!==0)
    console.log("🚀 ~ file: FindOddHSum(Hoc).js:6 ~ FindODDSum ~ result:", result)

    const result1=result.reduce((acc,curr)=>acc+curr,0)
    return result1
    
}
console.log(FindODDSum(randomNumbers))