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
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  Print() {
    if (this.isEmpty()) {
      console.log("Empty list");
    } else {
      let currentvalues = [];
      let prev = this.head;
      while (prev) {
        currentvalues.push(prev.value);
        prev = prev.next;
      }
      console.log(currentvalues);
    }
  }
}

const li = new LinkedList();
li.append(2);
li.append(3);
li.append(5);

const li1 = new LinkedList();
li1.append(1);
li1.append(2);
li1.append(5);
li1.append(7);

li.Print(); 
li1.Print(); 

function MergeList(li, li1) {
  let l1 = li.head;
  let l2 = li1.head;
  const mergeList = new LinkedList();

  while (l1 || l2) {
    if (l1 && (!l2 || l1.value < l2.value)) {
      mergeList.append(l1.value);
      l1 = l1.next;
    } else if (l2) {
      mergeList.append(l2.value);
      l2 = l2.next;
    }
  }

  return mergeList;
}

const mergedList = MergeList(li, li1);
mergedList.Print();
