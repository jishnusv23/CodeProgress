class Node{
    constructor(){
        this.children={}
        this.isEnded=false
    }
}

class DeleteTrieNode{
    constructor(){
        this.root=new Node()

    }
   delete(word){
    this._delete(this.root,word,0)
   }
   _delete(node,word,index){
    if(node==null){
        return false
    }
    if(index===word.length){
        if(node.isEnded){
            node.isEnded=false
        }
        return Object.keys(node.children).length==0
    }
    let char=word[index]
    let childNode=node.children[char]
    const cancelNode=this._delete(childNode,word,index+1)
    if(cancelNode){
        delete node.children[char]
        return Object.keys(node.children).length==0&&!node.isEnded
    }
    return false
   }
}
const trie = new DeleteTrieNode();