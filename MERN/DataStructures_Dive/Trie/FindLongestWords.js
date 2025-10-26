class Node {
  constructor() {
    this.children = {};
    this.isEnded = false;
  }
}

class LongesTrieFind {
  constructor() {
    this.root = new Node();
  }
  Insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    node.isEnded = true;
  }
  FindLongestString() {
    let longest = "";
    let queue = [[this.root, ""]];
    while (queue.length) {
      const [node, word] = queue.shift();
      if (node.isEnded && word.length > longest.length) {
        longest = word;
      }
      for (let char in node.children) {
        queue.push([node.children[char], word + char]);
      }
    }
    return longest
  }
}
