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


// class Stack {
//   constructor() {
//     this.itme = [];
//   }
//   push(value) {
//     this.itme.push(value);
//   }
//   isEmpty() {
//     return this.itme.length === 0;
//   }
//   pop() {
//     if (this.isEmpty()) {
//       console.log("isempty");
//     } else {
//       return this.itme.pop();
//     }
//   }
//   Max() {
//     let max = 0;
//     if (this.isEmpty()) return null;
//     for (let i = 0; i < this.itme.length; i++) {
//       if (this.itme[i] > max) {
//         max = this.itme[i];
//       }
//     }
//     return max;
//   }
//   RemoveMid() {
//     if (this.isEmpty()) return null;
//     let mid = Math.floor(this.itme.length / 2);
//     let temp = [];
//     let i = 0;
//     while (i < mid) {
//       temp.push(this.itme.pop());
//       i++;
//     }
//     let rm = this.itme.pop();
//     while (temp.length) {
//       this.itme.push(temp.pop());
//     }
//     return rm;
//   }
//   Reverse() {
//     let newstack = [];
//     while (this.itme.length) {
//       newstack.push(this.itme.pop());
//     }
//     return newstack;
//   }
// }
// const stack = new Stack();
// stack.push(10);
// stack.push(100);
// stack.push(101);
// stack.push(1001);
// stack.push(1002);
// console.log(stack.Reverse());
