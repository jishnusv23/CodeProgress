class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
           this.insertValue(this.root,node)
        }
    }
    insertValue(root,node){
        const queue=[root]
        while (queue.length>0) {
            
            const current=queue.shift()
            if(node.value<root.value){
                if (current.left == null) {
                  current.left = node;
                  return
                } else {
                  queue.push(current.left);
                }
            }else{
                if (current.right == null) {
                  current.right = node;
                  return
                } else {
                  queue.push(current.right)
                }
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    //sorted way to print the elements we can use 
    inOrder(root){
        if(root){
           this.inOrder(root.left)
           console.log(root.value)
           this.inOrder(root.right)


        }
    }
    collecteValues(root,values=[]){
        if(root){
            this.collecteValues(root.left,values)
            values.push(root.value) 
            this.collecteValues(root.right,values)
        }
        return values
    }
    findSecondAndLargest(root){
        if(!this.root) return null

        const elments=this.collecteValues(root)
        console.log("🚀 ~ file: tes.js:75 ~ BinaryTree ~ findSecondAndLargest ~ elments:", elments)
        let secondSmalleset=elments[1]
        let secondLargest=elments[elments.length-2]
        return {secondLargest,secondSmalleset}
    }

}
const tree = new BinaryTree();

// Inserting nodes
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);
tree.insert(8)
console.log(tree.findSecondAndLargest(tree.root));
// tree.inOrder(tree.root)