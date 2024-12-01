class Heap{
  constructor(){
    this.heap=[]
  }
  swap(index1,index2){
    let temp=this.heap[index1]
    this.heap[index1]=this.heap[index2]
    this.heap[index2]=temp
  }
  Insert(value){
    this.heap.push(value)
    this.heapifyUp()
  }
  heapifyUp(){
    let index=this.heap.length-1

    while(this.hasParent(index)&&this.heap[this.getParentIndex(index)]>this.heap[index]){
      this.swap(this.getParentIndex(index),index)
      index=this.getParentIndex(index)
    }
    
  }
  hasParent(index){
    return index>0
  }
  getParentIndex(index){
    return Math.floor((index-1)/2)
  }
  display(){
    console.log(this.heap)
  }
  convertMax(){
    let n=this.heap.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
      this.MaxHeap(i)
    }
  }
  MaxHeap(i){
    let largest=i
    let left=2*i+1
    let right=2*i+2
    if(left<this.heap.length&&this.heap[left]>this.heap[largest]){
      largest=left
    }
    if(right<this.heap.length&&this.heap[right]>this.heap[largest]){
      largest=right
    }
    if(largest!==i){
      this.swap(i,largest)
      this.MaxHeap(largest)
    }
  }
}
const heap= new Heap()
heap.Insert(34)
heap.Insert(44)
heap.Insert(54)
heap.Insert(54)
heap.Insert(64)

heap.display()
heap.convertMax()
heap.display()