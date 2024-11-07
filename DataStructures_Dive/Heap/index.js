class Heap {
  constructor() {
    this.arr = [];
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  getMint() {
    return this.arr[0];
  }
  insert(value) {
    this.arr.push(value);
    this.HeapifyUP(this.arr.length);
  }
  HeapifyUP(i) {
    let arr = this.arr;
    while (i > 0) {
      let p = this.parent(i);
      if (arr[p] > arr[i]) {
        [arr[p], arr[i]] = [arr[i], arr[p]];
        i = p;
      } else {
        break;
      }
    }
  }
  delete() {
    const removed = this.arr[0];
    const lastvalue = this.arr.pop();

    if (this.arr.length) {
      this.arr[0] = lastvalue;
      this.HeapifyDown(0);
    }
    return removed;
  }
  HeapifyDown(i) {
    let i = this.left(i);
    let r = this.right(i);
    let smallest = i;
    if (this.arr[l] < this.arr[smallest] && this.arr.length) {
      smallest = l;
    } else if (this.arr[r] < this.arr[smallest] && this.arr.length) {
      smallest = r;
    }

    if (smallest !== i) {
      [this.arr[smallest], this.arr[i]] = [this.arr[i], this.arr[smallest]];
      this.HeapifyDown(smallest);
    }
  }
  displaty() {
    console.log(this.arr);
  }
}
const heap = new Heap();
heap.insert(10);
heap.insert(20);
heap.insert(1);
heap.insert(15);
heap.displaty();
