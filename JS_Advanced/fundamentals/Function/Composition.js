//function composition is the process of combine two or more function to produce a new function

const multiplycomposition = (a) => (b) => a * b;
const addcompon = (a) => (b) => a + b;
const mulco = multiplycomposition(3);
const addco = addcompon(4);
const resultco = addco(mulco(5));
//first 5*3 =15
//second 15+4 =19
console.log(resultco);

//another example
const toString = (num) => num.toString();

const appendMessage = (str) => str + "is a greate number";

const compose = (f, g) => (x) => f(g(x));

const numberToMessage = compose(appendMessage, toString);

// console.log(numberToMessage(7))




