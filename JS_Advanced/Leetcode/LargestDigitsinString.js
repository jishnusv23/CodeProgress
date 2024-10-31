const number = 52789;

const LargestDigits = (number) => {
  const digits = number.toString().split("");
  console.log(
    "🚀 ~ file: LargestDigitsinString.js:5 ~ LargestDigits ~ digits:",
    digits
  );
  let LargestDigitsNumber = Math.max(...digits.map(Number));
  console.log(LargestDigitsNumber)
};

LargestDigits(number);
