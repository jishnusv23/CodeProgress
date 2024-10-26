

function fib(n){
    if(n<=1) return n

    return fib(n-1)+fib(n-2)
}
console.log(fib(10))

function fib1(n){
    if(n<=2) return n

    let a=0,b=1,result=0
    for(let i=2;i<=n;i++){
        result=a+b
        a=b
        b=result
    }
    return result
}
console.log(fib1(10))