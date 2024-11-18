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
    return longest;
  }
  Autocomplete(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let list = [];
    this.CollectWords(node, list, word);
    return list;
  }
  CollectWords(node, list, word) {
    if (node.isEnded) {
      list.push(word);
    }
    for (let char in node.children) {
      this.CollectWords(node.children[char], list, word + char);
    }
  }
  ShortestWord() {
    let shortestWord = "";
    let queue = [[this.root, ""]];
    while (queue.length) {
      const [node, word] = queue.shift();
      if (
        node.isEnded &&
        (shortestWord == "" || word.length < shortestWord.length)
      ) {
        shortestWord = word;
      }
      for (let char in node.children) {
        queue.push([node.children[char], word + char]);
      }
    }
    return shortestWord;
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
console.log(trie.Autocomplete('b'))
console.log(trie.FindLongestString())
console.log(trie.ShortestWord())
// console.log(trie.delete('ball'))
// console.log(trie.Print());
