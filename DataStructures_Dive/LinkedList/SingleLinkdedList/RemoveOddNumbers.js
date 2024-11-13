class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  RemoveOdd() {
    if (this.isEmpty()) {
      console.log("remove is not working empty array ");
    }

    while (this.head && this.head.value % 2 !== 0) {
      this.head = this.head.next;
      this.size--;
    }

    let current = this.head;
    while (current && current.next) {
      if (current.next.value % 2 !== 0) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }
  }
  
  Print() {
    if (this.isEmpty()) {
      console.log("IsEmpty");
      return;
    } else {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      console.log(result);
    }
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(11);
list.prepend(13);
list.prepend(16);
list.prepend(18);
list.prepend(121);
list.prepend(17);

list.Print();
list.RemoveOdd();
list.Print();
