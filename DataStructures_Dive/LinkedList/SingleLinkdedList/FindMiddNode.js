
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

 
  isEmpty() {
    return this.head === null;
  }

  
  FindMiddle() {
    if (this.isEmpty()) {
      console.log("empty");
      return null;
    } else {
      let fast = this.head;
      let slow = this.head;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

const middleNode = list.FindMiddle();
console.log("Middle Node:", middleNode ? middleNode.value : "No middle node");
