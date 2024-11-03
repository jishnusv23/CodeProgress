function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.parse(args);
    if (cache[key]) {
      return cache[key];
    }
    const result=fn(...args)
    cache[key]=result
    return result
  };
}

function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

const memoizetion=memoize(fib)
console.log(memoizetion(10))
console.log(memoizetion(10))