class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  //Add values in List

  Add(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // O(n)
  Insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    const node = new Node(value);
    if (index == 0) {
      this.head = node;
      this.size++;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  RemoveIndexNode(index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid Inex");
      return;
    }
    let removeNode;
    if (index == 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      if (prev.next) {
        removeNode = prev.next;
        prev.next = removeNode.next;
      }
    }
    this.size--;
    return removeNode.value
  }
  // Reverse the list
  Reverse() {
    let prev = null;
    let curent = this.head;
    while (curent) {
      let next = curent.next;
      curent.next = prev;
      prev = curent;
      curent = next;
    }
    this.head = prev;
  }

  //pirint the values -  O(n)
  Print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let currnt = this.head;
      let listValues = [];
      while (currnt) {
        listValues.push(currnt.value);
        currnt = currnt.next;
      }
      console.log(listValues);
    }
  }
}

let result = new SingleLinkedList();
result.Add(4);
result.Add(6);
result.Add(8);
result.Add(9);
result.Add(2);
result.Print();
result.Reverse();
console.log("reverse______________");
result.Print();
result.Insert(10, 2);
console.log("Insert-after");
result.Print();
result.RemoveIndexNode(4)
console.log('removeIndexNode')
result.Print()
