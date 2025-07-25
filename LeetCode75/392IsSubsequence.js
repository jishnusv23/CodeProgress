//! Q : https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

let s = "abc",t = "ahbgdc" //* output :true 
let s1 = "axc",t1 = "ahbgdc"; //* output :false 

const isSubsequence=(s,t)=>{
 let i =0, j=0
 while(j<t.length){
    if(i<s.length&&s[i]==t[j])
        i+=1
        j+=1
    }
    return i==s.length
}

console.log(s,t)