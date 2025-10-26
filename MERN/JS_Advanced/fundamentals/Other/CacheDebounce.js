function CreateCacheDebounce(fn, delay = 5000) {
  let cache = null;
  let lastCallTime = 0;

  return function (...args) {
    let now = Date.now();

    if (cache != null && now - lastCallTime < delay) {
      console.log("returning caching function");
      return cache;
    }
    cache = fn(...args);
    lastCallTime = now;
    return cache;
  };
}

function expensiveFunction(x) {
  console.log("calculation");
  return x*2
}

const cacheDebounce=CreateCacheDebounce(expensiveFunction,5000)

console.log(cacheDebounce(10))
console.log(cacheDebounce(10))
setTimeout(() => {
    console.log(cacheDebounce(60))
}, 5000);