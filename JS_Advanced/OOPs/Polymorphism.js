// Parent class
class Animal {
  // Method to be overridden by child classes
  makeSound() {
    console.log("Some generic animal sound");
  }
}

// Child class: Dog
class Dog extends Animal {
  // Overriding the makeSound method
  makeSound() {
    console.log("Woof! Woof!");
  }
}

// Child class: Cat
class Cat extends Animal {
  // Overriding the makeSound method
  makeSound() {
    console.log("Meow! Meow!");
  }
}

// Creating objects of Dog and Cat
const myDog = new Dog();
const myCat = new Cat();

// Calling the makeSound method (demonstrating polymorphism)
myDog.makeSound(); // Output: Woof! Woof!
myCat.makeSound(); // Output: Meow! Meow!

// const arr = [1, 2, 3];
// arr[-1] = 10;
// console.log(arr)
// console.log(arr.length, arr[-1]);

