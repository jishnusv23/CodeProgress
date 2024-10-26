function sum(n) {
  if (n <= 1) return n;

  return n + sum(n - 1);
}
console.log(sum(5));

function oddSum(n) {
  if (n <= 1) return n;

  return oddSum(n - 1)+(n%2!==0?n:0);
}
console.log(oddSum(5))

function evenSum(n){
    if(n<=1) return 0

    return (n%2===0?n:0)+evenSum(n-1)
}
console.log(evenSum(5))