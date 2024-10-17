//find the number of wovels in this string

const str =
  "qwertyuiopasdfghjklasdfghjkqwertyuioasdfghjwertyuiwsdxcwedfzxcghujnb";
const set = new Set(["a", "e", "i", "o", "u"]);
let obj = {};

for (let i = 0; i < str.length; i++) {
  if (set.has(str[i])) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
}
console.log(obj)