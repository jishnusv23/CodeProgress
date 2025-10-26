class CoffeeMachine {
  #waterLevel; // Private data

  constructor() {
    this.waterLevel = 100; // Initialize water level
  }

  boilWater() {
    // Private method
    console.log("Boiling water...");
  }

  brewCoffee() {
    // Private method
    console.log("Brewing coffee...");
  }

  pressButton() {
    if (this.waterLevel > 10) {
      this.boilWater();
      this.brewCoffee();
      this.waterLevel -= 10;
      console.log("Your coffee is ready!");
    } else {
      console.log("Not enough water to make coffee.");
    }
  }

  refillWater() {
    this.#waterLevel = 100;
    console.log("Water refilled.");
  }
}

const myMachine = new CoffeeMachine();
myMachine.pressButton(); // Makes coffee
myMachine.refillWater(); // Refills water
myMachine.waterLevel = 0; // Error: Cannot access private field
