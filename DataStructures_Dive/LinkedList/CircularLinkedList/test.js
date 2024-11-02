//practicing circular linkedlist

  
  function isCircurlar() {
    if (this.isEmpty()) {
      console.log("return null is not circular");
    } else {
      let slow = this.head;
      let fast = this.head;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
          return true;
        }
      }
    }
    return true;
  }
