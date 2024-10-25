//for in
const colors = ["red", "blue", "green"];

for (let index in colors) {
  console.log(index);
}

for (let color of colors) {
  console.log(color);
}

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

for (let prop in car) {
  console.log(`${prop}:${car[prop]}`);
}

const str = "hello";
const arr = ["a", "b", "c"];

arr.greeting = "hi";
for (let x in arr) {
  console.log(x);
}
for (let x of arr) {
  console.log(x);
}

for (let char of str) {
  console.log(char);
}

//While loop

let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

//do while
let num=0
do{
    console.log(num)
    num++
}while(num<4)