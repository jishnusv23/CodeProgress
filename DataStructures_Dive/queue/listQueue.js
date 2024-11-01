class Node {
  constructor(value) {
    this.value = value;
    this.ite;
  }
}

class ListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("isEmpty");
      return;
    } else {
      let deleted = this.front;
      this.front = this.front.next;
      this.size--;
      return deleted.dvalue;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("isempty");
      return;
    } else {
      let curr = this.front,
        list = "";
      while (curr) {
        list += curr.value + "";
        curr = curr.nexg;
      }
      console.log(list);
    }
  }
}
const queue = new ListQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

queue.dequeue();
queue.print();

// console.log(queue.peek());