function RemoveString(str){
    return [...new Set(str)].join('')
}
console.log(RemoveString('jishnujj'))
function RemoveStringWithout(str){
    let result=""
    for(let i=0;i<str.length;i++){
        let found=false
        for(let j=0;j<result.length;j++){
            if(str[i]===str[j]){
                found=true
                break
            }
        }
        if(!found){
            result+=str[i]
        }
    }
    return result
}
console.log(RemoveStringWithout('jishnujj'))

function RemoveStringWithout2(str){
    let hashtable={}
    let result=''
    for(let i=0;i<str.length;i++){
        if(!hashtable[str[i]]){
            result+=str[i]
            hashtable[str[i]]=true
        }
}
return result
}
console.log(RemoveStringWithout2('jishnuvjishnuv'))