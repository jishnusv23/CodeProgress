class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ReverseLinkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    this.size === 0;
  }
  insert(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
    }else{
      node.next=this.head
      this.head=node
    }
    this.size++
  }
  reverse(){
    let current=this.head
    let prev=null
    while(current){
      let next=current.next
      current.next=prev
      prev=current
      current=next
    }
    this.head=prev
  }
  Display(){
    let current=this.head
    let result=[]
    while(current){
      result.push(current.value)
      current=current.next
    }
    console.log(result)
  }

}
const list=new ReverseLinkedlist()
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
list.insert(7)
list.Display()
list.reverse()
list.Display()
