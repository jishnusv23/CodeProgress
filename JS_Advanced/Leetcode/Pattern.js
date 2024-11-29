const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];

for (let i = 0; i < 6; i++) {
  let forward = [];
  let backward = [];
  let sum = 0;

  if (i === 0) {
    result.push(`10=10`);
  } else {
    // Build forward expression and calculate sum
    for (let j = 0; j < i; j++) {
      forward.push(arr[j]);
      sum += arr[j];
    }

    // Build backward expression
    for (let j = 0; j < i; j++) {
      backward.push(arr[arr.length - j - 1]);
      sum += arr[arr.length - j - 1];
    }

    // Reverse the forward expression for display
    let backwardStr = backward.join("+");
    let forwardStr = forward.reverse().join("+");
    result.push(`${backwardStr}+${forwardStr}=${sum}`);
  }
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];

// for (let i = 0; i < 6; i++) {
//   let forward = "";
//   let backward = "";
//   if (i === 0) {
//     result.push(`10=10`);
//   } else {
//     for (let j = 0; j < i; j++) {
//       if (j === 0) {
//         forward += `${arr[j]}`;
//       } else {
//         forward += `+${arr[j]}`;
//       }
//       backward += `${arr[arr.length - j - 1]}+`;
//     }
//     let expresion = backward + forward.split("").reverse().join("");
//     result.push(expresion + "=" + eval(expresion));
//   }
// }

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }