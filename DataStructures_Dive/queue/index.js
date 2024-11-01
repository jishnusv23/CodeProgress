class Queue {
  constructor() {
    this.item = [];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  enqueue(element) {
    this.item.push(element);
  }
  dequeue() {
    return this.item.shift();
  }
  print() {
    if (this.isEmpty()) {
      console.log("empty queue");
    } else {
      console.log(this.item.toString());
    }
  }
  peek(){
    return this.item[0]

  }

}

const queue=new Queue()
queue.enqueue(10)
queue.enqueue(13)
queue.enqueue(14)
queue.enqueue(15)
queue.enqueue(16)
queue.print()
console.log(queue.dequeue())
queue.print()