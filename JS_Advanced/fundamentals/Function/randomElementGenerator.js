function* randomElementGenerator(arr) {
  while (true) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    yield arr[randomIndex];
  }
}

let arr = [1, 2, 3, 4, 5, 6];
const generator = randomElementGenerator(arr);
for(let i=0;i<5;i++){
    console.log(generator.next().value)
}