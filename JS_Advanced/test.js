function createCachedFunction(fn, delay = 5000) {
  let cache = null; // Store the last computed result
  let lastCallTime = 0; // Store the time of the last call

  return function (...args) {
    const now = Date.now();
    // Check if cached value is still valid
    if (cache !== null && now - lastCallTime < delay) {
      console.log("Returning cached result");
      return cache;
    }

    // Update cache with new result from function
    cache = fn(...args);
    lastCallTime = now;
    return cache;
  };
}

// Example usage:
function expensiveCalculation(x) {
  console.log("Calculating...");
  return x * 2;
}

const cachedCalculation = createCachedFunction(expensiveCalculation, 5000);

console.log(cachedCalculation(70)); // "Calculating..." -> 20
console.log(cachedCalculation(70)); // "Returning cached result" -> 20 (within 5 seconds)
setTimeout(() => console.log(cachedCalculation(10)), 6000); // "Calculating..." -> 20 (after 5 seconds)
