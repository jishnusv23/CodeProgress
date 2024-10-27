//generator function odd number

function* OddNumber() {
  let n = 1;
  while (true) {
    yield n;
    n += 2;
  }
}
const oddNum = OddNumber();
console.log(oddNum.next().value);
console.log(oddNum.next().value);
console.log(oddNum.next().value);
