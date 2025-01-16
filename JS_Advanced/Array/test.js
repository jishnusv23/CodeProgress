let arr = [99, 33, 1, 4, 5, 6];

function sinan(arr) {
  let result = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[arr.length - i - 1];
  }
  let sum = result.reduce((acc, curr) => (acc += curr), 0);
  if (sum > 100) {
    let large = -Infinity,
      secondlarg = -Infinity;
    for (let i = 0; i < result.length; i++) {
      if (result[i] > large) {
        secondlarg = large;
        large = result[i];
      }else if(result[i]>secondlarg&&result[i]!==large){
        secondlarg=result[i]
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i] == secondlarg) {
        result[i] = result[i + 1];
        result.length--;
      }
    }
  }
  return result;
}
console.log(sinan(arr));
