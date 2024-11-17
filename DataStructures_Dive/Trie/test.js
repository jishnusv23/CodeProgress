class TrieTestNode {
  constructor() {
    this.children = {};
    this.isEnded = false;
  }
}

class TestTrie {
  constructor() {
    this.root = new TrieTestNode();
  }
  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieTestNode();
      }
      current = current.children[char];
    }
    current.isEnded = true;
  }
  Search(word) {
    let node = this.root;

    for (let char of word) {
      if (node.children[char]) {
        return true;
      }
      node = node.children[char];
    }
    return node.isEnded;
  }
  delete(word) {
     this._delete(this.root, word, 0);
  }
  _delete(node, word, i) {
    if (node == null) {
      return false;
    }
    if (i == word.length) {
      if (node.isEnded) {
        node.isEnded = false;
      }
      return Object.keys(node.children).length == 0;
    }

    let char = word[i];
    let childNode = node.children[char];

    const cancelNode = this._delete(childNode, word, i + 1);
    if (cancelNode) {
      delete node.children[char];
      return Object.keys(node.children).length == 0 && !node.isEnded;
    }
    return false;
  }
  Print(node = this.root, privateValue = "", result = []) {
    if (node.isEnded) {
      result.push(privateValue);
    }
    for (let char in node.children) {
      this.Print(node.children[char], privateValue + char, result);
    }

    return result;
  }
}
const trie = new TestTrie();

// Inserting words into the trie
trie.insert("apple");
trie.insert("app");
trie.insert("bat");
trie.insert("ball");
trie.insert("batman");
console.log(trie.Print());
console.log(trie.Search("app"));
// console.log(trie.delete('ball'))
// console.log(trie.Print());
