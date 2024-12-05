//correct
class Bird {
  move() {
    console.log("Moving...");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("flyingBird....");
  }
}

class NonFlyingBird extends Bird {
  walk() {
    console.log("Walking....");
  }
}

class Penguin extends NonFlyingBird {
  walk() {
    console.log("Walk on ice");
  }
}

class Eagle extends FlyingBird {
  fly() {
    console.log("Soaring at high altitudes");
  }
}

//Demonstraction function

function makeBirdMove(bird) {
  bird.move();

  if (bird instanceof FlyingBird) {
    bird.fly();
  } else if  (bird instanceof NonFlyingBird) {
    bird.walk();
  }
}


// Usage
function demonstrateBirdBehaviors() {
    const eagle = new Eagle();
    const penguin = new Penguin();

    console.log("Eagle Behavior:");
    makeBirdMove(eagle);

    console.log("\nPenguin Behavior:");
    makeBirdMove(penguin);
}

demonstrateBirdBehaviors();