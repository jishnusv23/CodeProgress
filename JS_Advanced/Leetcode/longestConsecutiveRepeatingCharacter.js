function longestConsecutiveRepeatingCharacter(str) {
  if (str.length === 0) return "";

  let maxChar = str[0];
  let maxCount = 1;
  let currentChar = str[0];
  let currentCount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
    } else {
      //check the longest sequestnce

      if (currentChar > maxCount) {
        maxCount = currentCount;
        maxChar = currentChar;
      }
      currentChar = str[i];
      currentCount = 1;
    }
  }

  //finaly check the last sequence

  if (currentCount > maxCount) {
    maxCount = currentCount;
    maxChar = currentChar;
  }
  return { character: maxChar, maxCount };
}
const str = "aaabbccccddddddeeefggggggg";
// const result = longestConsecutiveRepeatingCharacter(str);
// console.log(
//   "🚀 ~ file: longestConsecutiveRepeatingCharacter.js:31 ~ result:",
//   result
// );
