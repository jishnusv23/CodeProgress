class Node {
  constructor() {
    this.children = {};
    this.isEnded = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new Node();
      }
      current = current.children[char];
    }
    current.isEnded = true;
  }
  Print(node = this.root, result = [], printvalue = "") {
    if (!node) return null;
    if (node.isEnded) {
      result.push(printvalue);
    }
    for (let char in node.children) {
      this.Print(node.children[char], result, printvalue + char);
    }
    return result;
  }
  //serach()
  seach(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      node = node.chilren[char];
    }
    return node.isEnded;
  }

  //autoComplete
  autocomplete(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let result = [];
    this.collectWord(node, result, word);
    return result;
  }
  collectWord(node, result, word) {
    if (node.isEnded) {
      result.push(word);
    }

    for (let char in node.children) {
      this.collectWord(node.children[char], result, word + char);
    }
  }
  FindLongest() {
    let longest = "",
      secondLongest = "";
    let queue = [[this.root, ""]];
    while (queue.length) {
      const [node, word] = queue.shift();
      if (node.isEnded) {
        if (word.length > longest.length) {
          secondLongest = longest;
          longest = word;
        } else if (word.length > secondLongest.length && word !== longest) {
          secondLongest = word;
        }
      }
      for (let char in node.children) {
        queue.push([node.children[char], word + char]);
      }
    }
    return secondLongest;
  }
  FindSmallest() {
    let smallest = "";
    let secondSmallest = "";
    let queue = [[this.root, ""]];
    while (queue.length) {
      const [node, word] = queue.shift();
      if (node.isEnded) {
        if (smallest == "" || word.length < smallest.length) {
          secondSmallest = smallest;
          smallest = word;
        } else if (
          (secondSmallest == "" ||
          secondSmallest.length > word.length)&&word!==smallest
        ) {
          secondSmallest = word;
        }
      }
      for (let char in node.children) {
        queue.push([node.children[char], word + char]);
      }
    }
    return {secondSmallest,smallest};
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("bat");
trie.insert("app");
trie.insert("ap");
trie.insert("ball");
trie.insert("banana");
trie.insert("batman");

const result = trie.Print();
console.log(result);
console.log(trie.FindLongest());
console.log(trie.FindSmallest());
// console.log(trie.autocomplete('ba'))
