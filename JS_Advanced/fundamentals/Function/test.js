function logWrapper(fn) {
  return function (...args) {
    console.log(`Input arguments: ${args}`);
    const result = fn(...args);
    console.log(`Output result: ${result}`);
    return result;
  };
}

// Example function to wrap
function add(a, b) {
  return a + b;
}

// Wrapping the `add` function
const loggedAdd = logWrapper(add);

// Using the wrapped function
const result = loggedAdd(5, 3); // Output: Logs inputs and outputs
console.log(`Final Result: ${result}`);
