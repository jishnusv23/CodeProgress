//? 3330- FIND THE ORIGINAL TYPED STRING I

//* https://leetcode.com/problems/find-the-original-typed-string-i/description/?envType=daily-question&envId=2025-07-01

//--------------------------------TEST-CASE-------------------------------------------------------------------------------------------------
let word = "abbcccc";
//*output=5

//------------------------------------------------------------------------------------------------------------------------------------------
// let word = "abcd";
//* output=1


const possibleStringCount=(word)=>{
    let count=1
    for(let i=1;i<word.length;i++){
        if(word[i]===word[i-1])count++
    }
    return count
    
}
console.log(possibleStringCount(word))