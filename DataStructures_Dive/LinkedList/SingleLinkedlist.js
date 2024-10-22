class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  //Add values in List

  Add(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // Reverse the list
  Reverse(){
        let prev=null
        let curent=this.head
        while(curent){
            let next=curent.next
            curent.next=prev
            prev=curent
            curent=next

        }
       this.head=prev
  }

  //pirint the values 
  Print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let currnt = this.head;
      let listValues = [];
      while (currnt) {
        listValues.push(currnt.value);
        currnt = currnt.next;
      }
      console.log(listValues);
    }
  }
}

let result = new SingleLinkedList()
result.Add(4)
result.Add(6)
result.Add(8)
result.Add(9)
result.Add(2)
result.Print()
result.Reverse()
result.Print()
