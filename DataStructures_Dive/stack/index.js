class Stack {
  constructor() {
    this.item = [];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  push(element) {
    this.item.push(element);
    this.size++;
    return this.size - 1;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("isEmpty");
    } else {
      this.size--;
      return this.item.pop();
    }
  }
  peek() {
    return this.item[this.size - 1];
  }
  print() {
    if (this.isEmpty()) {
      console.log("empty stack");
      return 

    } else {
      console.log(this.item.toString());
    }
  }
}
const stack = new Stack();
stack.push(10);
stack.push(100);
stack.push(1001);
stack.push(1002);
stack.print();

console.log(stack.pop());

stack.print();

console.log(stack.peek());