// class Vechicle {
//   start() {
//     console.log("Vechicle is starting....");
//   }
// }

// class Car extends Vechicle {
//   start() {
//     console.log("Car engine is starting");
//   }
// }
// class Bicycle extends Vechicle {
//   start() {
//     throw new Error("Bicycl have no engine");
//   }
// }
// function StartVechicle(vechicle) {
//   vechicle.start();
// }
// const car=new Car()
// const cycle=new Bicycle()
// StartVechicle(car)
// StartVechicle(cycle)

class Vechicle {
  //common properit
}

class EnginePoweredVechile extends Vechicle {
  start() {
    console.log("starting the engine");
  }
}
class NonEnginePoweredVechile extends Vechicle {
  pedal() {
    console.log("starting the engine");
  }
}

class Car extends EnginePoweredVechile {
  start() {
    console.log("Car engine is starting....");
  }
}

class Bicycle extends NonEnginePoweredVechile {
  pedal() {
    console.log("first");
  }
}
function StartVechicle(vechicle) {
  if (vechicle instanceof EnginePoweredVechile) {
    vechicle.start();
  } else {
    console.log("This vechicle cannot  start an engine");
  }
}
const car = new Car();
const cycle = new Bicycle();
StartVechicle(car)
StartVechicle(cycle)