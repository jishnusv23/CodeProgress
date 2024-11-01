// A simple function that double the number

function Double(n) {
  return n * 2;
}
//An another function that takes a function as parameter
function ProcessNumber(func, num) {
  return func(num); //calling the function passed as arguments
}
//Usig Doubl as First-class function by passing it as an argument
console.log(ProcessNumber(Double, 10));
