class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class ReverseLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    this.size === 0;
  }
  
  Reverse() {
    if (this.isEmpty()) {
      console.log("isEmpty ");
    } else {
      let current = this.head;
      let prev = null;
      while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  }
  Display() {
    if (this.isEmpty()) {
      console.log("isEmpty");
    } else {
      let list = [];
      let curent = this.head;
      while (curent) {
        list.push(curent.value);
        curent = curent.next;
      }
      console.log(list);
    }
  }
}
// const list=new ReverseLinkedList()
const values = [10, 12, 13, 14, 15, 16, 17];
const list = new ReverseLinkedList(values);
list.Display(); // Output the original list
list.Reverse(); // Reverse the list
list.Display(); 