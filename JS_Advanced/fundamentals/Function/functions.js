// Regular function

function RegularFuction(name) {
  return `Hello ${name}`;
}
console.log(RegularFuction("jishnu"));

//Arrow function

const FindSum = (a, b) => a + b;
const person = {
  name: "Jishnu",

  sayHello: () => {
    console.log(this.name);
  },
};

//IIFEs
(function (name) {
  console.log("immediately working this dear :" + name);
})("jishnu");

const counter = (() => {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();
console.log(counter.getCount()); //0
console.log(counter.increment()); //1
console.log(counter()); //error count is not defined

//callback hell

getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        console.log("yes last ", d);
      });
    });
  });
});

//Better solution usig Promises async/await

getData()
  .then((a) => getMoreData(a))
  .then((b) => getMoreData(b))
  .then((c) => console.log(c));

// Recursive function
const fibonacci = (n) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(6)); //8

//Generator Functions

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Higher Order Function

function doOperation(x, operation) {
  return operation(x);
}

const double = (x) => x * 2;
console.log(doOperation(5, double));

function createMultiple(factor) {
  console.log("🚀 ~ file: functions.js:90 ~ createMultiple ~ factor:", factor);
  return function (number) {
    return number * factor;
  };
}

const multipe = createMultiple(2);
console.log(multipe(5));

//PURE FUNCTION
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); //always return 5

// Named Function
function greet(name) {
  return "Hello:" + name;
}
console.log(greet("jishnu"));

//Factory Function

function createPeople(name, age) {
  return {
    name: name,
    age: age,
    greet: () => {
      return `Hello ${name} your age is :${age}`;
    },
  };
}

const peopleOne = createPeople("jishnu", 21);
const peopleTw0 = createPeople("adithyan", 19);
console.log(peopleOne.greet());
console.log(peopleTw0.greet());

// another example
function CounterState(initailvalue = 0) {
  let count = initailvalue;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
  };
}
const result = CounterState(5);
console.log(result.increment());
console.log(result.decrement());

//Constructors Function
function CreateConstruction(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    return `Hello ${name} Yes i know your :${age} old`;
  };
}
const person1 = new CreateConstruction("jishnu", 21);
const person2 = new CreateConstruction("jishnu", 21);
console.log(person1.greeting());
console.log(person2.greeting());

//another example
function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.study = function () {
  return `Hello ${this.name} are you working properly. age is ${this.age} so time is waite for you`;
};

const student1 = new Student("jishnu", 21);
console.log(student1.study());

//Prototype Function
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  return `some sound`;
};
Animal.prototype.getName = function () {
  return `${this.name}`;
};
const animal = new Animal("jishnu");
console.log(animal.getName());
console.log(animal.makeSound());

//Closure Function

function CreateCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counterstate = CreateCounter();
console.log(counterstate.increment());
console.log(counterstate.decrement());
console.log(counterstate.increment());
console.log(counterstate.decrement());
console.log(counterstate.decrement());
console.log(counterstate.getCount());

//FirstClass Function
const sayHi = () => {
  return "Hi";
};

const greeting = (hiFn, name) => {
  console.log(hiFn()+name);
};
greeting(sayHi,'jishnu')
