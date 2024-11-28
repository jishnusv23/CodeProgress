function hocExample(data, callback) {
  const result = [];
  for (const ele of data) {
    result.push(callback(ele));
  }
  return result;
}
const number = [4, 5, 6, 7, 8, 9];
const double = hocExample(number, (num) => num * 2);
// console.log(double);

//another example
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add = createAdder(5);
console.log(add(10));

//another example
function greeting(name, callback) {
  console.log(`Hello ${name}!`);
  callback()
}
function tatta(){
  console.log('see you...............')
}
greeting('jishnu',tatta)
