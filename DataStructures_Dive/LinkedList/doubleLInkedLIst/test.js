class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null

    }
}

class DoubleTest{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0

    }
    isEmpty(){
        return this.size===0
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.prev=this.head
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
}