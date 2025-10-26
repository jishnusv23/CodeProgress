function firstFn(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`result1:${data}`)
            resolve(data+1)
        }, 1000);
    })
}
function SecondFn(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`result2 :${data}`)
            resolve(data+1)
        }, 1000);
    })
}
function ThirdFn(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`result3:${data}`)
            resolve(data+1)
        }, 1000);
    })
}

async function executeFn() {
    try{
        const result1=await firstFn(1)
        console.log("🚀 ~ file: AsyncFunction.js:29 ~ executeFn ~ result1:", result1)
        const result2=await SecondFn(result1)
        console.log("🚀 ~ file: AsyncFunction.js:31 ~ executeFn ~ result2:", result2)
        const result3=await ThirdFn(result2)
        console.log("🚀 ~ file: AsyncFunction.js:33 ~ executeFn ~ result3:", result3)
    }catch(error){
        console.error('somethting wrong',error);
        
    }
    
}
executeFn()