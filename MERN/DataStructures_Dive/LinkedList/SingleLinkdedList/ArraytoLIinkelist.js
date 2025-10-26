class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class ArrayToLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      
      current.next = node;2
    }
    this.size++;
  }
  Print() {
    let curent = this.head;
    let result = [];
    while (curent) {
      result.push(curent.value);
      curent = curent.next;
    }
    console.log(result);
  }
  fromArray(arr) {
    for (let ele of arr) {
      this.append(ele);
    }
  }
}
let array = [10, 20, 30, 40, 50];
let list = new ArrayToLinkedList();
list.fromArray(array);
list.Print();