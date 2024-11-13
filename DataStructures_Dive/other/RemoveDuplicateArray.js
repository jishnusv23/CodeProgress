let array = [1, 3, 2, 3, 4, 2, 5, 1];


function RemoveDuplicate(arr){
    let hashtable={}
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(!hashtable[arr[i]]){
            result.push(arr[i])
            hashtable[arr[i]]=true
        }
    }
    return result
}
console.log(RemoveDuplicate(array))