class MinToMax {
  constructor() {
    this.heap = [];
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  addValue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
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
  display(){
    console.log(this.heap)
  }
  hasParent(index) {
    return index > 0;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index);
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  convertMaxHeap() {
    const n = this.heap.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.MaxHeap(i);
    }
  }
  MaxHeap(i) {
    let largest = i;
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== i) {
      this.swap(i, largest);
      this.MaxHeap(largest);
    }
  }
}
const heap = new MinToMax();

// Adding values to the heap
heap.addValue(10);
heap.addValue(5);
heap.addValue(20);
heap.addValue(3);
heap.addValue(7);
heap.addValue(15);
heap.addValue(2);

// Display the MinHeap
console.log("MinHeap:");
heap.display();

// Convert the MinHeap to MaxHeap
heap.convertMaxHeap();

// Display the MaxHeap
console.log("MaxHeap:");
heap.display();