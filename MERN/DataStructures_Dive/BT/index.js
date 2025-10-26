class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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
      this.InsertNode(this.root, node);
    }
  }
  InsertNode(root, node) {
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.left == null) {
        current.left = node;
        return;
      } else {
        queue.push(current.left);
      }
      if (current.right == null) {
        current.right = node;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  colletctValues(root, values = []) {
    if (root) {
        values.push(root.value)
      this.colletctValues(root.left, values);
      this.colletctValues(root.right, values);
    }
    return values;
  }
  findSecondSmallestAndLargest() {
    if (!this.root) {
      return null;
    }
    const values = this.colletctValues(this.root);
    console.log(
      "🚀 ~ file: index.js:62 ~ BinaryTree ~ findSecondSmallestAndLargest ~ values:",
      values
    );
    const uniqueValues = [...new Set(values)].sort((a, b) => a - b);
    if (uniqueValues.length < 2) {
      return null;
    }
    const secondSmallest=uniqueValues[1]
    const secondLargest=uniqueValues[uniqueValues.length-2]
    return {secondLargest,secondSmallest}
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
console.log("Pre-order traversal:");
tree.preOrder(tree.root);
const result = tree.findSecondSmallestAndLargest();
if (result) {
  console.log("Second Smallest:", result.secondSmallest); 
  console.log("Second Largest:", result.secondLargest); 
} else {
  console.log("Not enough unique values in the tree");
}