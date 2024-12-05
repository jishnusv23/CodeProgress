class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
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
      this.insertValue(this.root, node);
    }
  }
  insertValue(root, node) {
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertValue(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertValue(root.right, node);
      }
    }
  }
  preOrder(root) {
    if (!root) return;
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  inOrder(root) {
    if (!root) return null;

    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }
  postOrder(root) {
    if (!root) return null;
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }
  levelOrder() {
    let queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  height(root) {
    if (!root) return 0;

    let left = this.height(root.left);
    let right = this.height(root.right);
    return Math.max(left, right) + 1;
  }
  min(root) {
    if (!root.left) return root.value;

   return this.min(root.left);
  }
  delete(value) {
    this.root = this.deleteValue(this.root, value);
  }
  deleteValue(root, value) {
    if (root == null) return;

    if (value < root.value) {
      root.left = this.deleteValue(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteValue(root.right, value);
    } else {
      if (!root.right && !root.left) {
        return null;
      }
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      root.value = this.min(root.right);
      root.right = this.deleteValue(root.right, root.value);
    }
    return root;
  }

  KthLargest(root, k) {
    if (!root) return -1;
    let count = 0;
    let result;

    function DSF(node) {
      if (!node) return;
      DSF(node.right);
      count++;

      if (count == k) {
        result = node.value;
        return;
      }
      DSF(node.left);
    }
    DSF(root);
    return result;
  }
  isValidBST(root, min = null, max = null) {
    if (!root) return true;

    if (
      (min !== null && root.value <= min) ||
      (max !== null && root.value >= max)
    ) {
      return false;
    }

    return (
      this.isValidBST(root.left, min, root.value) &&
      this.isValidBST(root.right, root.value, max)
    );
  }
  CountLeafNode(root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    return this.CountLeafNode(root.left) + this.CountLeafNode(root.right);
  }
  findLCA(root, num1, num2) {
    if (!root) return null;

    if (num1 < root.value && root.value > num2) {
      return this.findLCA(root.left, num1, num2);
    }
    if (num1 > root.value && root.value > num2) {
      return this.findLCA(root.right, num1, num2);
    }
    return root.value
  }
  printLeafNode(root){
    if(!root) return

    if(!root.left&&!root.right){
      console.log(root.value)
      return
    }

    if(root.left) this.printLeafNode(root.left)
    if(root.right) this.printLeafNode(root.right)
  }
}
const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);



// console.log(bst.findLCA(bst.root,5,15))
// console.log(bst.CountLeafNode(bst.root));
bst.inOrder(bst.root);
// bst.printLeafNode(bst.root)

// console.log(bst.isValidBST(bst.root));

// console.log(bst.height(bst.root))
// console.log(bst.KthLargest(bst.root, 3));

console.log("----------------------");
// console.log("-----------------------");
// bst.delete(14);
// bst.inOrder(bst.root);
// console.log("---------------------");
// bst.postOrder(bst.root);
