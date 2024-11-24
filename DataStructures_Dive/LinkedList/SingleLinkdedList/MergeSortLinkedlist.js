class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SortLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  Preppend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  getMidd(head) {
    if (!head) return head;
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    // console.log(slow.next)
    return slow;
  }
  merge(left,right){
    let dummynode=new Node(0)
    let tail=dummynode
    while (left&&right) {
        if(left.value<right.value){
            tail.next=left
            left=left.next
        }else{
            tail.next=right
            right=right.next
        }
        tail=tail.next
    }
    if(left) tail.next=left
    if(right) tail.next=right
    return dummynode.next
  }

  mergeSort(head) {
    if (!head || !head.next) return head;

    const midd = this.getMidd(head);
    const nextMidd = midd.next;
    midd.next=null

    let left = this.mergeSort(head);
    let right=this.mergeSort(nextMidd)

    return this.merge(left,right)

  }
  sort() {
    this.head = this.mergeSort(this.head);
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
const list = new SortLinkedList();
list.Preppend(34);
list.Preppend(54);
list.Preppend(6);
list.Preppend(24);
list.Preppend(14);
list.Print()
list.sort()
list.Print()