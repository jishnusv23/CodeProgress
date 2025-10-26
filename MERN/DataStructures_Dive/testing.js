let s1='cat'
let s2='tac'

function isAnagram(s1,s2){
    let map=new Map()
    for(let char of s1){
        map.set(char,(map.get(char)||0)+1)
    }
    for(let char of  s2){
        if(!map.has(char)){
            return false
        }
        if(map.get(char)){
            map.set(char,(map.get(char)||0)-1)
            if(map.get(char)===0){
                map.delete(char)
            }
        }

    }
    return map.size==0
}
console.log(isAnagram(s1, s2));
