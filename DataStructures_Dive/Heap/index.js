
class HeapTest {
  constructor() {
    this.heap = [];
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  Peek() {
    if (this.isEmpty()) return null;
    return this.heap[0];
  }
  //heapifiy up for using the parent index and hasparent
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  //writing the heapifyDwon
  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallestIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.heap[this.getRightChildIndex(index)] <
          this.heap[this.getLeftChildIndex(index)]
      ) {
        smallestIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] <= this.heap[smallestIndex]) {
        break;
      } else {
        this.swap(index, smallestIndex);
      }
      index = smallestIndex;
    }
  }
  AddNew(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  //remove the smallest element
  remove() {
    if (this.isEmpty()) return null;
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }
  removeValue(value) {
    const index = this.heap.findIndex((item) => item === value);
    if (index == -1) return null;

    this.swap(index, this.heap.length - 1);
    let removed = this.heap.pop();
    this.heapifyDown();
    return removed;
  }

  display() {
    console.log(this.heap);
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
}

let heap = new HeapTest();

// Adding elements
heap.AddNew(10);
heap.AddNew(5);
heap.AddNew(15);
heap.AddNew(3);
heap.AddNew(8);
heap.AddNew(2);

// Displaying heap
heap.display(); // Output: [2,3, 5, 15, 10, 8]
console.log(heap.Peek());
// console.log(heap.remove());
console.log(heap.removeValue(3));
heap.display();
