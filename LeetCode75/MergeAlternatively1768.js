
//? Q . Merge String Alternatively 1768 

let  word1 = "abc",word2 = "pqr"
// Output: "apbqcr";


const mergeAlternativeString=(word1,word2)=>{
    let result=""
    let i=0
    let j=0
    while(i<word1.length&&j<word2.length){
        result+=word1[i]
        result+=word2[j]
        i++
        j++

    }
    while(i<word1.length){
        result+=word1[i]
        i++
    }
    while(j<word2.length){
        result+=word2[j]
        j++
    }

    return result
}
console.log(mergeAlternativeString(word1,word2))