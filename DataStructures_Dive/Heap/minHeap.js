class MinHeap{
    constructor(){
        this.heap=[]

    }
    isEmpty(){
        return this.heap.length===0
    }
    swap(index1,index2){
        const temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp

    }


    addValues(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1
        while (this.hasParent(index)&&this.heap[this.getParentIndex(index)]>this.heap[index]) {
                this.swap(this.getParentIndex(index),index)
                index=this.getParentIndex(index)
        }
    }
    heapifyDown(){
        let index=0
        while(this.hasLeftChild(index)){
            let smallestIndex=this.getLeftChildIndex(index)
            if(this.hasRightChild(index)&&this.heap[this.getRightChildIndex(index)]<this.heap[this.getLeftChildIndex(index)]){
                smallestIndex=this.getRightChildIndex(index)
            }
            if(this.heap[index]<this.heap[smallestIndex]){
                break
            }
            this.swap(smallestIndex,index)
            index=smallestIndex
        }
    }
    remove(){
        if(this.isEmpty()) return 

        const item=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return item
    }
    hasParent(index){
        return index>0
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    Dispaly(){
        console.log(this.heap)
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index)<this.heap.length
    }
    getLeftChildIndex(index){
        return 2*index+1
    }
    hasRightChild(index){
        return this.getRightChildIndex(index)<this.heap.length
    }
    getRightChildIndex(index){
        return 2*index+2
    }
}
const heap = new MinHeap();

// Adding values to the heap
heap.addValues(10);
heap.addValues(5);
heap.addValues(20);
heap.addValues(3);
heap.addValues(7);
heap.addValues(15);
heap.addValues(2);

// Displaying the heap
heap.Dispaly();
console.log(heap.remove())
heap.Dispaly();

