//generator function to print multiple of 5 from 100-1

function* multiplesOfFive() {
  for (let i = 100; i > 0; i--) {
    if (i % 5 == 0) {
      yield i;
    }
  }
}
const generator = multiplesOfFive();
for (let value of generator) {
  console.log(value);
}
