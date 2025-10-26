//call
let person1 = {
  fullname: function (dev, city) {
    return `${this.firstname} ${this.secondname}  from ${city} position:${dev}`;
  },
};
let person2 = {
  firstname: "jishnu",
  secondname: "jishnu sv",
};
console.log(person1.fullname.call(person2, "developer", "kerala"));

//apply
function calculate(a, b, c) {
  return a + b + c;
}
let number = [1, 2, 3];
console.log(calculate.apply(null, number));

//find the max
const maxNumbers = [5, 3, 9, 1, 7];
console.log(Math.max.apply(null, maxNumbers));

//Bind method
let person = {
  firstname: "jishnu",
  lastname: "sv",
  greet: function (greeting) {
    return `${greeting},${this.firstname} ${this.lastname}`;
  },
};

const boundGreet = person.greet.bind(person, "hello");
console.log(boundGreet());
