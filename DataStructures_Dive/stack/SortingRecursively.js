function insertSorted(stack, element) {
  if (stack.length == 0 || element > stack[stack.length - 1]) {
    stack.push(element);
    return;
  }

  // if the current element smaller then the top,remove the top element
  const temp = stack.pop();

  //recursively call the function to place element in correct position

  insertSorted(stack, element);

  //Once the element is inserted put back to the top element that was removed earlier

  stack.push(temp);
}

function sortStackRecursively(stack) {
  if (stack.length == 0) return;

  // remove the top element  of the stack

  const temp = stack.pop();

  //Recursively  sort the remaining stack
  sortStackRecursively(stack);

  //insert the poped element in to the sorted stack

  insertSorted(stack, temp);
}
const myStack = [34, 3, 31, 98, 92, 23];
console.log("Original Stack:", myStack);

sortStackRecursively(myStack);

console.log("Sorted Stack:", myStack);
