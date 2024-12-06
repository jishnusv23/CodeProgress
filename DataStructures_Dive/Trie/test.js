class Node{
  constructor(){
    this.children={}
    this.isEnded=false
  }
}

class Trie{
  constructor(){
    this.root=new Node()

  }
  
  insert(word){
    let node=this.root
    for(let char of word){
      if(!node.children[char]){
        node.children[char]=new Node()
      }
      node=node.children[char]

    }
    node.isEnded=true
  }
  search(word){
    let node=this.root
    for(let char of word){
      if(!node.children[char]){
        return false
      }
      node=node.children[char]
    }
    return node.isEnded
  }
  AutoComplete(word){
    let node=this.root
    for(let char of word){
      if(!node.children[char]){
        return []
      }
      node=node.children[char]

    }
    const result=[]
    this.collectWords(node,word,result)
    return result
  }
  secondLargest(){
    let first=''
    let second=''
    let queue=[[this.root,""]]
    while(queue.length){
      const [node,word]=queue.shift()
      if(node.isEnded&&word.length>first.length){
        second=first
        first=word
      }else if(word.length>second.length&&first.length>second.length){
        second=word
      }
      for(let char in node.children){
        queue.push([node.children[char],word+char])
      }
    }
    return {first,second}
  }
  collectWords(node,word,result){
    if(node.isEnded){
      result.push(word)
    }
    for(let char in node.children){
      this.collectWords(node.children[char],word+char,result)

    }
  }
  Print(node=this.root,result=[],printvalue=""){
    if(node.isEnded){
      result.push(printvalue)
    }

    
    for(let char in node.children ){
      this.Print(node.children[char],result,printvalue+char)
    }
   return result
  }
}
const trie = new Trie();

// Insert words into the Trie
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("dog");
trie.insert("dot");
trie.insert("dove");
console.log(trie.search('dove'))
console.log(trie.AutoComplete('do'))
console.log(trie.secondLargest())

// Print all words in the Trie
const words = trie.Print();
console.log("Words in the Trie:", words);
