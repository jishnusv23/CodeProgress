let s = ")()()(";
//output =4

let longestValidParenthese=(s)=>{
    let count=0
    let stack=[-1]
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            stack.push(i)
        }else{
            stack.pop()
            if(stack.length==0){
                stack.push(i)
            }else{
                console.log(stack)
                console.log(i-stack[stack.length - 1],'=====');
                count=Math.max(count,i-stack[stack.length-1])
            }
        }
    }
    return count 
}
console.log(longestValidParenthese(s))