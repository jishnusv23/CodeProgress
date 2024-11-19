//BST
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null

    }

}

class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }

    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node

            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    InOrder(root){
        if(root){
            this.InOrder(root.left)
            console.log(root.value)
            this.InOrder(root.right)
        }
    }
    min(root){
       if(!root.left){
        return root.value
       }
       return this.min(root.left)
    }
    detele(value){
        this.root=deletValue(this.root,value)
    }
    deletValue(root,value){
        if(!root) return null

        if(value<root.value){
            root.left=this.deletValue(root.left,value)
        }else if(value>root.value){
            root.right=this.deletValue(root.right,value)
        }else{
            if(!root.right&&!root.left){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deletValue(root.right,root.value)
        }
        return root
    }
    levelOrder(){
        let queue=[this.root]
        while (queue.length) {
            let current=queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
}