class Node {
  constructor() {
    this.children = {};
    this.isEnded = false;
  }
}

class AutoCompleteTrie {
  constructor() {
    this.root = new Node();
  }
  AutoComplete(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let list = [];
    this.CollectWords(node, word, list);
    return list;
  }
  CollectWords(node, word, list) {
    if (node.isEnded) {
      list.push(word);
    }
    for (let char in node.children) {
      this.CollectWords(node.children[char], word+char, list);
    }
  }
}

const trie = new AutoCompleteTrie()