function findLargestDigitMath(number) {
  let largest = 0;
  number = Math.abs(number);
  console.log(
    "🚀 ~ file: findLargestDigitMath.js:4 ~ findLargestDigitMath ~ number:",
    number
  );
  const digit = number % 10;
  while (number > 0) {
    let digit = number % 10;
    largest=Math.max(largest,digit)
    number = Math.floor(number / 10);

  }
  return largest
}
console.log(findLargestDigitMath(45690));
