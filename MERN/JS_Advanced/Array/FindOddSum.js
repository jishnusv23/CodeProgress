//find ODD number Sum using HOC
const randomNumbers = [45, 12, 78, 34, 90, 23, 67, 11, 59, 84];

function findOddSum(randomNumbers) {
  const result = randomNumbers.filter((ele) => ele % 2 !== 0);
  const result1 = result.reduce((acc, curr) => acc + curr, 0);
  return result1
}
console.log(findOddSum(randomNumbers))
