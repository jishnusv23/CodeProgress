let arr = [123, 456];
// let output = [654, 321];
let output = [];

for (let i = arr.length - 1; i >=0; i--) {
  let num = arr[i];
  let reverseNum = 0;

  while (num > 0) {
    reverseNum = reverseNum * 10 + (num % 10);
   
    num = Math.floor(num/10);
   
  }
  output.push(reverseNum)
}

console.log(output)

let output2=[]
for(let i=arr.length-1;i>=0;i--){
    
    let reverseNum=Number(arr[i].toString().split('').reverse('').join(''))
    output2.push(reverseNum)
}
console.log(output2)