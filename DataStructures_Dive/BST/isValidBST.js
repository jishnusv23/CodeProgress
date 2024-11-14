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
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}
const bt = new BinaryTree();

bt.insert(46);
bt.insert(21);
bt.insert(74);
bt.insert(12);
bt.insert(34);
bt.insert(94);
//          46
//        /    \
//      21      74
//     /  \        \
//   12   34       94



bt.levelOrder();

//height of the BST
function height(root) {
  if (!root) return 0;
  let left = height(root.left);
  let right = height(root.right);
  return Math.max(left, right) + 1;
}

//isValidBST
function isValidBST(root, min = null, max = null) {
  if (!root) return true;

  if (
    (min != null && root.value <= min) ||
    (max != null && root.value >= max)
  ) {
    return false;
  }
  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
}

console.log("is it a valid bst --->  ", isValidBST(bt.root));

function isBalanced(root) {
  if (!root) return true;
  let leftheight = height(root.left);
  let rightheight = height(root.right);
  return (
    Math.abs(leftheight - rightheight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}
console.log('is it balanced',isBalanced(bt.root));