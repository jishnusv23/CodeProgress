function StringPalindrom(str) {
  if (str.length === 1) return str;

  return str.slice(-1) + StringPalindrom(str.slice(0,-1));
}
console.log('first')
console.log(StringPalindrom('first'))

//without slice
const reverseString=(str1,index=0)=>{
    if(index===str1.length) return ""

    return reverseString(str1,index+1)+str1[index]
}
console.log(reverseString('jishnu'))
