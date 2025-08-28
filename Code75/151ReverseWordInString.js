//*https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// let s = "the sky is blue";
//ouput "blue is sky the"

let s = "a good   example";
//output "example good a"

const reverseWords = (s) => {
  const str = s.trim().split(/\s+/);
  let left=0,right=str.length-1
  while(left<right){
    let temp=str[left]
    str[left]=str[right]
    str[right]=temp
    left++
    right--
  }
  return str.join(" ")
};
console.log(reverseWords(s))
