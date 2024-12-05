// Incorrect Implementation (Violating ISP)
class AllInOneWorker {
  work() {
    console.log("Working on primary tasks");
  }

  eat() {
    console.log("Eating lunch");
  }

  sleep() {
    console.log("Sleeping");
  }

  play() {
    console.log("Playing games");
  }

  code() {
    console.log("Writing code");
  }

  manage() {
    console.log("Managing projects");
  }
}

// Correct Implementation (Following ISP)
// Define focused interfaces/contracts
class Workable {
  work() {
    throw new Error("Must implement work method");
  }
}

class Eatable {
  eat() {
    throw new Error("Must implement eat method");
  }
}

class Sleepable {
  sleep() {
    throw new Error("Must implement sleep method");
  }
}

class Playable {
  play() {
    throw new Error("Must implement play method");
  }
}

class Programmable {
  code() {
    throw new Error("Must implement code method");
  }
}

class Manageable {
  manage() {
    throw new Error("Must implement manage method");
  }
}

// Specific Worker Implementations
class Developer {
  work() {
    console.log("Developing software");
  }

  code() {
    console.log("Writing complex code");
  }

  eat() {
    console.log("Developer eating");
  }

  sleep() {
    console.log("Resting between coding sessions");
  }
}

class Manager {
  work() {
    console.log("Managing team and projects");
  }

  manage() {
    console.log("Coordinating team activities");
  }

  eat() {
    console.log("Manager having a business lunch");
  }

  sleep() {
    console.log("Resting after long meetings");
  }
}

class Robot {
  work() {
    console.log("Performing automated tasks");
  }

  code() {
    console.log("Generating code automatically");
  }
}

// Demonstration Function
function performActivities(worker) {
  // Only call methods that are guaranteed to exist
  if (typeof worker.work === "function") {
    worker.work();
  }

  // Optional interfaces can be checked before calling
  if (typeof worker.code === "function") {
    worker.code();
  }
}

// Usage Example
function main() {
  const developer = new Developer();
  const manager = new Manager();
  const robot = new Robot();

  console.log("Developer Activities:");
  performActivities(developer);

  console.log("\nManager Activities:");
  performActivities(manager);

  console.log("\nRobot Activities:");
  performActivities(robot);
}

// Run the example
main();
