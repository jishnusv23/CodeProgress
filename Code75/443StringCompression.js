//! Ques: https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75

//---------------------------------------TEST CASE----------------------------------
let chars = ["a", "a", "b", "b", "c", "c", "c"]; //* output [a2b2c3]
let chars2 = ["a"]; //* output ["a"]
let chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]; // * output["a","b","1","2"].

// using Twopointer ,string 

const compress=(chars)=>{
    let i=0,k=0
    while(i<chars.length){
        let j=i
        while(j<chars.length&&chars[j]==chars[i]){
            j++

        }
        chars[k++]=chars[i]
        let count=j-i
        console.log("🚀 ~ compress ~ count:", count)
        if(count>1){
            let countStr=count.toString()
            for(let digit of countStr){
                chars[k++]=digit

            }

        }
    i=j
    }
    return chars.slice(0,k)

}
console.log(compress(chars3))