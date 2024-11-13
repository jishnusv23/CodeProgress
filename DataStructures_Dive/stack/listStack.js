class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("isEmpty");
      return;
    } else {
      const deleted = this.top;
      this.top = this.top.next;
      this.size--
      return deleted.value
    }

  }
  Print(){
    if(this.isEmpty()){
        console.log('Isempty')
    }else{
        let curr=this.top,ele=''
        while(curr){
            ele+=curr.value+" "
            curr=curr.next
        }
        console.log(ele)
    }
  }
}

const stack=new Stack()
stack.push(12)
stack.push(13)
stack.push(14)
stack.push(15)
stack.push(16)
stack.push(17)
stack.Print()
console.log(stack.pop())
stack.Print()