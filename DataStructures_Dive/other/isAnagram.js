function isAnagram(str1,str2){
    if(str1.length!==str2.length) return false

    let count={}
    for(let char of str1){
        count[char]=(char[char]||0)+1
    }
    console.log(count)
    for(let char of str2){
        if(!count[char]) return false
        count[char]--
    }
    return true
}
console.log(isAnagram('ace','eca'))
console.log(isAnagram('ace','ecm'))