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
  addnewValue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  getMiddle(head) {
    if (!head) return head;
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.value)
    return slow;
  }
  mearge(left, right) {
    let dummyNode = new Node(0);
    let tail = dummyNode;
    while (left && right) {
      if (left.value < right.value) {
        tail.next = left;
        left = left.next;
      } else {
        tail.next = right;
        right = right.next;
      }
      tail = tail.next;
    }
    if (left) tail.next = left;
    if (right) tail.next = right;
    return dummyNode.next;
  }

  meargeSort(head) {
    if (!head || !head.next) return head;
    let midd = this.getMiddle(head);
    let nextHead = midd.next;
    midd.next = null;
    const left = this.meargeSort(head);
    const right = this.meargeSort(nextHead);
    return this.mearge(left, right);
  }
  sort() {  
    this.head = this.meargeSort(this.head);
  }
  Print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result);
  }
}

const list = new LinkedList();
list.addnewValue(34);
list.addnewValue(40);
list.addnewValue(90);
list.addnewValue(93);
list.addnewValue(45);
list.Print();
list.sort()
list.Print();
