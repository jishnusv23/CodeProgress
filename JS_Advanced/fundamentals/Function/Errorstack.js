function firstFunction() {
  secondFunction();
}

function secondFunction() {
  thirdFunction();
}
function thirdFunction() {
  throw new Error("An Error occurred");
}

try {
  firstFunction();
} catch (error) {
  console.log(error.stack);
}