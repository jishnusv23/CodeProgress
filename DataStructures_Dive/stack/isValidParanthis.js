let s='(){}[]'

const isValidParanthis=(s)=>{
    let map={'(':')','{':'}','[':']'}   
    let stack=[]
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            // console.log(s[i])
            stack.push(s[i])
        }else{
            console.log(s[i],'-----------')
            if(map[stack.pop()]!==s[i]){
                return false
            }
        }
    }
    return true
}
console.log(isValidParanthis(s))