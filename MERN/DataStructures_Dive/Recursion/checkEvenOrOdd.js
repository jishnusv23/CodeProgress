function checkNumberEven(n) {
    if(n==1) return false
    if(n==2) return true

    return checkNumberEven(n-2)
}
console.log(checkNumberEven(20))

function checkNumberOdd(n) {
    if(n==1) return true
    if(n==2) return false

    return checkNumberOdd(n-2)
}
console.log(checkNumberOdd(21));