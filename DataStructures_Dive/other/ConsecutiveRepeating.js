function consecutiveRepeating(str) {
  if (str.length == 1) return str;
  let maxChar = str[0];
  let maxCount = 0;
  let currnentChar = str[0];
  let currentCount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currnentChar) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxChar = currnentChar;
        maxCount = currentCount;
      }
      currnentChar = str[i];
      currentCount = 1;
    }
  }
  return { maxChar: maxChar, maxCount };
}
console.log(consecutiveRepeating("aaabbcccccddee"));
