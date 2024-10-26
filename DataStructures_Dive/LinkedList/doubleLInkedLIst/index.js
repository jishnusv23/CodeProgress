class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  RemoveDuplicate() {
    if (this.isEmpty()) {
      console.log("is Empty");
      return;
    }

    let curr = this.head;
    const see = {};
    while (curr) {
      if (see[curr.value]) {
        curr.prev.next = curr.next;
        if (curr.next) {
          curr.next.prev = curr.prev;
        } else {
          this.tail = curr.prev;
        }
        this.size--;
      }else{
        see[curr.value]=true
      }
      curr=curr.next
    }
  }
  Print() {
    if (this.isEmpty()) {
      console.log("isEmpty list");
      return;
    } else {
      let vlaues = [];
      let curent = this.head;
      while (curent) {
        vlaues.push(curent.value);
        curent = curent.next;
      }
      console.log(vlaues);
    }
  }
}

const list = new DoublyLinkedList();
list.append(4);
list.append(6);
list.append(3);
list.append(2);
list.append(5);
list.append(4);
list.append(41);

list.append(6);
list.prepend(1);

list.Print();
list.RemoveDuplicate()
list.Print();
