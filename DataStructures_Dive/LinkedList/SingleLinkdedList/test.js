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
  preppend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        let current=this.head
        while (current.next) {
            current=current.next
        }
        current.next=node

    }
    this.size++
  }
  Reverse(){
    if(this.isEmpty()) return null
    let prev=null
    let curent=this.head
    while (curent) {
        let next=curent.next
        curent.next=prev
        prev=curent
        curent=next
    }
    this.head=prev
  }

  removeMidd(){
    if(this.isEmpty()){
        return null

    }else{
        let slow=this.head
        let fast=this.head
        let prev=null
        while(fast.next&&fast.next.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        prev.next=slow.next
        this.size--

    }
  }
  // remove(index)
  removeIndex(index) {
    let removevalue;
    if (this.isEmpty()) {
      return null;
    } else if (index == 0) {
      removevalue = this.head.value;
      this.head = this.head.next;
      this.size--;
      return removevalue;
    } else {
      let current = this.head;
      for (let i = 1; i < index - 1; i++) {
        current = current.next;
      }
      removevalue = current.next;
      current.next = removevalue.next;
      this.size--;
      return removevalue.value;
    }
  }
  Insert(value,index){
    const node=new Node(value)
    if(index<0||index>this.size){
        console.log('Invalid Index')
        return
    }
    if(index==0){
        this.head=node
        this.size++
    }else{
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.size++
    }
  }
  removeDuplicate(){
    if(this.isEmpty()){
        return null
    }else{
       let current=this.head
       let prev=null
       let see={}
       while (current) {
        if(see[current.value]){
            prev.next=current.next
            this.size--

        }else{
            see[current.value]=true
            prev=current
        }
        current=current.next
       }
    }
  }

  sort(){
    if(!this.head&&!this.head.next){
        return null
    }else{
        let swapped,curent
        do{
            swapped=false,
            curent=this.head
            while (curent.next) {
                if(curent.value>curent.next.value){
                    let temp=curent.value
                    curent.value=curent.next.value
                    curent.next.value=temp
                    swapped=true
                }
                curent=curent.next
            }
        }while (swapped) 
            
        
    }
  }
  //removevalue(value){}
  removeValue(value){
    if(this.isEmpty()) return null

    if(this.head.value==value){
        this.head=this.head.next
        this.size--

    }else{
        let current=this.head
        while (current.next&&current.next.value!==value) {
            current=current.next
        }
        if(current.next){
            let removeval=current.next
            current.next=removeval.next
            this.size--
            return removeval.value
        }
    }
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
  isCircular(){
    if(this.isEmpty()){
      return false
    }
    let slow=this.head
    let fast=this.head
    while (fast&&fast.next) {
        slow=slow.next
        fast=fast.next
        if(slow==fast){
            return true
        }
    }
    return false
  }
}
const list = new LinkedList();

console.log("Is list empty?", list.isEmpty()); // true

// Adding elements to the linked list
list.preppend(10); // List: [10]
list.preppend(20); // List: [20, 10]
list.preppend(20); // List: [20, 10]
list.append(30); // List: [20, 10, 30]
list.append(30); // List: [20, 10, 30]
list.append(40); // List: [20, 10, 30, 40]
list.append(40); 
// List: [20, 10, 30, 40]

console.log("After adding elements:");
list.Print(); // Output: [20, 10, 30, 40]

// Removing element by index
const removedIndex = list.removeIndex(2); // Removes 30
console.log("Removed value by index:", removedIndex);
console.log("After removing element at index 2:");
list.Print(); // Output: [20, 10, 40]

// Removing element by value
list.removeValue(10); // Removes 10
console.log("After removing value 10:");
// list.removeMidd()
// list.removeDuplicate()
list.Insert(32,3)
list.sort()
list.Reverse()
list.Print(); // Output: [20, 40]

// Checking if the list is empty
console.log("Is list empty?", list.isEmpty()); // false
