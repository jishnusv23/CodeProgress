function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(10))
function fib1(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let res = [];
  let a = 0,
    b = 1,
    result;
  for (let i = 3; i <= n; i++) {
    result = a + b;
    res.push(result);
    a = b;
    b = result;
  }
  return res
}
console.log(fib1(10));
