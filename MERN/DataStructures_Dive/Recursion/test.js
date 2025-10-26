//TOI
function fib(n){
    if(n==0) return [0]
    if(n===1)return [1]
    if(n==2) return [1,2]
    let resutl,a=0,b=1
    const res=[]
    for(let i=3;i<=n;i++){
        resutl=a+b
        res.push(resutl)
        a=b
        b=resutl
    }
    return res
}
console.log(fib(10))