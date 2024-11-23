function taskFirst(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`result1 : ${data}`)
            resolve(data+1)
        }, 1000);
    })
}
function taskSecond(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`result2 :${data}`)
            resolve(data+1)
        }, 1000);
    })
}
function taskThird(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`result3 :${data}`)
            resolve(data+1)
        }, 1000);
    })
}

taskFirst(1)
            .then((result)=>taskSecond(result))
            .then((result2)=>taskThird(result2))
            .then((resul3)=>console.log(resul3,'result'))