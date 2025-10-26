//practicing circular linkedlist

  
  // function isCircurlar() {
  //   if (this.isEmpty()) {
  //     console.log("return null is not circular");
  //   } else {
  //     let slow = this.head;
  //     let fast = this.head;
  //     while (fast && fast.next) {
  //       slow = slow.next;
  //       fast = fast.next.next;
  //       if (slow === fast) {
  //         return true;
  //       }
  //     }
  //   }
  //   return true;
  // }


  class Node{
    constructor(value){
      this.value=value
      this.next=null
      this.prev=null
    }
  }

  class circular{
    constructor(){
      this.head=null
      this.tail=null
      this.size=0
    }
    isEmpt(){
      return this.size==0
    }
    append(value){
      const node=new Node(value)
      if(this.isEmpt()){
        this.head=node
        this.tail=node
        node.next=this.head
      }else{
        node.next=this.head
        this.tail.next=node
        this.tail=node
      }
      this.size++
    }
    isCircular(){
      if(this.isEmpt()) return false

      let slow=this.head
      let fast=this.head
      while (fast&&fast.next) {
        slow=slow.next
        fast=fast.next.next
        if(slow==fast){
          return true
        }
      }
      return false

    }    

  }

  const list = new circular();

// Add some elements to the circular linked list
list.append(10);
list.append(20);
list.append(30);
list.append(40);

// Check if the list is circular
console.log("Is the list circular?", list.isCircular()); // Output: true