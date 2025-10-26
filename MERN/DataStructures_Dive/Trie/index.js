class TrieNode {
  constructor() {
    this.children = {};
    this.isEnded = false;
  }
}

class IndexTrie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let curnt = this.root;
    for (let char of word) {
      if (!curnt.children[char]) {
        curnt.children[char] = new TrieNode();
      }
      curnt = curnt.children[char];
    }
    curnt.isEnded = true;
  }
  Search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEnded;
  }
  Print(node = this.root, PrintValue = "", result = []) {
    if (node.isEnded) {
      result.push(PrintValue);
    }
    for (let char in node.children) {
      this.Print(node.children[char], PrintValue + char, result);
    }
    return result;
  }
  Delete(word) {
    this.RecursiveDeletion(this.root, word, 0);
  }
  RecursiveDeletion(node, word, i) {
    if (i == word.length) {
      if (!node.isEnded) {
        return;
      }
      node.isEnded = false;
      return;
    }
    let char = word[i];
    if (!node.children[char]) {
      return;
    }
    this.RecursiveDeletion(node.children[char], word, i + 1);

    if (
      Object.keys(node.children[char].children).length == 0 &&
      !node.children[char].isEnded
    ) {
      delete node.children[char];
    }
  }
}
const trie = new IndexTrie();
trie.insert("apple");
trie.insert("banana");
trie.insert("application");
console.log(trie.Print());
trie.Delete('apple')
console.log(trie.Print());
// console.log(trie.Search('apple'))
