class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {  
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  InOrder(root) {
    if (root) {
      this.InOrder(root.left);
      console.log(root.value);
      this.InOrder(root.right);
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root){
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right)
    }
  }
  height(root){
    if(root==null){
      return 0
    }
    let left=this.height(root.left)
    let right=this.height(root.right)

    return Math.max(left,right)+1
  }

  //delete BST node
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  //Recursively delete Node
  deleteNode(root, value) {
    if (root == null) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right,root.value);
    }
    return root
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.InOrder(tree.root);
console.log('--------------------');
// console.log(tree.Search(tree.root, 5));
tree.delete(3);
tree.InOrder(tree.root);
// console.log('first')
// console.log(tree.height(tree.root))