class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CheckPalindrome {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
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
  // isPalindrome() {
  //   if (this.isEmpty() || !this.head) {
  //     return true;
  //   }

  //   //find the middle

  //   let slow = this.head;
  //   let fast = this.head;
  //   while (fast.next && fast.next.next) {
  //     slow = slow.next;
  //     fast = fast.next.next;
  //   }

  //   // reverse the half of the list
  //   let prev = null;
  //   let current = slow;
  //   while (current) {
  //     let next = current.next;
  //     current.next = prev;
  //     prev = current;
  //     current = next;
  //   }

  //   //compare the first half and second half

  //   let firsthalf = this.head;
  //   let secondhalf = prev;
  //   let isPalindrome = true;
  //   while (secondhalf) {
  //     if (firsthalf.value !== secondhalf.value) {
  //       isPalindrome = false;
  //       break;
  //     }
  //     firsthalf = firsthalf.next;
  //     secondhalf = secondhalf.next;
  //   }
  //   return isPalindrome
  // }
  isPalindrome(){
    if(this.isEmpty()){
      return false
    }

    let slow=this.head
    let fast=this.head
    while(fast.next&&fast.next.next){
      slow=slow.next
      fast=fast.next.next
    }

    let prev=null
    let current=slow
    while (current) {
      let next=current.next
      current.next=prev
      prev=current
      current=next
    }
    let firsthalf=this.head
    let secondhalf=prev
    while (secondhalf) {
      if(firsthalf.value!==secondhalf.value){
        return false
        
      }
      firsthalf=firsthalf.next
      secondhalf=secondhalf.next
    }
    return true

  }
}
let list = new CheckPalindrome();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(2);
list.prepend(1);

console.log(list.isPalindrome()); // Output: true