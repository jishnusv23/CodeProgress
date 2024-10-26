class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.next = this.head;
    } else {
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  isCircurlar(){
    if(this.isEmpty()){
        console.log('sorry the list is empty')
        return false

    }else{
        let slow=this.head
        let fast=this.head

        while(fast&&fast.next){
            slow=slow.next
            fast=fast.next.next
            if(slow==fast){
                return true
            }
        }
    }
    return false

  }
  Print() {
    if (this.isEmpty()) {
      console.log("isEmpty List");
      return;
    } else {
      let current = this.head;
      let values = [];
      do {
        values.push(current.value)
        current=current.next
      } while (current !== this.head);
      console.log(values);
    }
  }
}
const list = new CircularLinkedList();
list.append(0);
list.append(5);
list.append(50);
list.append(500);
list.append(5000);
list.append(50000);
list.Print();
console.log(list.isCircurlar())
