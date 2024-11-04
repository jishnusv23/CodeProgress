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
    return this.item.shift()
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


// class Queue {
//   constructor() {
//     this.item = [];
//   }
//   enqueue(value) {
//     this.item.push(value);
//   }
//   isEmpty() {
//     return this.item.length === 0;
//   }
//   dequeu() {
//     if (this.isEmpty()) return null;

//     return this.item.shift();
//   }
//   Print() {
//     if (this.isEmpty()) {
//       console.log("empty");
//       return null;
//     }
//     console.log(this.item.toString());
//   }
//   rmMidd() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     let re = [];
//     let i = 0;
//     let mid = Math.floor(this.item.length / 2);
//     while (i < mid) {
//       re.push(this.dequeu());
//       i++;
//     }
//     let rm = this.dequeu();

//     while (this.item.length) {
//       re.push(this.dequeu());
//     }
//     this.item = re;
//     re = [];
//     return rm;
//   }
// }

// const qu = new Queue();

// qu.enqueue(1);
// qu.enqueue(2);
// qu.enqueue(3);
// qu.enqueue(4);
// qu.enqueue(5);
// console.log(qu.rmMidd());
