function sortStack(stack) {
  let tempStack = [];
  while (stack.length > 0) {
    let current = stack.pop();
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > current) {
      stack.push(tempStack.pop());
    }
    tempStack.push(current);
  }
  return tempStack;
}
let stack = [3, 1, 4, 2];
let sortedStack = sortStack(stack);
console.log(sortedStack);  