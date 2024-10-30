function generateFibonacci(limit) {
  let fibonacciSeries = [];
  let a = 0,
    b = 1,
    next;

  while (a <= limit) {
    fibonacciSeries.push(a);
    next = a + b;
    a = b;
    b = next;
  }

  console.log("Fibonacci Series:", fibonacciSeries);
}


const limit = 50;
// generateFibonacci(limit);

const person = {
  name: 'John Doe',
  age: 30
};

const personProxy = new Proxy(person, {
  set: (target, property, value) => {
    if (property === 'age' && (value < 0 || value > 120)) {
      console.log('Invalid age value');
      return false;
    }
    target[property] = value;
    return true;
  }
});

personProxy.age = -10; // Output: Invalid age value
personProxy.age = 40; // Age updated