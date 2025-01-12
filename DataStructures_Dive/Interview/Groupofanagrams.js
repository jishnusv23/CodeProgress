let strs = ["act", "pots", "tops", "cat", "stop", "hat"];

// Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]];

function Groupofanagrams(strs) {
  let map = new Map();
  for (let word of strs) {
    const sortword = word.split("").sort().join("");
    if (!map.has(sortword)) {
      map.set(sortword, []);
    }
    map.get(sortword).push(word)
  }
  return Array.from(map.values())
}
console.log(Groupofanagrams(strs));
