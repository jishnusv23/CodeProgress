let s = "]){}[}";


function isValidParanthis(s){
  let map={"{":"}","(":")","[":"]"}
  let stack=[]
  for(let i=0;i<s.length;i++ ){
    if(map[s[i]]){
      stack.push(s[i])
    }else{
      if(map[stack.pop()]!==s[i]){
        return false
      }
    }
  }
  return stack.length==0

}
console.log(isValidParanthis(s))