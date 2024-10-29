function Prime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % 2 == 0) {
      return false;
    }
  }
  return true;
}
// console.log(Prime(32))

let obj = [
  { a: 1, b: [2, 4] },
  { a: 1, b: [2, 4] },
];

function SumObj(arr, i = 0) {
  if (arr.length == i) {
    return 0;
  }
  let sum = 0;
  let arr2 = arr[i].b;
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return arr[i].a + sum + SumObj(arr, i + 1);
}

// console.log(SumObj(obj));
let arr=[1,2,3,4]
function SumArr(arr,i=0){
    if(arr.length==i){
        return 0
    }
    return arr[i]+SumArr(arr,i+1)
}

// console.log(SumArr(arr))


function Print(i=1){
   
    if(i===11){
        return 
    }
    console.log(i)
    Print(i+1)
}
Print(1)

function greet(name) {
  return `Hello, ${name}!`;
}

function greetUser(greetingFunction, userName) {
  return greetingFunction(userName);
}

console.log(greetUser(greet, 'Alice')); 
// 0=0
// 1*1=1
// 2*2*2=8
