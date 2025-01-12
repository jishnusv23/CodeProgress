let s = "abcabcbb";
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

function LongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i])
    maxLength=Math.max(maxLength,i-left+1)
  }
  return maxLength
}
console.log(LongestSubstring(s));
