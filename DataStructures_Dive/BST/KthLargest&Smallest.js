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
      this.InsertNode(this.root, node);
    }
  }
  InsertNode(root, node) {
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.InsertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.InsertNode(root.right, node);
      }
    }
  }
  levelOrder() {
    if (this.isEmpty()) return null;

    let queue = [this.root];
    while (queue.length) {
      let curent = queue.shift();
      console.log(curent.value);
      if (curent.left) {
        queue.push(curent.left);
      }
      if (curent.right) {
        queue.push(curent.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
}
const bt = new BinarySearchTree();
bt.insert(2);
bt.insert(5);
bt.insert(1);
bt.insert(6);
bt.insert(3);
bt.insert(8);
bt.insert(7);

//using In-order-Travesal

function KthSmallest(root, k) {
  let count = 0;
  let res = null;

  function DFS(node) {
    if (!node) return;

    DFS(node.left);
    count++;
    if (count == k) {
      res = node.value;
      return;
    }
    DFS(node.right);
  }
  DFS(root);
  return res;
}
console.log(KthSmallest(bt.root, 2));



function KthLargest(root, k) {
  let count = 0;
  let res = null;

  function DFS(node) {
    if (!node) return;

    DFS(node.right);
    count++;
    if (count == k) {
      res = node.value;
      return;
    }
    DFS(node.left);
  }
  DFS(root);
  return res;
}
console.log(KthLargest(bt.root, 2));
