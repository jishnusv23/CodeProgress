//call
function greeting(name) {
  console.log(`Hello ${name} Good Morning ,My name is ${this.name} `);
}

let person = {
  name: "jishnu",
};
greeting.call(person, "AJITH ");

//Apply
function add(a, b) {
  return a + b;
}
let numbers = [1, 3];
console.log(add.apply(null, numbers));

//bind
let personDetail = {
    name:"JISHNU",
    greeting:function(){
        console.log(`Hello Good Morning My name is ${this.name}`)
    }


};
const greetingPerson=personDetail.greeting.bind(person)
greetingPerson()
    