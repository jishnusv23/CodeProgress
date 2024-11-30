//TOI TEST

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BSTTOI {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  Insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.InsertNode(this.root, node);
    }
  }
  InsertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.InsertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.InsertNode(root.right, node);
      }
    }
  }
  min(root){
    if(!root.left) return root.value
     return this.min(root.left)
  }
  //delete
  delete(value){
    this.root=this.DeleteValue(this.root,value)
  }
  DeleteValue(root,value){
    if(!root) return root

    if(value<root.value){
        root.left=this.DeleteValue(root.left,value)
    }else if(value>root.value){
        root.right=this.DeleteValue(root.right,value)
    }else{
        if(!root.left&&!root.right) return null

        if(!root.left){
            return root.right
        }
        if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.DeleteValue(root.right,root.node)
    }
    return root
  }

  //BFS
  levelOrder(){
    let queue=[this.root]
    while(queue.length){
        const current=queue.shift()
        console.log(current.value)
        if(current.left){
            queue.push(current.left)
        }
        if(current.right){
            queue.push(current.right)
        }
    }
  }

  //DFS


  PreOrder(root) {
    if (!root) return root;

    console.log(root.value);
    this.PreOrder(root.left);
    this.PreOrder(root.right);
  }
  InOrder(root) {
    if (!root) return root;
    this.InOrder(root.left);
    console.log(root.value);
    this.InOrder(root.right);
  }
  PostOrder(root) {
    if (!root) return root;
    this.PostOrder(root.left);
    this.PostOrder(root.right);
    console.log(root.value);
  }
}
const bst = new BSTTOI();

bst.Insert(50);
bst.Insert(30);
bst.Insert(70);
bst.Insert(20);
bst.Insert(40);
bst.Insert(60);
bst.Insert(80);


console.log("Pre-order Traversal:");
// bst.PreOrder(bst.root);
bst.levelOrder()
console.log('---------------------------------')
bst.delete(30)
bst.levelOrder()
