let str='helloworld'

function RemoveDuplicate(str){
    let set={}
    for(let char of str){
       set[char]=(set[char]||0)+1
    }
    console.log(set)
    
    let str2=''
    for(let char in set){
        if(set[char]===1){
            str2+=char
        }
    }
    return str2


    
    
}
console.log(RemoveDuplicate(str))