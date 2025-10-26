let s = "Able was I ere I saw Elba?";
let s1 = "Able was I ere I saw?";

function validPalindrome(s){
    let result=''
    for(let i=0;i<s.length;i++){
        if(/[a-zA-Z0-9]/.test(s[i])){
            result+=s[i].toLowerCase()
        }
    }
    let left=0
    let right=result.length-1
    while (left<right) {
        if(result[left]!==result[right]){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(validPalindrome(s1))
