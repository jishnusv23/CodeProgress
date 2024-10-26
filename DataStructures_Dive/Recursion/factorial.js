function factorial(n) {
  if (n <= 2) return n;

  return n * factorial(n - 1);
}
console.log(factorial(10));

//without recursion
function factorial1(n) {
  let result = 1;
  for(let i=2;i<=n;i++){
    result *= i;
  }
  return result
}
console.log(factorial1(10))