const sentence = "The quick brown fox jumped over the lazy dog";
console.log(secondLongestWord(sentence));

function secondLongestWord(str) {
  if (str.length < 1) return str;

  let words = [];
  let currentStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || str[i] == "\t") {
      if (currentStr != "") {
        words.push(currentStr);
        currentStr = "";
      }
    } else {
      currentStr += str[i];
    }
  }
  let largest = "";
  let secondLargest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > largest.length) {
      secondLargest = largest;
      largest = words[i];
    } else if (words[i].length > secondLargest.length && words !== largest) {
      secondLargest = words[i];
    }
  }
//   console.log(words);
return secondLargest
}
