function findNonRepeatingElements(arr) {
  const elementCount = {};
  for (let ele of arr) {
    elementCount[ele] = (elementCount[ele] || 0) + 1;
  }

  return arr.filter((num)=>elementCount[num]===1);
}

const array = [4, 5, 6, 7, 4, 5, 8, 9, 6];
const nonRepeatingElements = findNonRepeatingElements(array);
console.log("🚀 ~ file: findNonRepeatingElements.js:12 ~ nonRepeatingElements:", nonRepeatingElements)
