//stack

class Stack {
  constructor() {
    this.itmes = [];
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  push(value) {
    this.itmes.push(value);
    this.size++;
  }
  maxEle() {
    if (this.isEmpty()) return null;

    let max = 0;
    for (let i = 0; i < this.itmes.length; i++) {
      if (this.itmes[i] > max) {
        max = this.itmes[i];
      }
    }
    return max;
  }
  removeMid() {
    if (this.isEmpty()) return null;

    let tempstack = [];
    let midd = Math.floor(this.itmes.length / 2);
    let i = 0;
    while (i < midd) {
      tempstack.push(this.itmes.pop());
      i++;
    }
    let removeElem = this.itmes.pop();
    while(tempstack.length>0){
        this.itmes.push(tempstack.pop())
    }
    return removeElem
  }
  reverse(){
    if(this.isEmpty()) return null
    let tempstack=[]
    while(this.itmes.length>0){
        tempstack.push(this.itmes.pop())
    }
   return this.itmes=tempstack
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Empty stack");
      return null;
    }
    return this.itmes.pop();
  }
  print() {
    if (this.isEmpty()) {
      console.log("Empty Stack");
    } else {
      console.log(this.itmes);
    }
  }
}

const stk = new Stack();
stk.push(1);
stk.push(2);
stk.push(3);
stk.push(4);
stk.push(5);
stk.push(6);
stk.push(7);
// stk.pop();
console.log(stk.reverse());
stk.print();
