// Event Loop Visualization and Explanation

class EventLoopDemo {
  // Simulating Microtask Queue (Promise)
  runMicrotasks() {
    console.log("--- Microtask Queue Demonstration ---");

    // Promise creates microtasks
    Promise.resolve().then(() => {
      console.log("Microtask 1: First Promise resolved");
    });

    Promise.resolve().then(() => {
      console.log("Microtask 2: Second Promise resolved");
    });

    console.log("Synchronous code runs first");
  }

  // Simulating Callback Queue (setTimeout)
  runTimers() {
    console.log("--- Callback Queue Demonstration ---");

    // Different timer delays
    setTimeout(() => {
      console.log("Timeout 1: Executed after 0ms");
    }, 0);

    setTimeout(() => {
      console.log("Timeout 2: Executed after 100ms");
    }, 100);

    console.log("Synchronous code continues");
  }

  // Complex Event Loop Scenario
  complexEventLoopScenario() {
    console.log("--- Complex Event Loop Scenario ---");

    // Immediate execution
    console.log("1. Synchronous code start");

    // Microtask (Promise)
    Promise.resolve().then(() => {
      console.log("2. First Promise microtask");
    });

    // Next tick queue
    process.nextTick(() => {
      console.log("3. Process.nextTick callback");
    });

    // Macro task (setTimeout)
    setTimeout(() => {
      console.log("4. First setTimeout callback");

      // Nested Promise
      Promise.resolve().then(() => {
        console.log("5. Nested Promise inside setTimeout");
      });
    }, 0);

    // Another synchronous code
    console.log("6. Synchronous code end");
  }

  // I/O and Blocking Demonstration
  blockingVsNonBlocking() {
    console.log("--- Blocking vs Non-Blocking Demo ---");

    // Synchronous (Blocking) Operation
    function syncOperation() {
      console.log("Synchronous operation started");
      // Simulate heavy computation
      for (let i = 0; i < 1000000000; i++) {}
      console.log("Synchronous operation completed");
    }

    // Asynchronous (Non-Blocking) Operation
    function asyncOperation() {
      console.log("Asynchronous operation started");
      setImmediate(() => {
        console.log("Asynchronous operation completed");
      });
    }

    // Demonstrate the difference
    console.log("Starting operations");
    syncOperation();
    asyncOperation();
    console.log("Continuing with other tasks");
  }
}

// Run the demonstrations
const demo = new EventLoopDemo();

console.log("\n=== Microtasks Demonstration ===");
demo.runMicrotasks();

console.log("\n=== Timers Demonstration ===");
demo.runTimers();

console.log("\n=== Complex Event Loop ===");
demo.complexEventLoopScenario();

console.log("\n=== Blocking vs Non-Blocking ===");
demo.blockingVsNonBlocking();
