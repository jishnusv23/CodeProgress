class Node {
  constructor(value) {
    this.value = value;
    this.left = value;
    this.right = value;
  }
}

class BreadthFirstBST {
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
      if (root.left) {
        root.left = node;
      } else {
        this.InsertNode(root.left, node);
      }
    } else {
      if (root.right) {
        root.right = node;
      } else {
        this.InsertNode(root.right, node);
      }
    }
  }
  //Breadth First following in Level order
  LevelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      const curent = queue.shift();
      console.log(curent.value);
      if (curent.left) {
        queue.push(curent.left);
      } 
      if(curent.right) {
        queue.push(curent.right);
      }
    }
  }
}

const bst=new BreadthFirstBST()
bst.Insert(450)
bst.Insert(40)
bst.Insert(48)
bst.Insert(42)
bst.LevelOrder()