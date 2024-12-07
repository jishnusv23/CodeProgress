class CustomError extends Error {
  constructor(message) {
    //call the constructror of the parent class Error is the parent clss

    super(message);
    this.message = message;
  }
}

function* randomElementGenerator(arr) {
  let see = {};
  while (true) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!see[randomIndex]) {
      yield arr[randomIndex];
      see[randomIndex] = true;
    } else {
      throw new CustomError("Alredy find this index");
    }
  }
}
let arr = ["apple", "orange", "mango", "pinaple", "watermelon"];
const result = randomElementGenerator(arr);

try {
  for (let i = 0; i < arr.length; i++) {
    console.log(result.next().value);
  }
} catch (err) {
  if (err instanceof CustomError) {
    console.error(err.message);
  }
}
