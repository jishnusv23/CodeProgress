let word1 = "abc",word2 = "pqr"
// Output: "apbqcr";


var MergeString=(word1,word2)=>{
    let arr=[]
    let length =word1.length+word2.length
    for(let i=0;i<length;i++){

        if(word1[i]!==null) arr.push(word1[i])
        if(word2[i]!==null) arr.push(word2[i])
    }
return arr.join(" ")
}
console.log(MergeString(word1,word2))