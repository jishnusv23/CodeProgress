//currying 

function Sum(a){
    return function(b){
        return function (c){
            return a+b+c
        }
    }
}
console.log(Sum(2)(3)(4))