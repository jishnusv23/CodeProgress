let arr = [1, 1, 2, 3, 1, 4, 4, 5, 6, 6];

const result = arr.filter((value, index, arr) => {
  return value !== arr[index + 1] && value !== arr[index - 1];
});
// console.log(result)

let numbser = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 6];
const result1 = numbser.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

// console.log(result1)

var x = [1, 3, 5, 2, 1, 4, 5, 2, 1, 4, 56, 2, 1, 1, 3, 43, 1, 2, 4];

const result3 = x.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = ++acc[curr];
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
// console.log(result3)

var x = ["sdfa", "adfgd", "rgafga", "esdfg", "gfasf"];

const result4 = x.filter((str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.some((ele) => str.startsWith(ele));
});
// console.log(result4)

const myArray = [1, 4, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function countOccurance(arr, value) {
  return arr.reduce((acc, curr) => {
    if (curr === value) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}
// console.log(countOccurance(myArray,4))

const arr2 = [2, 4, 3, 5, 1, 2, 4, 3];

function firstUnique(arr) {
  const countMap = {};
  for (let nums of arr) {
    if (countMap[nums]) {
      countMap[nums] = (countMap[nums] || 0) + 1;
    } else {
      countMap[nums] = 1;
    }
  }

  for (let count of arr2) {
    if (countMap[count] == 1) {
      return count;
    }
  }
}
// console.log(firstUnique(arr2));

const arr3 = [3, 1, 2, 4];
function Swap(arr){
    [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]]
    return arr
}
console.log(Swap(arr3))