class Vehicle {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  start() {
    console.log(`The branc${this.brand} is starting`);
  }
}

class Car extends Vehicle {
  constructor(brand, color, model) {
    //super keyword call the parent class constructor

    super(brand, color);
    this.model = model;
  }
  //overiding parent method

  start() {
    console.log(`The ${this.brand},${this.model} car is starting`);
  }
  drive() {
    console.log(`${this.color} ${this.brand} ${this.model} is driving`);
  }
}

const genericVechicle = new Vehicle("Generic", "White");
const MyCar = new Car("Toyota", "Red", "Carmy");

genericVechicle.start();
MyCar.start();
MyCar.drive();

//ANOTHER SIMPLE EXAMPLE

class Vehicle1 {
  start() {
    console.log("start");
  }
  end() {
    console.log("end");
  }
}
class Car1 extends Vehicle1 {
  drive(){
    console.log('driving')
    this.start()
  }
}

const MyCar1=new Car1()
MyCar1.drive()
// MyCar1.start()