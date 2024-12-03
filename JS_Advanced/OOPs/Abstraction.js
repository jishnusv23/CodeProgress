// Abstract base class for Animal
class Animal {
  // Abstract method for making a sound
  makeSound() {
    throw new Error("Method must be implemented by child classes");
  }
}

// Concrete class for Dog
class Dog extends Animal {
  // Implementing the abstract method
  makeSound() {
    return "Woof! Woof!";
  }
}

// Concrete class for Cat
class Cat extends Animal {
  // Implementing the abstract method
  makeSound() {
    return "Meow! Meow!";
  }
}

// Function to print the sound of an animal
function printAnimalSound(animal) {
  console.log(`The animal says: ${animal.makeSound()}`);
}

// Creating objects of Dog and Cat
const myDog = new Dog();
const myCat = new Cat();

// Using the function to print the sounds
printAnimalSound(myDog); // Output: The animal says: Woof! Woof!
printAnimalSound(myCat); // Output: The animal says: Meow! Meow!
// const newC= new Animal()
// newC.makeSound()
